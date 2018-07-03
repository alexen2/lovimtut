$(document).ready(function() {	
	$('.footer__ico-money img').hover(function() {
		$(this).attr('src', "images/" + $(this).attr('data-color') + "-color.svg");
	}, function() {
		$(this).attr('src', "images/" + $(this).attr('data-color') + ".svg");
	});
});