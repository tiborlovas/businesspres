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
	
	/* Market Size Bars */
	if($(window).width() <= "768") $('.market-size .bar1 span, .market-size .bar5 span').text($('.market-size .bar1 span').text().slice(0, 3)+' B');
	$('.market-size .bar span').hide();
	$('.market-size').waypoint(function(direction) {
		$('.market-size .bar span').show();
		$('.market-size .bar1').animate({
			width: "28%"
		});
		$('.market-size .bar2').animate({
			width: "35%"
		});
		$('.market-size .bar3').animate({
			width: "50%"
		});
		$('.market-size .bar4').animate({
			width: "70%"
		});
		$('.market-size .bar5').animate({
			width: "22%"
		});
		$('.market-size .bar6').animate({
			width: "45%"
		});
		$('.market-size .bar7').animate({
			width: "60%"
		});
		$('.market-size .bar8').animate({
			width: "100%"
		});
					
    });
    
    /* Competition Bars */
    $('.competition .barholder').waypoint(function(direction) {
		$('.competition .bar span').show();
		$('.competition .bar1').animate({
			width: "90%"
		});
		$('.competition .bar2').animate({
			width: "85%"
		});
		$('.competition .bar3').animate({
			width: "35%"
		});
		$('.competition .bar4').animate({
			width: "25%"
		});
					
        }, {offset: 200
       
        });
    
    /* Mobile Menu job */
    $('.menu-trigger').removeAttr('href').click(function(){
		$('.menu').toggle();
		$('.menu-trigger i').toggleClass('icon-menu-mobile').toggleClass('icon-close-mobile');
		$('.menu li a').click(function(){
			$('.menu-trigger').click();
	    });
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