$(document).ready(function(){
	var slider = $('.slider');
	var settings = {
  	responsive: [
	{
		breakpoint: 976,
			settings: {
  			dots: true,
  			arrows: false
  		}
  	}]		
  };

  $('.col-3').each(function(i) {
  	$(this).addClass("order-" + i);
  });

  $('.col-3 > a').click(function(e){
  		e.preventDefault();
  		$(this).parent().css('background', "#000");
  });

  $('.accordion dt').click(function(){
  		var dd = $(this).next();
			dd.toggle({
				duration: "slow",
				easing: "swing"
			});
  });

  $('.tabs dt').click(function(){
  		if(!$(this).hasClass('active')) {
  			$(this).parent().find('.active').removeClass('active');
  			$(this).addClass('active');
  			$(this).next().addClass('active');
  		}
  });

  $('.photoUp').click(function(e) {
    	e.preventDefault();
    	var galleryHtml = '';
    	if($(this).hasClass('upGallery')) {
  			galleryHtml = '<ul class="innerGallery">'; 
    		$('.photoUp.upGallery').each(function(){
    			var galleryImg = $(this).attr('href');
    			galleryHtml += '<li><img src="' + galleryImg + '"></li>'
    		});
    		galleryHtml += '</ul>';
    	}
    	var fullImg = $(this).attr('href');

    	var html = 	'<div class="photoUpBoxWrapper">' + 
        			 	'<div class="photoUpBox">' + 
        					'<img src="' + fullImg + '">' +
        					galleryHtml +
        				'</div>' +
    				'</div>';
    	$(html).appendTo('body');
    });

      $(document).on('click', '.photoUpBoxWrapper', function(e){
      	//if(jQuery(e.target).hasClass('photoUpBoxWrapper')) {
    		    $(this).remove();
    	 //}
  });

  moveHtml();

  $(window).resize(function(){
    moveHtml();
  }); 

  $(document).on('click', '.photoUpBoxWrapper .innerGallery img', function(e){
      	var galleryImg = $(this).attr('src');
      	$('.photoUpBox > img').attr('src', galleryImg);
  });

  slider.slick(settings);
});

function moveHtml() {
    var mql764 = window.matchMedia('(max-width: 764px)');
    var mql320 = window.matchMedia('(max-width: 320px)');

     if(mql764.matches && !mql320.matches) {
        var colWrapper = $('.col-wrapper').detach();
        colWrapper.insertAfter('.shopping');
    } else {
        var colWrapper = $('.col-wrapper').detach();
        colWrapper.insertBefore('.shopping');
    }
}