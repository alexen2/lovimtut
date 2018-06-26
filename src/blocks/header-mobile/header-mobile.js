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