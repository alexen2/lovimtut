$(document).ready(function () {
  var swiper = new Swiper('.slider-overview__body', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 25,

    navigation: {
      nextEl: '.slider-overview__next',
      prevEl: '.slider-overview__prev',
    },

    breakpoints: {   
      1199: {
        spaceBetween: 350,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1200: {
        spaceBetween: 54,
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    }
  });    
});