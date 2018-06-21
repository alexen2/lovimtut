(function($){				
  jQuery.fn.lightTabs = function(options){
      
    var createTabs = function(){
      tabs = this;
      i = 0;
      
      showPage = function(i){
          $(tabs).children("div").children("div").hide(500);
          $(tabs).children("div").children("div").eq(i).show(500);
          $(tabs).children("ul").children("li").removeClass("tabs__icon--active");
          $(tabs).children("ul").children("li").eq(i).addClass("tabs__icon--active");
      }
      
      showPage(0);				
      
      $(tabs).children("ul").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;                        
      });
      
      $(tabs).children("ul").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
      });				
    };	

    return this.each(createTabs);
  };	
})(jQuery);

$(document).ready(function(){
  $(".tabs").lightTabs();
});