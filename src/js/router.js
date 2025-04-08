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

const router = new Navigo('/', {
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
        console.log('type: ', type);
        const products = await getProducts(type);
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
      '/favorite',
      () => {
        breadcrumb()
        goods('Избранное', null, main())
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
