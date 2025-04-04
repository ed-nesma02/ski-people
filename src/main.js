import 'normalize.css';
import './style.scss';
import Swiper from 'swiper';
import 'swiper/scss'
import { Navigation, Thumbs } from 'swiper/modules';
import { initRouter } from './js/router.js';

const init = () => {
  initRouter()
} 


const thumbnailsSwiper = new Swiper('.slider-thumbnails', {
  spaceBetween: 14,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const productSwiper = new Swiper('.product__slider', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.product__slider-arrow_next',
    prevEl: '.product__slider-arrow_prev',
  },
  modules: [Navigation, Thumbs],
  thumbs: {
    swiper: thumbnailsSwiper,
  },
});

init()