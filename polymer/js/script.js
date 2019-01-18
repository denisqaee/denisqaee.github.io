$(document).ready(function(){
	$('.show-popup').click(function(){		
		$('#popup-form .item-info').html('');
		$('#popup-bg').fadeIn(200);
		$('#popup-form').fadeIn(200);
		$('#popup-form').css('display', 'flex');
	});

	$('.profit .show-popup').click(function(){
		$('#popup-bg').fadeIn(200);
		$('#popup-form .item-info').html($(this).parent().find('.view').html());
		$('#popup-form .item-info').fadeIn(200);
		$('#popup-form').fadeIn(200);
		$('#popup-form').css('display', 'flex');
	});

	$('.close-popup').click(function(){
		$('.closing').fadeOut(200, function(){
			if($('#popup-form .item-info').css('display') == 'block') {
				$('#popup-form .item-info').fadeOut(200);
			}			
		});
	});

	$('.profit li button.more').click(function(){
		$(this).parent().find('div.view').slideToggle();
		$(this).parent().find('div.description').slideToggle();

		if($(this).text() == 'Подробнее') {
			$(this).text('Скрыть');
		}
		else {
			$(this).text('Подробнее');			
		}
	});

	$('input[type=name], input[type=phone], textarea').change(function(){ //убираем красную рамку вокруг поля после звполнения, если первый раз было не заполнено
		$(this).removeClass('input_not_validate');
	});

	$('form').submit(function(){ // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = false; // предварительно ошибок нет
		form.find('input[type=name], input[type=phone], textarea').each( function(){ // пробежим по каждому полю в форме
			if ($(this).val() == '') { // если находим пустое
				$(this).addClass('input_not_validate');
				error = true; // ошибка
			}
		});

		form.find('input[type=hidden]').val('Наименование: ' + form.find('.item-info .text1').text() + '\r\nЦена: ' + form.find('.item-info .text2 span').text() + '\r\nОписание: ' + form.find('.item-info .text3').text()); 

		console.log(form.find('input[type=hidden]').val());
		if (!error) { // если ошибки нет
			var msg = form.serialize(); // подготавливаем данные
			$.ajax({
				type: "POST",
				url: "contact.php",
				data: msg,
				success: function(data) {
					$('#popup-form').fadeOut(100);
					$('#popup-bg').fadeIn(100);
					$('#popup-success').fadeIn(100);
					yaCounter38364495.reachGoal('feedback');
				},
				error:  function(){
					alert("Возникла ошибка, попробуйте позже");
				}
			});
		}
		return false; // вырубаем стандартную отправку формы
	});

	//only number in input
	$(function(){
		$('input[type=phone]').bind("change keyup input click", function() {
			if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
				$(this).addClass('input_not_validate');
			}
		});
	});

	var slider2 = $('.bxslider2').bxSlider({
		pagerCustom: '.bxslider21',
		controls: false
	});

	if (window.innerWidth <= 399) {
		var slider1 = $('.bxslider1').bxSlider({
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideWidth: 180,
			slideMargin: 20,
			pager: false,
			controls: true
		});

		$('.map iframe').css('height', '300px');

		var slider21 = $('.bxslider21').bxSlider({
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideWidth: 75,
			slideMargin: 10,
			pager: false,
			controls: true
		});
	}
	else if (window.innerWidth <= 767) {
		var slider1 = $('.bxslider1').bxSlider({
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideWidth: 180,
			slideMargin: 20,
			pager: false,
			controls: true
		});

		$('.map iframe').css('height', '300px');

		var slider21 = $('.bxslider21').bxSlider({
			minSlides: 2,
			maxSlides: 2,
			moveSlides: 1,
			slideWidth: 75,
			slideMargin: 10,
			pager: false,
			controls: true
		});
	}
	else if (window.innerWidth <= 991) {
		var slider1 = $('.bxslider1').bxSlider({
			minSlides: 3,
			maxSlides: 3,
			moveSlides: 1,
			slideWidth: 180,
			slideMargin: 20,
			pager: false,
			controls: true
		});

		$('.map iframe').css('height', '300px');
	}	
	else {
		var slider1 = $('.bxslider1').bxSlider({
			minSlides: 4,
			maxSlides: 4,
			moveSlides: 1,
			slideWidth: 180,
			slideMargin: 30,
			pager: false,
			controls: true
		});

		var slider21 = $('.bxslider21').bxSlider({
			minSlides: 5,
			maxSlides: 5,
			moveSlides: 1,
			slideWidth: 75,
			slideMargin: 20,
			pager: false,
			controls: true
		});
	}

	$(window).resize(function(){
		if (window.innerWidth <= 399) {
			slider1.reloadSlider({
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 1,
				slideWidth: 75,
				slideMargin: 10,
				pager: false,
				controls: true
			});

			$('.map iframe').css('height', '300px');

			slider21.reloadSlider({
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 1,
				slideWidth: 75,
				slideMargin: 10,
				pager: false,
				controls: true
			});
		}
		else if (window.innerWidth <= 767 ) {
			slider1.reloadSlider({
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 1,
				slideWidth: 180,
				slideMargin: 20,
				pager: false,
				controls: true
			});

			$('.map iframe').css('height', '400px');

			slider21.reloadSlider({
				minSlides: 2,
				maxSlides: 2,
				moveSlides: 1,
				slideWidth: 75,
				slideMargin: 10,
				pager: false,
				controls: true
			});
		}
		else if (window.innerWidth <= 991) {			
			slider1.reloadSlider({
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1,
				slideWidth: 180,
				slideMargin: 20,
				pager: false,
				controls: true
			});

			$('.map iframe').css('height', '300px');

			slider21.reloadSlider({
				minSlides: 5,
				maxSlides: 5,
				moveSlides: 1,
				slideWidth: 75,
				slideMargin: 20,
				pager: false,
				controls: true
			});
		}
		else if (window.innerWidth >= 992 ) {
			slider1.reloadSlider({
				minSlides: 4,
				maxSlides: 4,
				moveSlides: 1,
				slideWidth: 180,
				slideMargin: 30,
				pager: false,
				controls: true
			});

			$('.map iframe').css('height', '400px');

			slider21.reloadSlider({
				minSlides: 5,
				maxSlides: 5,
				moveSlides: 1,
				slideWidth: 75,
				slideMargin: 20,
				pager: false,
				controls: true
			});
		}
	});
});