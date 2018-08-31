<?php

include 'config.php';

$email = $mail;
$subject = 'Новый заказ: {NAME} из города {CITY}';
$message = '<html>
<body>
    <p><b>Новая заявка:</b></p>	
    <p><b>Имя</b> {NAME}</p>
    <p><b>Телефон:</b> {TEL}</p>
   </body>
</html>';

if(isset($_POST['tel'])){

    $headers = "From: " . $email . "\r\n";
//$headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
//$headers .= "CC: susan@example.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    foreach($_POST as $key=>$value)
        $subject=str_replace('{'.strtoupper($key).'}', htmlspecialchars($value), $subject);

    foreach($_POST as $key=>$value)
        $message=str_replace('{'.strtoupper($key).'}', htmlspecialchars($value), $message);

    echo
        mail($email, $subject, $message, $headers)?'true':'false';

}

