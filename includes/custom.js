$(document).ready(function() {  
	$("html").niceScroll();
});


(function(e){e.fn.model=function(t){var n={width:"50%",height:300};t=e.extend({},n,t);var r=this.context.id,i=e("body").find("#"+r+"-model");e("body").prepend('<div class="model-overlay"></div>');i.css({width:t.width,height:t.height});i.show()}})(jQuery)

$('#more-info').on('click', function () {
  $(this).model();
});