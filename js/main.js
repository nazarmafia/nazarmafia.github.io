$(document).ready(function() {
	// input phone numbers
	$('input[type=tel]').inputmask({
		mask: "+7(999)999-99-99",
		showMaskOnHover: false
	});

	// popups fancybox
	$("[data-fancybox]").fancybox({
		// Options will go here
	});

	// slider cases
	$('.slider-cases').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 15000,
		dots: false
	});

	// cases thumbs
	$(window).load(function() {
		$('.sp-wrap').smoothproducts();
	});

	// slider reviews
	$('.slider-reviews').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 15000,
		adaptiveHeight: true,
		dots: true
	});
	// slider reviews-video
	$('.slider-reviews-video').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 15000,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// fixed header
	$('.header-navbar').addClass('original').clone().insertAfter('.header-navbar').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
	scrollIntervalID = setInterval(stickIt, 10);
	function stickIt() {
		var orgElementPos = $('.original').offset();
		// orgElementTop = orgElementPos.top + $('.original').outerHeight();
		orgElementTop = orgElementPos.top;
		if ($(window).scrollTop() >= (orgElementTop)) { 
			orgElement = $('.original');
			coordsOrgElement = orgElement.offset();
			leftOrgElement = coordsOrgElement.left;  
			widthOrgElement = orgElement.css('width');
			$('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).fadeIn(3);
			// $('.original').css('visibility','hidden');
		} else {
			$('.cloned').fadeOut(3);
			$('.original').css('visibility','visible');
		}
	};

	// nav scroll
	$('.nav').onePageNav({
		scrollSpeed: 700,
		currentClass: 'active'
	});
	$(window).scroll(function() {
		$('.nav li').removeClass('active');
	});

	// nav toggle on mobile
	$('.nav-toggle').on('click', function(){
		$('.nav').slideToggle();
		return false;
	});

	// animation on scroll
	window.sr = ScrollReveal(
		{
		  origin: 'bottom',
          duration   : 800,
          scale      : 0.1,
          reset: true
        }
	);
	sr.reveal('.benefit-item', 80);
	sr.reveal('.check-item', 80);
	sr.reveal('.el-item', 80);
	sr.reveal('.step-item', 80);
	sr.reveal('.why-item', 80);
});