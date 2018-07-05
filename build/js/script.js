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