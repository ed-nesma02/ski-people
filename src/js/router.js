import Navigo from 'navigo';
import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { getCategories, getProductById, getProducts } from './api.js';
import { initSlider } from './slider.js';
import { main } from '../components/main.js';
import { catalog } from '../components/catalog.js';
import { goods } from '../components/goods.js';
import { cart } from '../components/cart.js';
import { breadcrumb } from '../components/breadcrumb.js';
import { product } from '../components/product.js';
import { order } from '../components/order.js';
import { localStorageLoad } from './localStorage.js';

export const router = new Navigo('/', {
  linksSelector: 'a[href^="/"]',
});

export const initRouter = () => {
  header();
  main();
  footer();
  initSlider();

  router
    .on(
      '/',
      async ({ params }) => {
        let type = params?.type;
        let page = params?.page;
        const products = await getProducts({type, page});
        const categories = await getCategories();
        catalog(categories, main());
        goods(null, products, main());
        router.updatePageLinks();
      },
      {
        leave(done) {
          main().innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/search',
      async ({ params }) => {
        let search = params?.search;
        let page = params?.page;
        const products = await getProducts({search, page});
        breadcrumb({name: `Поиск: ${search}`}, main())
        goods(`Результаты поиска: ${search}`, products, main());
        router.updatePageLinks();
      },
      {
        leave(done) {
          main().innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/favorite',
      async () => {
        const listFavorite = localStorageLoad('favorite')
        const productsFavotire = listFavorite.length ? await getProducts({list: listFavorite}) : [];
        breadcrumb({name: 'Избранное'}, main())
        goods('Избранное', productsFavotire, main())
        router.updatePageLinks();
      },
      {
        leave(done) {
          main().innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/product/:id',
      async ({ data }) => {
        const productItems = await getProductById(data.id);
        breadcrumb(productItems, main())
        product(productItems, main())
        initSlider();
        router.updatePageLinks();
      },
      {
        leave(done) {
          main().innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/cart',
      () => {
        cart(main())

        router.updatePageLinks();
      },
      {
        leave(done) {
          main().innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/order',
      () => {
        order(main())
      },
      {
        leave(done) {
          main().innerHTML = '';
          done();
        },
      }
    )
    .notFound(
      () => {
        main().innerHTML = `
        <div class="container"><h1>404\nСтраница не найдена</h1></div>
      `;
      },
      {
        leave(done) {
          main().innerHTML = '';
          done();
        },
      }
    );

  router.resolve();
};
