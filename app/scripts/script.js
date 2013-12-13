$(function(){
	/* Parallax job */
	$('body').stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});
	
	/* Retina images swap */
	var retina = window.devicePixelRatio > 1;
	if (retina) {
	    $('img.retina').each(function(){
		    $(this).attr('src', $(this).attr('src').replace('.jpg', '@2x.jpg'));
	    });
	}
	
	/* Hero autoresize */ 
	$(window).resize(function() {
		$(".main").innerHeight($(window).height());
	});
	$(window).resize();

    /* Global Sticky Elements Trigger */
    $('.sticky-element').addClass('invisible');
    $('.sticky-trigger').waypoint(function(direction) {
    		//alert(direction);
            $('.sticky-element').toggleClass('invisible');
        }, {offset: $('.sticky-element').outerHeight()+1}
    );
    
    /* Smooth scrolling of links between panels */
/*
	var $panels = $('.topbar');
		
	$panels.each(function() {
	  var $panel = $(this);
	  var hash = '#' + this.id;
	  $('a[href="' + hash + '"]').click(function(event) {
		alert('ok');
	    $scrollElement.stop().animate({
	      scrollLeft: $panel.offset().left
	    }, 500, 'swing', function() {
	      window.location.hash = hash;
	    });
	
	    event.preventDefault();
	  });
	});
*/

});

/* Hero autoresize needs to be made by javascript to avoid blink caused by jquery load latency */
//document.getElementsByClassName("main")[0].style.height = window.innerHeight;