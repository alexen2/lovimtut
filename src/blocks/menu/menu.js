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

	//alert(screen.width);
});