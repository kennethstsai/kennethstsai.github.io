
$(document).ready(function() {


	$('#energy-icon').click(function() {
		$('#help-text').fadeOut();
		$('#energy-text').fadeIn();
		$('#infra-text').fadeOut();
		$('#policy-text').fadeOut();
		$('#energy-icon').addClass('active');
		$('#energy-icon').removeClass('inactive');
		$('#infrastructure-icon').addClass('inactive');
		$('#infrastructure-icon').removeClass('active');
		$('#policy-icon').addClass('inactive');
		$('#policy-icon').removeClass('active');

	});

	$('#infrastructure-icon').click(function() {
		$('#help-text').fadeOut();
		$('#energy-text').fadeOut();
		$('#infra-text').fadeIn();
		$('#policy-text').fadeOut();
		$('#energy-icon').addClass('inactive');
		$('#energy-icon').removeClass('active');
		$('#infrastructure-icon').addClass('active');
		$('#infrastructure-icon').removeClass('inactive');
		$('#policy-icon').addClass('inactive');
		$('#policy-icon').removeClass('active');
	});

	$('#policy-icon').click(function() {
		$('#help-text').fadeOut();
		$('#energy-text').fadeOut();
		$('#infra-text').fadeOut();
		$('#policy-text').fadeIn();
		$('#energy-icon').addClass('inactive');
		$('#energy-icon').removeClass('active');
		$('#infrastructure-icon').addClass('inactive');
		$('#infrastructure-icon').removeClass('active');
		$('#policy-icon').addClass('active');
		$('#policy-icon').removeClass('inactive');
	});

	$('#0rules-text').show();
	$('#back-arrow').addClass('disabled');

	let rulesIndex = 0;

	$('#next-arrow').click(function() {
		if (rulesIndex <=6) {
			//let thisImg = "#" + rulesIndex + "rules-img";
			let thisText = "#" + rulesIndex + "rules-text";
			rulesIndex += 1;
			//let nextImg = "#" + rulesIndex + "rules-img";
			let nextText = "#" + rulesIndex + "rules-text";
			//$(thisImg).fadeOut();
			$(thisText).fadeOut();
			//$(nextImg).fadeIn();
			$(nextText).fadeIn();
			//$(".instruction-image").animate({left: "+=500"}, 2000);
			$("#0rules-img").animate({left: "+= 50"}, 5000, function() {
			});
		}
		if (rulesIndex == 7) {
			$('#next-arrow').addClass('disabled');
		} else if (rulesIndex > 0) {
			$('#back-arrow').removeClass('disabled');
		}
	});

	$('#back-arrow').click(function() {
		if (rulesIndex > 0) {
			//let thisImg = "#" + rulesIndex + "rules-img";
			let thisText = "#" + rulesIndex + "rules-text";
			rulesIndex -= 1;
			//let nextImg = "#" + rulesIndex + "rules-img";
			let nextText = "#" + rulesIndex + "rules-text";
			//$(thisImg).fadeOut();
			$(thisText).fadeOut();
			//$(nextImg).fadeIn();
			$(nextText).fadeIn();
		}
		if (rulesIndex == 0) {
			$('#back-arrow').addClass('disabled');
		} else if (rulesIndex < 7) {
			$('#next-arrow').removeClass('disabled');
		}
	});
});