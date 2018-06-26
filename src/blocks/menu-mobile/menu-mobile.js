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