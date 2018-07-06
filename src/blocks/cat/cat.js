$(document).ready(function() {
	var cat__icons = $('.cat__icons-big');
	var card = cat__icons.children('.cat__icon-card');
	var list = cat__icons.children('.cat__icon-list');
	var cat = $('.cat');
	var product = $('.product');

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