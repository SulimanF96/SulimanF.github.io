

$('body').scrollspy({
	target: '#navbar-items',
	offset: 200
});



(function ($) {


	$.fn.visible = function (partial) {

		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;

		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	};

})(jQuery);

$(window).scroll(function (event) {

	$(".card").each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("scale-up-center");
		}
	});

	$(".icons-animation").each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("bounce-in-top");
		}
	});

	$(".page-header").each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("tracking-in-contract");
		}
	});

	$(".nav-item").each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			$('.home-nav').removeClass('active');
		} else {

		}
	});

	$(".contact-section").each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			$('.form-input').addClass('text-focus-in');
			$('.control-label').addClass('slide-in-left');
		} else {

		}
	});

	$("footer").each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			$('.footer-text').addClass('text-focus-in');
		} else {

		}
	});


});

$('.grey').click(function () {
	$('.navbar').css('background-color', '#373737');
	$('.overlay').css('background-color', 'rgba(88, 91, 93, 0.8)');
	$('.card-inner').css('background-color', '#616161');
	$('.contact-section').css('background-color', '#8e8e8e');
	$('footer').css('background-color', '#373737');
	$('.btn-default').css('background-color', '#373737')
	$('.btn-deafult').hover(function () {
		$(this).css('background-color', 'rgb(182, 167, 167)');
	})
	$('.btn-language').css('background-color', '#242629');
})

$('.blue').click(function () {
	$('.navbar').css('background-color', '#0a1a2a');
	$('.overlay').css('background-color', 'rgba(20, 51, 83, 0.8)');
	$('.card-inner').css('background-color', '#143353');
	$('.contact-section').css('background-color', '#21558a');
	$('footer').css('background-color', '#0a1a2a');
	$('.btn-default').css('background-color', '#1c2237');
	$('.btn-language').css('background-color', '#25334a');

})

$('.red').click(function () {
	$('.navbar').css('background-color', '#9a0007');
	$('.overlay').css('background-color', 'rgba(102, 81, 81, 0.8)');
	$('.card-inner').css('background-color', '#d32f2f');
	$('.contact-section').css('background-color', '#ff6659');
	$('footer').css('background-color', '#9a0007');
	$('.btn-default').css('background-color', '#c91717');
	$('.btn-language').css('background-color', '#670a0a');
})

$('.navbar-toggler').click(function () {
	$('.collapse').css('margin', '2px -2px')
})

// $('.arabic-lan').click(function(){
//   $('html').attr('lang','ar');
//   $(this).html('مبرمج   من  سليمان  الفوزان');
//   $('.about-nav').html('عني');
//   $('.home-nav-label').html('مرحبا');
// })

// $('.navbar-brand').hover(function(){
// 	$(this).addClass('animated bounce fast')
// })

// $('.navbar-brand').on('mouseenter', function () {
// 	$(this).addClass('animated bounce fast');
// })

// $('.navbar-brand').on('mouseleave', function () {
// 	$(this).removeClass('animated bounce fast');
// })



$('.arabic-lan').click(function () {
	$('html').attr('lang', 'ar')
})

$('.english-lan').click(function () {
	$('html').attr('lang', 'en')
})

$(function() {
	
		  window.responsive = function responsive() {
			 //get the width of the window
			 var width = $(window).width();
	
			 if ( width < 1043) {
					//width is larger than 500px and smaller than 900px
					$('.home-container').removeClass('typewriter');
			 }
		   }
	
	  });
	  //Call the function on load and resize
	  $(window).on('ready load resize orientationchange',function(){responsive();});

 $('.nav-link').click(function(){
		$('.navbar-toggler').attr('aria-expanded','false');
		$('.navbar-collapse').removeClass('show');
	})
	








