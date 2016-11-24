//JavaScript Document
$(document).ready(function () {
 
 // Get the dimensions of the viewport
			    window.onresize = function jsUpdateSize(){
				var jsWidth = window.innerWidth ||
			                document.documentElement.clientWidth ||
			                document.body.clientWidth;
			               // alert (jsWidth);
			   if (jsWidth > 650) {
					
						if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
						{
						window.location = "http://www.mbr.com.at.iprox.net/en/index.html";
						}
								
					      }
				};

 setTimeout(function () { 
  
 }, 500);
 
 $('a[rel="external"]').attr('target', '_blank');
 
 //$('.content').css({height:$('body').height()-245});
 
 var $reload_css = function(){
   //location.reload();
   var queryString = '?reload=' + new Date().getTime();
   $('link[rel="stylesheet"]').each(function () {
       this.href = this.href.replace(/\?.*|$/, queryString);
   }); 
 }
 
 // scrollbar -----------------------------------------------------------------------------
 
 setTimeout(function () { 
  if($('.scrollable').length) $('.scrollable').jScrollPane({showArrows: true});  
 }, 200);
 
 // ---------------------------------------------------------------------------------------
 
 // explore menu --------------------------------------------------------------------------
 
 $(".explore a").click(function() {
  if($('.thumb').is(':visible')){
   $(".explore a img").attr('src',($(".explore a img").attr('src').replace('-active.png','.png')));
   $(".thumb").slideUp("fast",function(){
    //$('.container').css({height:$('body').height()}); 
    //$('footer').css({position:'fixed',top:'auto',bottom:0}); 
   }); 
   //$(".bg").animate({top:0},300); 
   //$(".content").fadeIn('slow'); 
   $('.content, .bg, header').animate({opacity:1},200);
  }
  else{
   $(".explore a img").attr('src',($(".explore a img").attr('src').replace('.png','-active.png')));
   //$(".content").fadeOut('fast'); 
   //$(".bg").animate({top:-1138},500); 
   $('.thumb').slideDown("slow",function(){
    //alert($('body').height());
    if($('body').height() < $('footer').height()){
     $('.container').css({height:$('footer').height()+73})
     //$('footer').css({position:'absolute'}).animate({top:50},1000);  
    }
   });
   $('.content, .bg, header').animate({opacity:.05},500);
  }
  return false;
 });
 
 // ---------------------------------------------------------------------------------------
 
 // back to top ---------------------------------------------------------------------------
 
 $(document).scroll(function() {
  if ($(document).scrollTop() >= 70) {
    // user scrolled 70 pixels or more;
    // do stuff
    $("a.back-to-top").fadeIn(200);
  } else if ($(document).scrollTop() == 0) {
    $("a.back-to-top").fadeOut(100);
  }
 });
 
 $("a.back-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
 });
 
 // ---------------------------------------------------------------------------------------
 
 // main navigation -----------------------------------------------------------------------
 
 $('.menu > a').click(function(){
  if($('.menu div').is(':visible')) {
   $('.content').fadeIn(300);
   $("footer").fadeIn(400);
   $(".menu div").animate({ scrollTop: 0 }, "fast");
   $('.menu div').slideUp('fast');
   $(".explore").fadeIn('slow');
   //$('.content, .bg').animate({opacity:1},200);
  }
  if($('.menu div').is(':hidden')) {
   if($('.thumb').is(':visible')){
    $(".thumb").slideUp("fast"); 
   }
   //alert($(document).height());
   $('.menu div').css({width:$('body').width(),height:$(window).height()});  
   $("footer").fadeOut(300);
   $('.content').fadeOut(300);
   $('.menu div').slideDown('fast');
   $(".explore").fadeOut('fast');
   //$('.content, .bg').animate({opacity:.5},500);
  }
  return false;
 });
 
 //$('.content,.bg,h1').click(function(){
 // if($('.menu ul').is(':visible')) {
 //  //$("footer").css({'z-index':150});
 //  $("footer").fadeIn(400);
 //  $('.menu div').slideUp('fast',function(){
 //   $('.container').css({height:$('body').height()});  
 //  });
 //  $(".explore").fadeIn('slow');
 //  $('.content, .bg').animate({opacity:1},200);
 // }
 //})
 
 // ---------------------------------------------------------------------------------------
 
 // Load more data on click ---------------------------------------------------------------
  $('.showmore').click(function(){
   $('.opaque').fadeIn(300);
   setTimeout(function () { 
    $('.showmore').slideUp(300);
    $('.hide').slideDown(500,function(){
     $('html, body').animate({
      scrollTop: $('.hide:eq(0)').offset().top
     }, 400);  
    }).css({display:'inline-block'});
    $('.opaque').fadeOut(200);   
   }, 2000);
   return false;
  });
  // ---------------------------------------------------------------------------------------
 
 // swipe function ------------------------------------------------------------------------
 
 var $swipe = function(){
  //var bullets = $('.swipe-bullets li').has('a');
  if($('.swipe-wrap > div').length <= 1){
   //$('.prev,.next').hide();
   $('.swipe').css({visibility:'visible'});
   return;
  }
  var elem = document.getElementById('mySwipe');
  window.mySwipe = Swipe(elem, {
   continuous: true,
   callback: function(pos) {
   }, 
   transitionEnd: function() {
   }
  });
 }
 if($('#mySwipe').length) $swipe();
 
 // ---------------------------------------------------------------------------------------
 
 $('iframe').each(function(){
   var url = $(this).attr("src");
   var char = "?";
   if(url.indexOf("?") != -1){
           var char = "&";
    }
  
   $(this).attr("src",url+char+"wmode=transparent");
 });
 
 window.onorientationchange = function()
 {
    $reload_css();
    
    $viewport();
    
    //$(document).animate({ scrollTop: 0 }, "fast");
    
    $('.menu div').css({width:$('body').width(),height:$(window).height()});  
 }
 
});

// input placeholder ----------------------------------------------------------------------

jQuery(function() {
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test) jQuery.support.placeholder = true;
	
 if(!$.support.placeholder) { 
		var active = document.activeElement;
		$(':text').focus(function () {
			if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function () {
			if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
			}
		});
		$(':text').blur();
		$(active).focus();
		$('form').submit(function () {
			$(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
		});
	}
});

var nua = navigator.userAgent;
var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 &&     nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1)); 
 
 var $viewport = function(){
  (function(doc) {
        var viewport = document.getElementById('viewport');
        if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
            doc.getElementById("viewport").setAttribute("content","width=device-width, initial-scale=0.5, minimal-ui, user-scalable=no");
        } else if(is_android){
            doc.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, minimal-ui, user-scalable=no, target-densitydpi=device-dpi");
        }
        else{
            doc.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, minimal-ui, user-scalable=no");
        }
  }(document));
 }
 $viewport();