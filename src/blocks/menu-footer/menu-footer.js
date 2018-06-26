$(document).ready(function() {	
	$('.menu-footer__title').click(function () {
		if (jQuery(window).width() < 768 ) {
			var menu = $(this).parent().parent();

			menu.toggleClass("menu-footer--open");

			menu.children('.menu-footer__body').slideToggle(300);
		}
	});
});