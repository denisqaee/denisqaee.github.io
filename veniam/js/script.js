// READY
$(document).ready(function(){

	submit();
});

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
