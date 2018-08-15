// READY
$(document).ready(function(){
	new WOW().init();
	
	bg_head_full();
	works_square();
	smooth_scroll();
	submit();
	
	$(document).on({
	    mouseenter: function () {
			social_title();
	    	$(this).find('span').stop().fadeIn(200);
	    },

	    mouseleave: function () {
	    	$(this).find('span').stop().fadeOut(200);
	    }
	}, 'header .titles-box .social-icons a');

	// $(document).on({
	//     mouseenter: function () {
	// 		$(this).css('transform', 'scale(2)');
	//     },

	//     mouseleave: function () {
	// 		$(this).css('transform', 'scale(1)');
	//     }
	// }, '.works .first section');

	$(document).on('click', '.skill-block ul.skills li', function(){
		var desc_text = $(this).find('.desc').html(),
			p_name = $(this).find('p.name').text();

		$('.skill-block ul.skills li.active, .skill-block ul.skills li.active p.name').stop().animate({
			left: '0',
			right: 'initial'
		}, 200);

		$(this).stop().animate({
			right: '-30px',
			left: 'initial'
		}, 200);

		$(this).find('p.name').stop().animate({
			right: '0',
			left: 'initial'
		}, 200);


		$('.skill-desc .block').stop().fadeOut(200, function(){
			$('.skill-desc .block').html('<span class="name">' + p_name + '</span>' + desc_text);
			$('.skill-desc .block').fadeIn(200);
		});

		$('.skill-block ul.skills li.active').removeClass('active');
		$(this).addClass('active');
	});
});

// RESIZE
$(window).resize(function(){
	bg_head_full();
	works_square();
});

//SCROLL
$(window).scroll(function(){
  	var top = $(this).scrollTop(),
    	offset_top,
    	span;

    $('.skill-block ul.skills li').each(function(){
    	offset_top = $(this).offset().top - $(window).height() + $(this).height();

    	span = $(this).find('span');

    	if (top >= offset_top && !span.width()) {
			var width_span = span.attr('data-width');

			span.stop().animate({
				width: width_span
			}, 400);
	    }
    });
});

// FUNCTION
function bg_head_full() {
	var height_document = $(window).height();
	$('header').css('height', height_document);
}

function works_square() {
	var width_work, 
		width_work_max = 0;

	$('.works .first section').each(function(){
		width_work = $(this).css('width');
		
		if (parseInt(width_work) >= parseInt(width_work_max)) {
			width_work_max = width_work;
		}
	});

	$('.works .first section').css('height', width_work_max);
}

function social_title() {
	var width_a, 
		width_span;

	$('header .titles-box .social-icons a').each(function(){
		width_a = $(this).innerWidth();
		width_span = $(this).find('span').innerWidth();

       $(this).find('span').css('margin-left', (width_a + width_span) / 2 * -1);
	});
}

function smooth_scroll() {
	$(document).on('click', 'a.smoothscroll', function(event){
		var id  = $(this).attr('href'),
			top = $(id).offset().top;

		event.preventDefault();

		$('body, html').animate({
			scrollTop: top
		}, 900);
	});
}

function submit() {
	$('form').submit(function(){
		var form = $(this); 
		var error = false; 

		$('#image-loader').fadeIn();

		form.find('input[type=text], input[type=phone], textarea').each( function(){
			if ($(this).val() == '') {
				$(this).addClass('input_not_validate');
				error = true;
			}
		});

		if (!error) {
			var msg = form.serialize();

			$.ajax({
				type: "POST",
				url: "contact.php",
				data: msg,
				success: function(data) {
					$('#image-loader').fadeOut();
				},
				error:  function(){
					$('#image-loader').fadeOut();
				}
			});
		}

		return false; 
	});
}