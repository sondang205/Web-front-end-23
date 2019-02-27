$(document).ready(function() {
	var plus = '<i class="fa fa-plus" aria-hidden="true"></i>';
	var mimus = '<i class="fa fa-minus" aria-hidden="true"></i>';

	$('#text1').show();

	$('#btn-1').click(function() {
		if($('#btn-1').html() == plus) {
			$('#btn-1').html(mimus);
		}else {
			$('#btn-1').html(plus);
		}

		$('#btn-2').html(plus);
		$('#btn-3').html(plus);
		$('#btn-4').html(plus);

		$('#text1').slideToggle();
		$('#text2').hide();
		$('#text3').hide();
		$('#text4').hide();
	});

	$('#text2').hide();
	$('#btn-2').click(function() {
		if($('#btn-2').html() == plus) {
			$('#btn-2').html(mimus);
		}else {
			$('#btn-2').html(plus);
		}

		$('#btn-1').html(plus);
		$('#btn-4').html(plus);
		$('#btn-3').html(plus);

		$('#text2').slideToggle();
		$('#text1').hide();
		$('#text3').hide();
		$('#text4').hide();
	});

	$('#text3').hide();
	$('#btn-3').click(function() {
		if($('#btn-3').html() == plus) {
			$('#btn-3').html(mimus);
		}else {
			$('#btn-3').html(plus);
		}

		$('#btn-1').html(plus);
		$('#btn-2').html(plus);
		$('#btn-4').html(plus);

		$('#text3').slideToggle();
		$('#text4').hide();
		$('#text2').hide();
		$('#text1').hide();
	});

	$('#text4').hide();
	$('#btn-4').click(function() {
		if($('#btn-4').html() == plus) {
			$('#btn-4').html(mimus);
		}else {
			$('#btn-4').html(plus);
		}

		$('#btn-1').html(plus);
		$('#btn-2').html(plus);
		$('#btn-3').html(plus);

		$('#text4').slideToggle();
		$('#text3').hide();
		$('#text2').hide();
		$('#text1').hide();
	});
});
$(document).ready(function() {
	$('#counter').counterUp({
		delay: 10,
		time: 1000
	});
});

$(function() {
	var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
	$('.color-container-1').filterizr({ controlsSelector: '.color-controls-1' });
	$('.color-container-2').filterizr({ controlsSelector: '.color-controls-2', layout: 'packed' });
	$('.color-container-3').filterizr({ controlsSelector: '.color-controls-3', layout: 'sameHeight' });
	$('.color-container-4').filterizr({ controlsSelector: '.color-controls-4', layout: 'packed' });
	$('.color-container-5').filterizr({ controlsSelector: '.color-controls-5', layout: 'horizontal' });
	$('.color-container-6').filterizr({ controlsSelector: '.color-controls-6', layout: 'vertical' });
	window.filterizr = f;
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {      
	$('body,html').animate({
        scrollTop : 0                      
    }, 500);
});

$(document).ready(function() {
	$('.custom').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000
	});
});


