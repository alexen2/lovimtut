$(document).ready(function() {	
	$('.menu__level-2__dropdown').hover(function() {
    $(this).children('.menu__level-3').show(300); 
	}, 
	function() {
	    $(this).children('.menu__level-3').hide(300);
	});	
});