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