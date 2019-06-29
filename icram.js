$(document).ready(function(){
 // Sticky navigation

  $(".js-feature1").waypoint(function(direction){
 	if(direction=="down"){
       $('nav').addClass('stick');
 	}else{
        $('nav').removeClass('stick');   
        } 
 	}, {
 		offset:'60px;'
 });


// MOBILE NAVY
$('.mobile-nav').click(function(){
  var nav1=$("#nav-icon");
  var nav=$('.js-main-nav');
  nav.slideToggle(200);
  if(nav1.hasClass("fa-bars")){
  	nav1.addClass("fa-times");
  	nav1.removeClass("fa-bars");
   }else{
   	 nav1.addClass("fa-bars");
  	nav1.removeClass("fa-times");
   }

 });
  //bell icon

  $(".bell-icon").click(function(){
   $(".notify").toggle();
   var nf=$("#js-bell-icon");
   if(nf.hasClass("fa-bell")){
   	nf.addClass("fa-times");
  	nf.removeClass("fa-bell");
   }else{
   	 nf.addClass("fa-bell");
   	 $(".notify").css("display","none");
  	nf.removeClass("fa-times");
   }

   });
   $(".notify").click(function(){
   	$(".notify").toggle();
   });

   $(".commit").click(function(){
   	$(".light-box-2").toggle();
   });
// animation
 $('.js-wp-1').waypoint(function(direction){
  	$('.js-wp-1').addClass('animated fadeIn');
  },{
  	offset:'60%'
  });

 $('.js-wp-2').waypoint(function(direction){
  	$('.js-wp-2').addClass('animated fadeInUp');
  },{
  	offset:'60%'
  });

  $('.js-wp-3').waypoint(function(direction){
  	$('.js-wp-3').addClass('animated pulse');
  },{
  	offset:'60%'
  });



  });

// slider-2
var main = function() {

	var paused = false

	$('.arrowR').click(function() {
		paused = true;
		$('.slideshow > div:first').fadeOut(1000).fadeIn(1000).appendTo('.slideshow');
	});
		
	$('.arrowL').click(function() {
		paused = true;
		$('.slideshow > div:last').fadeIn(1000).prependTo('.slideshow').next().fadeOut(1000).end();
	});


	
	setInterval(function() {
		if (paused === false) { 
			$('.slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('.slideshow');
		};
	},  5000);
   
	
};

$(document).ready(main);
