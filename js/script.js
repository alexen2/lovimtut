(function($){
  $(window).on("load",function(){    
    $(".brands-line").mCustomScrollbar({
      axis: "x",
      moveDragger: true
    });    
  });
})(jQuery);
$(document).ready(function() {
	var cat_icons = $('.cat__icons');
	var card_1 = cat_icons.children('.cat__icon-card');
	var list_1 = cat_icons.children('.cat__icon-list');

	var cat_icons_big = $('.cat__icons-big');
	var card = cat_icons_big.children('.cat__icon-card');
	var list = cat_icons_big.children('.cat__icon-list');

	var cat = $('.cat');
	var product = $('.product');

	card_1.click(function() {
		if(card_1.hasClass('cat__icon-hide')) {
			return false;
		} else {
			card_1.addClass('cat__icon-hide');
			list_1.removeClass('cat__icon-hide');
			cat.removeClass('cat--list');	
			product.removeClass('product--list');	
		}	
	});

	list_1.click(function() {
		if(list_1.hasClass('cat__icon-hide')) {
			return false;
		} else {
			list_1.addClass('cat__icon-hide');
			card_1.removeClass('cat__icon-hide');
			cat.addClass('cat--list');
			product.addClass('product--list');	
		}	
	});

	card.click(function() {
		if(card.hasClass('cat__icon-active')) {
			return false;
		} else {
			card.addClass('cat__icon-active');
			list.removeClass('cat__icon-active');
			cat.removeClass('cat--list');	
			product.removeClass('product--list');	
		}	
	});

	list.click(function() {
		if(list.hasClass('cat__icon-active')) {
			return false;
		} else {
			list.addClass('cat__icon-active');
			card.removeClass('cat__icon-active');
			cat.addClass('cat--list');
			product.addClass('product--list');	
		}	
	});
});
$(document).ready(function() {	
	jQuery("#slider-1").slider({
		min: 0,
		max: 35000,
		values: [698, 29698],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-1").val(jQuery("#slider-1").slider("values",0));
			jQuery("input#maxCost-1").val(jQuery("#slider-1").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-1").val(jQuery("#slider-1").slider("values",0));
			jQuery("input#maxCost-1").val(jQuery("#slider-1").slider("values",1));
	  }
	});

	jQuery("input#minCost-1").change(function(){
		var value1 = jQuery("input#minCost-1").val();
		var value2 = jQuery("input#maxCost-1").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-1").val(value1);
		}

		jQuery("#slider-1").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-1").change(function(){
		var value1 = jQuery("input#minCost-1").val();
		var value2 = jQuery("input#maxCost-1").val();
		var slider_max = jQuery("#slider-1").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-1").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-1").val(value2);
		}

		jQuery("#slider-1").slider("values", 1, value2);
	});

	/**********************************************************/

	jQuery("#slider-2").slider({
		range: true,		
		values: [0, 7000],
		min: 0,
		max: 7000,

		stop: function(event, ui) {
			jQuery("input#minCost-2").val(jQuery("#slider-2").slider("values",0));
			jQuery("input#maxCost-2").val(jQuery("#slider-2").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-2").val(jQuery("#slider-2").slider("values",0));
			jQuery("input#maxCost-2").val(jQuery("#slider-2").slider("values",1));
	  }
	});

	jQuery("input#minCost-2").change(function(){
		var value1 = jQuery("input#minCost-2").val();
		var value2 = jQuery("input#maxCost-2").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-2").val(value1);
		}

		jQuery("#slider-2").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-2").change(function(){
		var value1 = jQuery("input#minCost-2").val();
		var value2 = jQuery("input#maxCost-2").val();
		var slider_max = jQuery("#slider-2").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-2").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-2").val(value2);
		}

		jQuery("#slider-2").slider("values", 1, value2);
	});

	/**********************************************************/

	jQuery("#slider-3").slider({
		min: 0,
		max: 7000,
		step: 200,
		values: [0, 7000],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-3").val(jQuery("#slider-3").slider("values",0));
			jQuery("input#maxCost-3").val(jQuery("#slider-3").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-3").val(jQuery("#slider-3").slider("values",0));
			jQuery("input#maxCost-3").val(jQuery("#slider-3").slider("values",1));
	  }
	});

	jQuery("input#minCost-3").change(function(){
		var value1 = jQuery("input#minCost-3").val();
		var value2 = jQuery("input#maxCost-3").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-3").val(value1);
		}

		jQuery("#slider-3").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-3").change(function(){
		var value1 = jQuery("input#minCost-3").val();
		var value2 = jQuery("input#maxCost-3").val();
		var slider_max = jQuery("#slider-3").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-3").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-3").val(value2);
		}

		jQuery("#slider-3").slider("values", 1, value2);
	});

	/**********************************************************/

	jQuery("#slider-1-mob").slider({
		min: 0,
		max: 35000,
		values: [698, 29698],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-1-mob").val(jQuery("#slider-1-mob").slider("values",0));
			jQuery("input#maxCost-1-mob").val(jQuery("#slider-1-mob").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-1-mob").val(jQuery("#slider-1-mob").slider("values",0));
			jQuery("input#maxCost-1-mob").val(jQuery("#slider-1-mob").slider("values",1));
	  }
	});

	jQuery("input#minCost-1-mob").change(function(){
		var value1 = jQuery("input#minCost-1-mob").val();
		var value2 = jQuery("input#maxCost-1-mob").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-1-mob").val(value1);
		}

		jQuery("#slider-1-mob").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-1-mob").change(function(){
		var value1 = jQuery("input#minCost-1-mob").val();
		var value2 = jQuery("input#maxCost-1-mob").val();
		var slider_max = jQuery("#slider-1-mob").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-1-mob").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-1-mob").val(value2);
		}

		jQuery("#slider-1-mob").slider("values", 1, value2);
	});

	/**********************************************************/

	jQuery("#slider-2-mob").slider({
		min: 0,
		max: 7000,
		values: [0, 7000],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-2-mob").val(jQuery("#slider-2-mob").slider("values",0));
			jQuery("input#maxCost-2-mob").val(jQuery("#slider-2-mob").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-2-mob").val(jQuery("#slider-2-mob").slider("values",0));
			jQuery("input#maxCost-2-mob").val(jQuery("#slider-2-mob").slider("values",1));
	  }
	});

	jQuery("input#minCost-2-mob").change(function(){
		var value1 = jQuery("input#minCost-2-mob").val();
		var value2 = jQuery("input#maxCost-2-mob").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-2-mob").val(value1);
		}

		jQuery("#slider-2-mob").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-2-mob").change(function(){
		var value1 = jQuery("input#minCost-2-mob").val();
		var value2 = jQuery("input#maxCost-2-mob").val();
		var slider_max = jQuery("#slider-2-mob").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-2-mob").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-2-mob").val(value2);
		}

		jQuery("#slider-2-mob").slider("values", 1, value2);
	});

	/**********************************************************/

	jQuery("#slider-3-mob").slider({
		min: 0,
		max: 7000,
		step: 200,
		values: [800, 5000],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-3-mob").val(jQuery("#slider-3-mob").slider("values",0));
			jQuery("input#maxCost-3-mob").val(jQuery("#slider-3-mob").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-3-mob").val(jQuery("#slider-3-mob").slider("values",0));
			jQuery("input#maxCost-3-mob").val(jQuery("#slider-3-mob").slider("values",1));
	  }
	});

	jQuery("input#minCost-3-mob").change(function(){
		var value1 = jQuery("input#minCost-3-mob").val();
		var value2 = jQuery("input#maxCost-3-mob").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-3-mob").val(value1);
		}

		jQuery("#slider-3-mob").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-3-mob").change(function(){
		var value1 = jQuery("input#minCost-3-mob").val();
		var value2 = jQuery("input#maxCost-3-mob").val();
		var slider_max = jQuery("#slider-3-mob").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-3-mob").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-3-mob").val(value2);
		}

		jQuery("#slider-3-mob").slider("values", 1, value2);
	});

	/**********************************************************/


	$('.cat-filter__clear-check').click(function(event) {
		event.preventDefault();

		var block = $(this).parent().parent();
		block.find("input[type=checkbox]").prop("checked", false);
	});
});

$(window).on("load",function(){    
	$(".cat-filter__scroll").mCustomScrollbar({
	  axis: "y"
	});    
});
$(function() {
	$('#cat-sort').selectize({
  	create: true,
  	sortField: 'text'
	});
});

$(document).ready(function() {	
	$('.footer__ico-money img').hover(function() {
		$(this).attr('src', "images/" + $(this).attr('data-color') + "-color.svg");
	}, function() {
		$(this).attr('src', "images/" + $(this).attr('data-color') + ".svg");
	});
});
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}
$(document).ready(function() {
	$('.header__hamburger span').click(function () {
		$('.menu-mobile').addClass('menu-mobile--open');
	});

	$('.menu-mobile__close').click(function () {
		$('.menu-mobile').removeClass('menu-mobile--open');
	});

	$('.menu-mobile__link--sub').click(function () {
		$('.menu-mobile__body--2').addClass('menu-mobile__body--open');
	});

	$('.menu-mobile__link--back').click(function () {
		$('.menu-mobile__body--2').removeClass('menu-mobile__body--open');
	});
	
	var $this = $(this),
		 	st = $this.scrollTop();

	if( st > 285 ){
		$('.header__bottom').addClass('header__bottom--scrolled');
	}else{
		$('.header__bottom').removeClass('header__bottom--scrolled');
	}
		
	$(window).scroll(function(){
		var $this = $(this),
			 	st = $this.scrollTop();

		if( st > 285 ){
			$('.header__bottom').addClass('header__bottom--scrolled');
		}else{
			$('.header__bottom').removeClass('header__bottom--scrolled');
		}
	});	
});
$(document).ready(function() {
	$('.header-mobile__ico-search').click(function(event) {
		event.preventDefault();

		var header_mobile__search = $('.header-mobile__search');

		if(header_mobile__search.hasClass('header-mobile__search--show')) {
			header_mobile__search.removeClass('header-mobile__search--show');
		} else {
			header_mobile__search.addClass('header-mobile__search--show');
		}		
	});


	$('#hamburger').click(function() {
		var menu_mobile = $('.menu-mobile');
		menu_mobile.toggleClass('menu-mobile--show');		
	});
});
(function($){
  $(window).on("load",function(){    
    $(".item-choice").mCustomScrollbar({
      axis: "x",
      advanced: {
        autoExpandHorizontalScroll: true
      },
      mouseWheel: {
      	enable: false
      }
    });    
  });
})(jQuery);
$(document).ready(function() {	
	$('.menu__level-2__dropdown').hover(function() {
    $(this).children('.menu__level-3').show(300); 
	}, 
	function() {
	    $(this).children('.menu__level-3').hide(300);
	});

	$('.menu__level-2-left').click(function() {
		var menu = $(this).siblings('.menu__level-2-body').children('ul');
		var li_num = menu.children('li').length;
		var step_width = 850;
		var menu_width = li_num * 170;		
		var menu_left = menu.css('left');

		if(screen.width >= 1600) {
			step_width = 1360;
		}
		
		menu_left = Number(menu_left.replace('px', ''));

		if(menu_left < 0) {
			menu.css('left', menu_left + step_width+'px');
		} 
	});

	$('.menu__level-2-right').click(function() {
		var menu = $(this).siblings('.menu__level-2-body').children('ul');
		var li_num = menu.children('li').length;		
		var step_width = 850;
		var menu_width = li_num * 170;		
		var menu_left = menu.css('left');

		if(screen.width >= 1600) {
			step_width = 1360;
		}
		
		menu_left = menu_left.replace('px', '');

		if(menu_left - step_width > -menu_width) {
			menu.css('left', menu_left - step_width+'px');
		}
	});

	$('.menu__item').hover(function() {
		var li_num = $(this).find('.menu__level-2-body').children('ul').children('li').length;
		
		if(li_num < 6) {
			$(this).find('.menu__level-2-left').css('display', 'none');
			$(this).find('.menu__level-2-right').css('display', 'none');
		}
	});
});
$(document).ready(function() {	
	$('.menu-footer__title').click(function () {
		if (jQuery(window).width() < 768 ) {
			var menu = $(this).parent().parent();

			menu.toggleClass("menu-footer--open");

			menu.children('.menu-footer__body').slideToggle(300);
		}
	});
});
$(document).ready(function() {
	$('.menu-mobile__nav').click(function() {
		//var level_class = $(this).data('mob_level');
		//$('.'+level_class).toggleClass(level_class + '--show');
		$(this).next('.menu-mobile__in').toggleClass('menu-mobile__in--show');
	});

	$('.menu-mobile__close').click(function() {
		$(this).parent().parent().parent().toggleClass('menu-mobile__in--show');
	});
});
$(document).ready(function() {
	$('.mobile-filter-btn').click(function(event) {
		event.preventDefault();

		var mobile_filter = $('.mobile-filter');

		if(mobile_filter.hasClass('mobile-filter--show')) {
			mobile_filter.removeClass('mobile-filter--show');
			$("html,body").css("overflow-y", "auto");
		} else {
			mobile_filter.addClass('mobile-filter--show');
			$("html,body").css("overflow-y", "hidden");
		}		
	});

	$('.mobile-filter-close').click(function() {
		$('.mobile-filter').removeClass('mobile-filter--show');
		$("html,body").css("overflow-y", "auto");
	});
});
$(function() {
	$('#city').selectize({
  	create: true,
  	sortField: 'text'
	});

	$('#search_cat').selectize({
  	create: true,
  	sortField: 'text'
	});	
});

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
(function($){				
  jQuery.fn.lightTabs = function(options){
      
    var createTabs = function(){
      tabs = this;
      i = 0;
      
      showPage = function(i){
          $(tabs).children("div").children("div").fadeOut("slow");
          $(tabs).children("div").children("div").eq(i).fadeIn("slow");
          $(tabs).children("ul").children("li").removeClass("tabs__icon--active");
          $(tabs).children("ul").children("li").eq(i).addClass("tabs__icon--active");
      }
      
      showPage(0);				
      
      $(tabs).children("ul").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;                        
      });
      
      $(tabs).children("ul").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
      });				
    };	

    return this.each(createTabs);
  };	
})(jQuery);

$(document).ready(function(){
  $(".tabs").lightTabs();
});
$(window).on("load",function(){    
	$(".testimonial").mCustomScrollbar({
	  axis: "y",
	  advanced:{
			autoExpandHorizontalScroll:true
		}
	});    
});