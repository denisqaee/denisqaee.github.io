<?php
	if ($_POST) {
		$name = htmlspecialchars($_POST["contactName"]);
		$email = htmlspecialchars($_POST["contactEmail"]);
		$message = htmlspecialchars($_POST["contactMessage"]);
	}


	$message = "Имя: ".$name."\r\nПочта: ".$email."\r\n\n".$message;
	sendMessage($message, $sub);


	function sendMessage($mess, $subj){
		$to      = 'denisqaee@gmail.com';
		$subject = 'Вопрос по веб-разработке';
		$message = $mess;
		$headers = "Content-type: text/plain; charset=utf-8". "\r\n";
		$headers .= 'From: Portfolio' . "\r\n" .
		$headers .= 'Reply-To: Portfolio' . "\r\n" .
		$headers .= 'X-Mailer: PHP/' . phpversion();
		mail($to, $subject, $message, $headers);
	}
?>