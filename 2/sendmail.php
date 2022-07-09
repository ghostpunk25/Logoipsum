<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('ghostpunk25@gmail.com', 'Фрилансер по жизни');
	//Кому отправить
	$mail->addAddress('mdurov25@gmail.com');
	//Тема письма
	$mail->Subject = 'Привет! Это "Фрилансер по жизни"';

	//Тело письма
	$body = '<h1>Встречайте супер письмо!</h1>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Name:</strong>' .$_POST['name'].'</p>';
	}	

	if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Tel:</strong>' .$_POST['tel'].'</p>';
	}	

	if(trim(!empty($_POST['address']))){
		$body.='<p><strong>Address:</strong>' .$_POST['address'].'</p>';
	}	

	// if(trim(!empty($_POST['email']))){
	// 	$body.='<p><strong>E-mail:</strong>' .$_POST['email'].'</p>';
	// }	

	
	/*
	//Прикрепить файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//путь загрузки файла
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузим файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>