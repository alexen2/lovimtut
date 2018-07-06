$(document).ready(function() {
	$('.mobile-filter-btn').click(function(event) {
		event.preventDefault();

		var mobile_filter = $('.mobile-filter');

		if(mobile_filter.hasClass('mobile-filter--show')) {
			mobile_filter.removeClass('mobile-filter--show');
		} else {
			mobile_filter.addClass('mobile-filter--show');
		}		
	});
});