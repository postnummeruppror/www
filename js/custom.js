/*
 * JUNTOS
 *
 * Copyright (c) 2013 F²
 * 
 * Main Javascript
 */
(function($) {
    "use strict";
    //DETECT MOBILE DEVICES TO FIX BACKGROUND COVER ISSUE
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    $("body").addClass("mobile");
	}
    //LOADER
    $(window).load(function () {
		$('#loader').fadeOut();
	});
	//BOOTSTRAP ALERTS FOR FORM
	$(".alert").alert();
    //RESPONSIVE MENU
    $('#navigation nav').meanmenu({
	    meanScreenWidth: "998",
	    onePage: "true",
	    meanMenuContainer:"#navigation .container"
    });
    //PROJECT SLIDER
	var windowsize = $(window).height();
	$('#project').css({'height': windowsize + 'px'});
    $(window).load(function() {
	    var options = {
        autoPlay: true,
        nextButton: true,
        prevButton: true,
        pagination: true,
        preloader: true
	    };
	    var sequence = $("#project").sequence(options).data("sequence");
	    $(".sequence-prev, .sequence-next").fadeIn(500);
	});
    //FIXED HEADER
    $("#navigation").sticky({topSpacing:0});
    $(window).scroll(function () {
    	$("#navigation").sticky('update');
    });
    //CAROUSEL
    $(window).load(function() {
	  $('.flexslider.services-slider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 254,
	    slideshow: false
	  });
	  $('.flexslider.posts-slider, .flexslider.events-slider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 340,
	    slideshow: false
	  });
	});
	//LINKS
	$('html').smoothScroll(500);
	//SHARE BUTTON
	$(".sharing").click(function(){
		$(this).next(".hidden-buttons").fadeToggle();
	});
	//SCROLL TOP
	$.scrollUp({
	    scrollText: 'Top', // Text for element
	});
	//FANCYOX
	$('.fancybox').fancybox({
        openEffect  : 'elastic'
    });
	//GALLERY
    $(window).load(function() {
	  $('#gallery-slider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 300,
	    itemMargin: 0
	  });
	});
})(jQuery);


$( document ).ready(function() {    
    var areaprogress = new CircularProgress({
      radius: 90,
      strokeStyle: '#ffcc00',
      lineCap: 'square',
      lineWidth: 30,
      initial: {
        strokeStyle: '#d94a4d',
        lineWidth: 30
      },  
      text: {
          font: '27px Varela\ Round',
          fillStyle: 'white',
          shadowBlur: 0
      },
    });

    $("#postalareas").append(areaprogress.el);        
    
    
    var codeprogress = new CircularProgress({
      radius: 90,
      strokeStyle: '#ffcc00',
      lineCap: 'square',
      lineWidth: 30,
      initial: {
        strokeStyle: '#d94a4d',
        lineWidth: 30
      },          
      text: {
          font: '27px Varela\ Round',
          fillStyle: 'white',
          shadowBlur: 0
      },
    });

    $("#postalcodes").append(codeprogress.el);    
              
    //get stats and update radial progressbars
    url = "http://insamling.postnummeruppror.nu/api/0.0.4/statistics/server";
    $.post( url, { func: "numberOfPostalCodes" }, function( data ) {

        var percentPostalCodes = Math.round(100 * (data.numberOfPostalCodes/16500));
        var percentPostalTowns = Math.round(100 * (data.numberOfPostalTowns/1707));

        codeprogress.update(percentPostalCodes);
        areaprogress.update(percentPostalTowns);
        
        $("#areaperc").text(percentPostalTowns);
        $("#codeperc").text(percentPostalCodes);
}, "json");
    
});
