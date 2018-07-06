$(document).ready(function() {	
	jQuery("#slider-1").slider({
		min: 0,
		max: 35000,
		values: [698, 29698],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-1").val(jQuery("#slider-1").slider("values",0));
			jQuery("input#maxCost-1").val(jQuery("#slider-1").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-1").val(jQuery("#slider-1").slider("values",0));
			jQuery("input#maxCost-1").val(jQuery("#slider-1").slider("values",1));
	  }
	});

	jQuery("#slider-2").slider({
		min: 0,
		max: 7000,
		values: [963, 2987],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-2").val(jQuery("#slider-2").slider("values",0));
			jQuery("input#maxCost-2").val(jQuery("#slider-2").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-2").val(jQuery("#slider-2").slider("values",0));
			jQuery("input#maxCost-2").val(jQuery("#slider-2").slider("values",1));
	  }
	});

	jQuery("#slider-3").slider({
		min: 0,
		max: 7000,
		step: 200,
		values: [800, 5000],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-3").val(jQuery("#slider-3").slider("values",0));
			jQuery("input#maxCost-3").val(jQuery("#slider-3").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-3").val(jQuery("#slider-3").slider("values",0));
			jQuery("input#maxCost-3").val(jQuery("#slider-3").slider("values",1));
	  }
	});

	jQuery("#slider-1-mob").slider({
		min: 0,
		max: 35000,
		values: [698, 29698],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-1-mob").val(jQuery("#slider-1-mob").slider("values",0));
			jQuery("input#maxCost-1-mob").val(jQuery("#slider-1-mob").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-1-mob").val(jQuery("#slider-1-mob").slider("values",0));
			jQuery("input#maxCost-1-mob").val(jQuery("#slider-1-mob").slider("values",1));
	  }
	});

	jQuery("#slider-2-mob").slider({
		min: 0,
		max: 7000,
		values: [963, 2987],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-2-mob").val(jQuery("#slider-2-mob").slider("values",0));
			jQuery("input#maxCost-2-mob").val(jQuery("#slider-2-mob").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-2-mob").val(jQuery("#slider-2-mob").slider("values",0));
			jQuery("input#maxCost-2-mob").val(jQuery("#slider-2-mob").slider("values",1));
	  }
	});

	jQuery("#slider-3-mob").slider({
		min: 0,
		max: 7000,
		step: 200,
		values: [800, 5000],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost-3-mob").val(jQuery("#slider-3-mob").slider("values",0));
			jQuery("input#maxCost-3-mob").val(jQuery("#slider-3-mob").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-3-mob").val(jQuery("#slider-3-mob").slider("values",0));
			jQuery("input#maxCost-3-mob").val(jQuery("#slider-3-mob").slider("values",1));
	  }
	});
});

$(window).on("load",function(){    
	$(".cat-filter__scroll").mCustomScrollbar({
	  axis: "y"
	});    
});