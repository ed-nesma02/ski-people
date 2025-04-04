import Navigo from 'navigo';
import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { homePage } from '../pages/homePage.js';
import { favoritePage } from '../pages/favoritePage.js';
import { productPage } from '../pages/productPage.js';
import { cartPage } from '../pages/cartPage.js';
import { orderPage } from '../pages/orderPage.js';

const router = new Navigo('/', {
  linksSelector: 'a[href^="/"]',
});

export const initRouter = () => {
  router
    .on(
      '/',
      () => {
        document.body.append(header(), homePage(), footer());
      },
      {
        leave(done) {
          document.body.innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/favorite',
      () => {
        document.body.append(header(), favoritePage(), footer());
      },
      {
        leave(done) {
          document.body.innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/product',
      () => {
        document.body.append(header(), productPage(), footer());
      },
      {
        leave(done) {
          document.body.innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/cart',
      () => {
        document.body.append(header(), cartPage(), footer());
      },
      {
        leave(done) {
          document.body.innerHTML = '';
          done();
        },
      }
    )
    .on(
      '/order',
      () => {
        document.body.append(header(), orderPage(), footer());
      },{
        leave(done) {
          document.body.innerHTML = '';
          done();
        },
      }
    )
    .notFound(() => {
      console.log('ERROR 404');
    });

  router.resolve();
};
