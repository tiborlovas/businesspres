$(function(){
	/* Parallax job */
	$('body').stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});
	
	/* Retina images add dimensions then swap */
	var retina = window.devicePixelRatio > 1;
	if (retina) {
	    $('img.retina').each(function(){
		    $(this).attr('width', $(this).width()).attr('height', $(this).height()).attr('src', $(this).attr('src').replace('.jpg', '@2x.jpg'));
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
    
	/* Bar Chart */
	$('.bar').width('10%');
	if($(window).width() < "480") $('.bar1 span, .bar5 span').text($('.bar1 span').text().slice(0, 3)+' B');
	$('.bar span').hide();
	$('.market-size').waypoint(function(direction) {
		$('.bar span').show();
		$('.bar1').animate({
			width: "28%"
		});
		$('.bar2').animate({
			width: "35%"
		});
		$('.bar3').animate({
			width: "50%"
		});
		$('.bar4').animate({
			width: "70%"
		});
		$('.bar5').animate({
			width: "22%"
		});
		$('.bar6').animate({
			width: "45%"
		});
		$('.bar7').animate({
			width: "60%"
		});
		$('.bar8').animate({
			width: "100%"
		});
					
        }, {offset: $('.market-size').outerHeight()}
    );
    
    /* Mobile Menu job */
    $('.menu-trigger').removeAttr('href').click(function(){
		$('.menu').toggle();
		$(this+' i').toggleClass('icon-menu-mobile').toggleClass('icon-close-mobile');
    });
    
    /* Pie Chart */
/*
    var data = {
		labels : ["Canvas Wrap"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [65,59,90,81,56,55,40]
			}
		]
	}
	var ctx = document.getElementById("pie1").getContext("2d");
	var myNewChart = new Chart(ctx).PolarArea(data);
*/

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