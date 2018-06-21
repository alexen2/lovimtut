$(document).ready(function () {
  var swiper = new Swiper('.slider-top__body', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 0,
    pagination: {
      el: '.slider-top__pag',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {   
      320: {          
          slidesPerView: 1,
          slidesPerGroup: 1,
      },
      1199: {
          slidesPerView: 1,
          slidesPerGroup: 1,
      },
      1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      }
    }
  });     
});