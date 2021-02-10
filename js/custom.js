jQuery.noConflict();
jQuery(document).ready(function($){
	
	"use strict";
 
	Pace.on("done", function(){
		$(".loader-wrapper").fadeOut(500);
		$(".pace").remove();
	});	

	//STICKY MENU...
	if($(".dt-sticky-menu").length) {
		$(".dt-sticky-menu").sticky({ topSpacing: 0 });
	}
	
	
	/* Goto Top */
	$().UItoTop({ easingType: 'easeOutQuart' });
	

	//Mobile Menu
	$("#dt-menu-toggle").on("click", function( event ){
		event.preventDefault();
		var $menu;
		$menu = $("nav#main-menu").find("ul.menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});
	
	$(".dt-menu-expand").on("click", function(event){
		if( $(this).hasClass("dt-mean-clicked") ){
			$(this).text("+");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideUp(400);
			} else {
				$(this).prev('.megamenu-child-container').find('ul:first').slideUp(600);
			}
		} else {
			$(this).text("-");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideDown(400);
			} else{
				$(this).prev('.megamenu-child-container').find('ul:first').slideDown(2000);
			}
		}
		
		$(this).toggleClass("dt-mean-clicked");
		return false;
	});
	
	//Mobile Menu End
	
	
	var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;
	var currentWidth = window.innerWidth || document.documentElement.clientWidth;	
	
	//create a stick nav
	if(!isMobile && currentWidth > 767) {
		var headerH = $('#header').height();
			$(document).bind('ready scroll', function() {
			var docScroll = $(document).scrollTop();
			if($('#header').length && docScroll >= headerH) {
				if (!$('#header').hasClass('header-animate')) {
					$('#header').addClass('header-animate').css({ top: '-155px' }).stop().animate({ top: 0 }, 500);
				}
			} else {
				$('#header').removeClass('header-animate').removeAttr('style');
			}
		});
	}
	
	
	
	//TOGGLE PANEL...
	$("#toggle-panel").on("click", function(){
		if($('#toggle i').hasClass('fa-minus')) {
			$('#toggle i').removeClass('fa-minus');
			$('#toggle i').addClass('fa-plus');
		} else {
			$('#toggle i').removeClass('fa-plus');
			$('#toggle i').addClass('fa-minus');
		}

		$("#panel").slideToggle("medium");
		return false;
	});	

	// Parallax Section
	$('.parallax').each(function(){
		$(this).bind('inview', function (event, visible) {
			if(visible === true) {
				$(this).parallax("50%", 0.3);
			} else {
				$(this).css('background-position','');
			}
		});
	});
	
	/* PrettyPhoto For Portfolio */
	if($(".portfolio").length) {
		$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({hook:'data-gal',animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false,social_tools: false,deeplinking:false});		
	}	
	

	//Twitter Tweets...
	if($('.tweets_container').length > 0) {	
	  $(".tweets_container").tweet({
		  modpath: 'js/twitter/',
		  username: "envato",
		  count: 3,
		  loading_text: "loading tweets...",
		  template: "{text} {time}"
	  });
	}
	
	$(window).load(function() {
	
		var currentWidth = window.innerWidth || document.documentElement.clientWidth;	
		if(currentWidth > 768 ) {
			jQuery.noConflict();
			(function($){
				if($("#dt-scroll-content").length) {
					$("#dt-scroll-content").mCustomScrollbar({
						axis:"x",
						scrollInertia:400,
						advanced:{
							autoExpandHorizontalScroll:true
						},
						theme:"dark",
						mouseWheel:{
							enable:true,
							scrollAmount:400
						}
					});
				}
			})(jQuery);
		}	
		
		//*Twitter Carousel*/
		if( $('.tweet_list').length ) {
			$('.tweet_list').each(function(){
				$(this).carouFredSel({
					responsive:true,
					auto:true,
					direction: 'up',
					height: 'auto',
					width:'auto',
					align: "center",
					prev:'.tweet-prev',
					next:'.tweet-next',
					pagination:$(this).parents(".tweet-content").find(".pager"),
					scroll : {
						items: 1
					},
					items:{visible: {min: 1, max: 1}, height: 'auto'}
				});
			});
			setTimeout(function() {
				$(window).resize();
			}, 500);
		}
		
		//Portfolio isotope
		if(!$('.dt-sc-portfolio-container').hasClass('portfolio-horizontal')) {
			
			var $container = $('.dt-sc-portfolio-container');
			if( $container.length) {
				
				var $width = $container.hasClass("no-space") ? 0 : 34;
				
				$(window).smartresize(function(){
					$container.css({overflow:'hidden'}).isotope({itemSelector : '.column',masonry: { gutterWidth: $width } });
				});
				
				$container.isotope({
				  filter: '*',
				  masonry: { gutterWidth: $width },
				  animationOptions: { duration: 750, easing: 'linear', queue: false  }
				});
				
			}
			
			if($container.parents('#primary').find("div.dt-sc-sorting-container").length){
				$container.parents('#primary').find("div.dt-sc-sorting-container a").on("click", function(){
					$width = $container.hasClass("no-space") ? 0 : 34;				
					$container.parents('#primary').find("div.dt-sc-sorting-container a").removeClass("active-sort");
					var selector = $(this).attr('data-filter');
					$(this).addClass("active-sort");
					$container.isotope({
						filter: selector,
						masonry: { gutterWidth: $width },
						animationOptions: { duration:750, easing: 'linear',  queue: false }
					});
				return false;	
				});
			}
		
		}
		//Portfolio isotope End	
		
	  	//Blog isotope
		  var $container_blog = $('.tpl-blog-holder');
		  if( $container_blog.length) {
			  
			  $width = $container_blog.hasClass("no-space") ? 0 : 34;
  
			  $(window).smartresize(function(){
				  $container_blog.css({overflow:'hidden'}).isotope({itemSelector : '.column',masonry: { gutterWidth: $width } });
			  });
			  
			  $container_blog.isotope({
				filter: '*',
				masonry: { gutterWidth: $width },
				animationOptions: { duration: 750, easing: 'linear', queue: false  }
			  });
			  
		  }
		  
		  if($container_blog.parents('#primary').find("div.dt-sc-blog-sorting-container").length){
			  $container_blog.parents('#primary').find("div.dt-sc-blog-sorting-container a").on("click", function(){
				  $width = $container_blog.hasClass("no-space") ? 0 : 34;				
				  $container_blog.parents('#primary').find("div.dt-sc-blog-sorting-container a").removeClass("active-sort");
				  var selector = $(this).attr('data-filter');
				  $(this).addClass("active-sort");
				  $container_blog.isotope({
					  filter: selector,
					  masonry: { gutterWidth: $width },
					  animationOptions: { duration:750, easing: 'linear',  queue: false }
				  });
			  return false;	
			  });
		  }
		  //Portfolio isotope End
		  		
		//Accordion & Toggle
		$('.dt-sc-toggle').toggle(function(){ $(this).addClass('active'); },function(){ $(this).removeClass('active'); });
		$('.dt-sc-toggle').on("click", function(){ $(this).next('.dt-sc-toggle-content').slideToggle(); });
		
		$('.dt-sc-toggle-frame-set').each(function(){
			var $this = $(this),
				$toggle = $this.find('.dt-sc-toggle-accordion');
				
				$toggle.on("click", function(){
					if( $(this).next().is(':hidden') ) {
						$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
						$(this).toggleClass('active').next().slideDown();
					}
					return false;
				});
				
				//Activate First Item always
				$this.find('.dt-sc-toggle-accordion:first').addClass("active");
				$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
		});//Accordion & Toggle
		
		
		// Tabs Shortcodes
		if ($("ul.dt-sc-tabs").length > 0) {
			$("ul.dt-sc-tabs").tabs("> .dt-sc-tabs-content");
		}
		if ($("ul.dt-sc-tabs-frame").length > 0) {
			$("ul.dt-sc-tabs-frame").tabs("> .dt-sc-tabs-frame-content");
		}
		if ($(".dt-sc-tabs-vertical-frame").length > 0) {
			$(".dt-sc-tabs-vertical-frame").tabs("> .dt-sc-tabs-vertical-frame-content");
			$(".dt-sc-tabs-vertical-frame").each(function() {
				$(this).find("li:first").addClass("first").addClass("current");
				$(this).find("li:last").addClass("last");
			});
			$(".dt-sc-tabs-vertical-frame li").on("click", function() {
				$(this).parent().children().removeClass("current");
				$(this).addClass("current");
			});
		} /*Tabs Shortcodes Ends*/
		
	  
	  //Testimonial Carousel
	  if( jQuery('.dt-sc-testimonial-carousel').length ) {
		  jQuery('.dt-sc-testimonial-carousel').each(function(){
			  var pagger = jQuery(this).parents(".dt-sc-testimonial-carousel-wrapper").find("div.carousel-arrows"),
			      next = pagger.find("a.testimonial-next"),
				  prev = pagger.find("a.testimonial-prev");
			  		
			  jQuery(this).carouFredSel({
				  responsive:true,
				  auto:true,
				  width:'100%',
				  height: 'variable',
				  pagination: "#pager",
				  scroll:1,
				  items:{ 
				  	width:600,
				  	height: 'variable',
				  	visible: {min: 1,max: 1} 
				  },
				  prev:prev,
				  next:next
			  });
		  });
	  }
		
	});
	
		
	if($('form[name="frmnewsletter"]').length) {
			
		//NEWSLETTER AJAX SUBMIT...
		$('form[name="frmnewsletter"]').submit(function () {
			
			var This = $(this);
			if($(This).valid()) {
				var action = $(This).attr('action');
	
				var data_value = unescape($(This).serialize());
				$.ajax({
					 type: "POST",
					 url:action,
					 data: data_value,
					 error: function (xhr, status, error) {
						 confirm('Something went wrong!');
					   },
					  success: function (response) {
						$('#ajax_subscribe_msg').html(response);
						$('#ajax_subscribe_msg').slideDown('slow');
						if (response.match('success') !== null) $(This).slideUp('slow');
					 }
				});
			}
			return false;
			
		});
		// $('form[name="frmnewsletter"]').validate({
		// 	rules: { 
		// 		mc_email: { required: true, email: true }
		// 	},
		// 	errorPlacement: function(error, element) { }
		// });
		
	}
	
	if($('form[name="enqform"]').length) {
		
		//CONTACT FORM AJAX SUBMIT...
		$('form[name="enqform"]').submit(function () {
			var This = $(this);
			
			if($(This).valid()) {
				var action = $(This).attr('action');
	
				var data_value = unescape($(This).serialize());
				$.ajax({
					 type: "POST",
					 url:action,
					 data: data_value,
					 error: function (xhr, status, error) {
						 confirm('The page save failed.');
					   },
					  success: function (response) {
						$('#ajax_contactform_msg').html(response);
						$('#ajax_contactform_msg').slideDown('slow');
						if (response.match('success') !== null) $(This).slideUp('slow');
					 }
				});
			}
			return false;
		});
		// $('form[name="enqform"]').validate({
		// 	onfocusout: function(element)
		// 	{	
		// 		$(element).valid();
		// 	},
		// 	rules: { 
		// 		txtname: { required: true },
		// 		txtemail: { required: true, email: true },
		// 		txtmessage: { required: true }
		// 	}
		// });
	
	}
		
	//Tooltip
	 if(jQuery(".dt-sc-tooltip-bottom").length){
		jQuery(".dt-sc-tooltip-bottom").each(function(){ jQuery(this).tipTip({maxWidth: "auto"}); });
	 }
	  
	 if(jQuery(".dt-sc-tooltip-top").length){
		jQuery(".dt-sc-tooltip-top").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
	 }
	  
	 if(jQuery(".dt-sc-tooltip-left").length){
		jQuery(".dt-sc-tooltip-left").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
	 }
	  
	 if(jQuery(".dt-sc-tooltip-right").length){
		jQuery(".dt-sc-tooltip-right").each(function(){ jQuery(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
	 }
	 //Tooltip End


  	//Donutchart
  	jQuery(".dt-sc-donutchart").each(function(){
		var $this = jQuery(this);
	 	var $bgColor =  ( $this.data("bgcolor") !== undefined ) ? $this.data("bgcolor") : "#5D18D6";
	 	var $fgColor =  ( $this.data("fgcolor") !== undefined ) ? $this.data("fgcolor") : "#000000";
	 	var $size = ( $this.data("size") !== undefined ) ? $this.data("size") : "100";
	 
	 	$this.donutchart({'size': $size, 'fgColor': $fgColor, 'bgColor': $bgColor , 'donutwidth' : 5 });
	 	$this.donutchart('animate');
	});
	//Donutchart Shortcode Ends 
	
	// Progress Bar 
	 animateSkillBars();
	 animateSection();
	 $(window).scroll(function(){ 
		animateSkillBars();
		animateSection();
	 });

	 function animateSection(){
		 var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
		 jQuery('.animate'+applyViewPort).each(function(){
			var $this = jQuery(this),
				$animation = ( $this.data("animation") !== undefined ) ? $this.data("animation") : "slideUp";
			var	$delay = ( $this.data("delay") !== undefined ) ? $this.data("delay") : 300;

			if( !$this.hasClass($animation) ){
				setTimeout(function() { $this.addClass($animation);	},$delay);
			}
		 });
	 }
	 
	 function animateSkillBars(){
		 var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
		 jQuery('.dt-sc-progress'+applyViewPort).each(function(){
			 var progressBar = jQuery(this),
				 progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
				 
				 if (!progressBar.hasClass('animated')) {
						progressBar.addClass('animated');
						progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
				 }
		 });
	}
	// Progress Bar End 
	
	
	//Animate Number...
	$('.dt-sc-num-count').each(function(){
	  $(this).one('inview', function (event, visible) {
		  if(visible === true) {
			  var val = $(this).attr('data-value');
			  $(this).animateNumber({ number: val }, 2000);
		  }
	  });
	});	
	
	//Contact Map...
	var $map = $('#contact_map');
	if( $map.length ) {
		$map.gMapResp({
			address: 'Iamdesigning, 1/52,3/53, Lal Bahadhur Colony,Shringar Nagar Road, Near Gopal Naidu School, Peelamedu, Coimbatore, TN 641004',
			zoom: 16,
			markers: [
				{ 'address' : 'Iamdesigning, 1/52,3/53, Lal Bahadhur Colony,Shringar Nagar Road, Near Gopal Naidu School, Peelamedu, Coimbatore, TN 641004' }
			],
			scrollwheel: false,
			styles: [ { "stylers": [ { "featureType": "all" }, { "saturation": -100 }, { "gamma": 0.50 }, {"lightness": 30 } ] } ]
		});
	}
	
	var j = 1;
	$('.loadmore').on("click", function(e){
	
		if(j == 3) {
			$('.loadmore').text('ThatsAll!').css({"cursor":"default"});
			$('.loadmore').attr('data-hover', 'ThatsAll!');
		} else {

			$.ajax({
				type: "POST",
				url: "contents/portfolio-content-two-"+j+".html",
				dataType: "html",
				cache: false,
				msg : '',
				error: function (xhr, status, error) {
					confirm('Something went wrong!');
				},
				beforeSend: function(){
					$('.loadmore').html('Loading...');
					$('.loadmore').attr('data-hover', 'Loading...');
				},
				success: function(msg){
					$('.dt-sc-portfolio-container').append(msg);
					$('.dt-sc-portfolio-container').isotope( 'reloadItems' ).isotope();
				},
				complete: function(){
					if(j == 2) {
						$('.loadmore').text('ThatsAll!').css({"cursor":"default"});
						$('.loadmore').attr('data-hover', 'ThatsAll!');
					} else {
						$('.loadmore').text('More').css({"cursor":"pointer"});
						$('.loadmore').attr('data-hover', 'More');
					}
					j++;	
					
					/* PrettyPhoto For Portfolio */
					if($(".portfolio").length) {
						$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false,social_tools: false,deeplinking:false});		
					}
									
				} 
			});
			
		}
		
		//Isotope relayout...
		setTimeout(function() {
			   $('.dt-sc-portfolio-container').isotope('reLayout');
			   $(window).resize();
		}, 600);
		
		setTimeout(function() {
			   $(window).resize();
		}, 1200);
			   
		e.preventDefault();
		
	});
	
	$('.blog .post-next-link a').on("click", function(e){
		
		var  $this = $(this),
			$fetch_page = parseInt($this.attr('data-page'), 10)+1;
		
		$.ajax({
			type: "POST",
			url: "contents/blog-content-"+$fetch_page+".html",
			dataType: "html",
			cache: false,
			msg : '',
			error: function (xhr, status, error) {
				confirm('Something went wrong!');
			},
			beforeSend: function(){
				$.scrollTo($('.dt-sc-blog-sorting-container'), 800, { offset: { top: -150 }});
			},
			success: function(msg){
				$('.tpl-blog-holder').html(msg);
				$('.tpl-blog-holder').isotope( 'reloadItems' ).isotope();
			},
			complete: function(){
				$('.post-next-link').removeClass('hidden');
				$('.post-prev-link').removeClass('hidden');
				$('.post-next-link a').attr('data-page', $fetch_page);
				$('.post-prev-link a').attr('data-page', $fetch_page);
				if($fetch_page == 3) {
					$('.post-next-link').addClass('hidden');
					$('.post-prev-link').removeClass('hidden');
				}
			} 
		});
			
		e.preventDefault();
		
	});
	
	$('.blog .post-prev-link a').on("click", function(e){
	
		var  $this = $(this),
			$fetch_page = parseInt($this.attr('data-page'), 10)-1;
	
		$.ajax({
			type: "POST",
			url: "contents/blog-content-"+$fetch_page+".html",
			dataType: "html",
			cache: false,
			msg : '',
			error: function (xhr, status, error) {
				confirm('Something went wrong!');
			},
			beforeSend: function(){
				$.scrollTo($('.dt-sc-blog-sorting-container'), 800, { offset: { top: -150 }});
			},
			success: function(msg){
				$('.tpl-blog-holder').html(msg);
				$('.tpl-blog-holder').isotope( 'reloadItems' ).isotope();
			},
			complete: function(){
				$('.post-prev-link').removeClass('hidden');
				$('.post-next-link').removeClass('hidden');
				$('.post-prev-link a').attr('data-page', $fetch_page);
				$('.post-next-link a').attr('data-page', $fetch_page);
				if($fetch_page == 1) {
					$('.post-prev-link').addClass('hidden');
					$('.post-next-link').removeClass('hidden');
				}
			} 
		});
			
		e.preventDefault();
		
	});
	
});