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