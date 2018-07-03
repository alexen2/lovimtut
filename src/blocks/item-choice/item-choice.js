(function($){
  $(window).on("load",function(){    
    $(".item-choice").mCustomScrollbar({
      axis: "x",
      advanced: {
        autoExpandHorizontalScroll: true
      },
      mouseWheel: {
      	enable: false
      }
    });    
  });
})(jQuery);