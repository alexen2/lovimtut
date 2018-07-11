$(document).ready(function() {
	var swiper = new Swiper('.slider-product__slider', {
    direction: 'vertical',    
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    mousewheel: true,

    pagination: {
      el: '.slider-product__pag',
      clickable: true,
    },

    navigation: {
      nextEl: '.slider-product__next',
      prevEl: '.slider-product__prev',
    },

    breakpoints: {   
      767: {
        direction: 'horizontal',
        spaceBetween: 50,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1199: {
        direction: 'vertical',
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1719: {
        direction: 'horizontal',
        spaceBetween: 15,
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1720: {
        direction: 'vertical',
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 1,
      }
    } 
  });
});