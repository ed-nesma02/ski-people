export const initSlider = () => {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css'),
  ]).then(([{Navigation, Thumbs}, Swiper]) => {
    try {
      const thumbnailsSwiper = new Swiper.default('.slider-thumbnails', {
        spaceBetween: 14,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      new Swiper.default('.product__slider', {
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
    } catch (error) {
      console.error('error: ', error);
    }
  });
};