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
	$('.header-mobile__ico-search').click(function () {
		var header_mobile__search = $('.header-mobile__search');

		if(header_mobile__search.hasClass('header-mobile__search--show')) {
			header_mobile__search.removeClass('header-mobile__search--show');
		} else {
			header_mobile__search.addClass('header-mobile__search--show');
		}		
	});
});