$(document).ready(function(){
});

$(document).on('click', '.callback_modal_show', function () {
	$('#background_modal').fadeIn(300);
	$('.callback_modal').fadeIn(300);
	$('.callback_modal').css("display", "flex");
});

$(document).on('click', '.modal_close', function () {
	$('.modal_closed').fadeOut(300);
});
