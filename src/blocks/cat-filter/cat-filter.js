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

	jQuery("input#minCost-1").change(function(){
		var value1 = jQuery("input#minCost-1").val();
		var value2 = jQuery("input#maxCost-1").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-1").val(value1);
		}

		jQuery("#slider-1").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-1").change(function(){
		var value1 = jQuery("input#minCost-1").val();
		var value2 = jQuery("input#maxCost-1").val();
		var slider_max = jQuery("#slider-1").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-1").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-1").val(value2);
		}

		jQuery("#slider-1").slider("values", 1, value2);
	});

	/**********************************************************/

	jQuery("#slider-2").slider({
		range: true,		
		values: [0, 7000],
		min: 0,
		max: 7000,

		stop: function(event, ui) {
			jQuery("input#minCost-2").val(jQuery("#slider-2").slider("values",0));
			jQuery("input#maxCost-2").val(jQuery("#slider-2").slider("values",1));
	  },
	  slide: function(event, ui){
			jQuery("input#minCost-2").val(jQuery("#slider-2").slider("values",0));
			jQuery("input#maxCost-2").val(jQuery("#slider-2").slider("values",1));
	  }
	});

	jQuery("input#minCost-2").change(function(){
		var value1 = jQuery("input#minCost-2").val();
		var value2 = jQuery("input#maxCost-2").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-2").val(value1);
		}

		jQuery("#slider-2").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-2").change(function(){
		var value1 = jQuery("input#minCost-2").val();
		var value2 = jQuery("input#maxCost-2").val();
		var slider_max = jQuery("#slider-2").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-2").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-2").val(value2);
		}

		jQuery("#slider-2").slider("values", 1, value2);
	});

	/**********************************************************/

	jQuery("#slider-3").slider({
		min: 0,
		max: 7000,
		step: 200,
		values: [0, 7000],
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

	jQuery("input#minCost-3").change(function(){
		var value1 = jQuery("input#minCost-3").val();
		var value2 = jQuery("input#maxCost-3").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-3").val(value1);
		}

		jQuery("#slider-3").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-3").change(function(){
		var value1 = jQuery("input#minCost-3").val();
		var value2 = jQuery("input#maxCost-3").val();
		var slider_max = jQuery("#slider-3").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-3").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-3").val(value2);
		}

		jQuery("#slider-3").slider("values", 1, value2);
	});

	/**********************************************************/

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

	jQuery("input#minCost-1-mob").change(function(){
		var value1 = jQuery("input#minCost-1-mob").val();
		var value2 = jQuery("input#maxCost-1-mob").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-1-mob").val(value1);
		}

		jQuery("#slider-1-mob").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-1-mob").change(function(){
		var value1 = jQuery("input#minCost-1-mob").val();
		var value2 = jQuery("input#maxCost-1-mob").val();
		var slider_max = jQuery("#slider-1-mob").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-1-mob").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-1-mob").val(value2);
		}

		jQuery("#slider-1-mob").slider("values", 1, value2);
	});

	/**********************************************************/

	jQuery("#slider-2-mob").slider({
		min: 0,
		max: 7000,
		values: [0, 7000],
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

	jQuery("input#minCost-2-mob").change(function(){
		var value1 = jQuery("input#minCost-2-mob").val();
		var value2 = jQuery("input#maxCost-2-mob").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-2-mob").val(value1);
		}

		jQuery("#slider-2-mob").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-2-mob").change(function(){
		var value1 = jQuery("input#minCost-2-mob").val();
		var value2 = jQuery("input#maxCost-2-mob").val();
		var slider_max = jQuery("#slider-2-mob").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-2-mob").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-2-mob").val(value2);
		}

		jQuery("#slider-2-mob").slider("values", 1, value2);
	});

	/**********************************************************/

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

	jQuery("input#minCost-3-mob").change(function(){
		var value1 = jQuery("input#minCost-3-mob").val();
		var value2 = jQuery("input#maxCost-3-mob").val();

	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			jQuery("input#minCost-3-mob").val(value1);
		}

		jQuery("#slider-3-mob").slider("values", 0, value1);	
	});

		
	jQuery("input#maxCost-3-mob").change(function(){
		var value1 = jQuery("input#minCost-3-mob").val();
		var value2 = jQuery("input#maxCost-3-mob").val();
		var slider_max = jQuery("#slider-3-mob").slider("option", "max");
		
		if (value2 > slider_max) { value2 = slider_max; jQuery("input#maxCost-3-mob").val(slider_max)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			jQuery("input#maxCost-3-mob").val(value2);
		}

		jQuery("#slider-3-mob").slider("values", 1, value2);
	});

	/**********************************************************/


	$('.cat-filter__clear-check').click(function(event) {
		event.preventDefault();

		var block = $(this).parent().parent();
		block.find("input[type=checkbox]").prop("checked", false);
	});
});

$(window).on("load",function(){    
	$(".cat-filter__scroll").mCustomScrollbar({
	  axis: "y"
	});    
});