$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    slideshow: true
  });
});

$(document).scroll(function(event){
	if ($(this).scrollTop() > 1) {
		$(".sticky").css({
      'top':'0',
			'z-index': '1',
      'display': 'block'
		});
    $(".logo").css('display', 'none');
    $(".header-nav").css('display', 'none');
		$(".header").addClass("sticky");
	}
	else {
    $(".header").removeClass("sticky");
    $(".sticky").css('display', 'none');
    $(".header-nav").css('display', 'block');
    $(".logo").css('display', 'inline-block');
	}
});

$(function() {
    $("#date").datepicker();
});

$('.dropdown-menu a').on('click', function(){
    var tempScrollTop = $(window).scrollTop();
    $('.dropdown-toggle').val($(this).html());
    $('body').animate({ scrollTop: tempScrollTop }, 1);
    $(window).scrollTop = tempScrollTop;
});

$('#twitter img').hover(function() {
  $(this).attr('src', 'img/twitter_dark.png');
}, function() {
  $(this).attr('src', 'img/twitter.png');
});

$('#vimeo img').hover(function() {
  $(this).attr('src', 'img/vimeo_dark.png');
}, function() {
  $(this).attr('src', 'img/vimeo.png');
});

$('#facebook img').hover(function() {
  $(this).attr('src', 'img/facebook_dark.png');
}, function() {
  $(this).attr('src', 'img/facebook.png');
});

$('#pinterest img').hover(function() {
  $(this).attr('src', 'img/pinterest_dark.png');
}, function() {
  $(this).attr('src', 'img/pinterest.png');
});
