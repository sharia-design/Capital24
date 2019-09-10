$(document).ready(function() {
	

$(window).on('load', function() {
	$('.nav').addClass('tracking-in-contract-bck-top');
	$('.h1').addClass('tracking-in-expand-fwd');
	setTimeout(function(){$('.intro-or').addClass('tracking-in-expand');}, 150);
	setTimeout(function(){$('.h2').addClass('tracking-in-expand-fwd');}, 400);
	setTimeout(function(){$('.h3').addClass('tracking-in-expand-fwd');}, 800);
	setTimeout(function(){$('.in-btn').addClass('tracking-in-expand-fwd');}, 1400);
	
});


// ===== Scroll To Reg ==== //

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
        }, 1000);
    }
});

$('.focus-reg').on('click', function(event) {
    var target = $('#start');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
        }, 1000);
        $('#name').focus();
    }
});

// ===== /. Scroll To Reg ==== //


// ===== Register ==== //

$('.register-submit').click(function() {
	var valid;
	valid = regValid();
	if (valid) {
		var name 	= $('#name').val();
		var email 	= $('#email').val();
		var phone 	= $('#phone').val();
		var source 	= window.location.href;

// ===== Ajax Call ==== //

    $.ajax({
        type: 'POST',
        url: 'php/func.php',
        data: {
			reg: true,
			name: name,
			email: email,
			phone: phone,
			source: source
        },
        success:function(response) {
        	console.log(response);
            if (response == 'Succ') {
            	$('.register-form').addClass('done');
            	$('#succ').addClass('show').removeClass('none');
            	$.ajax({
            		type: 'GET',
            		url: 'http://smsoffice.ge/api/v2/send/?key=175e05a9369b40138f2b926326478367&destination=591116564&sender=SABA&content=NEW!!! name: '+name+'. phone: '+phone+'. E-mail: '+email+'&urgent=true'
            	});
            }
        }
    });

// ===== /. Ajax Call ==== //


	} else {
		console.log('ERR');
	}
});

function regValid() {
	valid = true;

	if ($('#name').val() == "" || $('#name').val().length < 4) {
		$('#name').parents('.register-form--row').addClass('error');
		return;
		valid = false;
	} else {
		$('#name').parents('.register-form--row').removeClass('error');
	}

	if (!$('#email').val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || $('#email').val() == "") {
		$('#email').parents('.register-form--row').addClass('error');
		return;
		valid = false;
	} else {
		$('#email').parents('.register-form--row').removeClass('error');
	}
	if ($('#phone').val() == "" || $('#phone').val().length < 7) {
		$('#phone').parents('.register-form--row').addClass('error');
		return;
		valid = false;
	} else {
		$('#phone').parents('.register-form--row').removeClass('error');
	}

	return valid;
}

// ===== /. Register ==== //


// ===== Expand ==== //
/*
$('.stories-item').click(function(e) {
	var expandDiv = $('.expand');
	var posLeft = $(this).position().left;
	var posTop = $(this).position().top;
	console.log(posLeft);
	console.log(posTop);
	expandDiv.css({
		top: posTop+"px",
		left: posLeft+"px"
	}).addClass('show').removeClass('none');
});*/

// ===== /. Expand ==== //

});