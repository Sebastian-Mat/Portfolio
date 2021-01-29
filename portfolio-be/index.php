<?php
    
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS") {
    die();
}

http_response_code(200);

$email = $_POST['Email'];
$subject = $_POST['Subject'];
$message = $name . "</br>" . $_POST['Message'];
$to = "sebastian.mat30@gmail.com";

$headers = "MIME-Version: 1.0\r\n";
$headers.= "Content-type: text/html; charset=UTF-8\r\n";
$headers.= "From: <" . $name . ">";
$mail = mail($to, $subject, $message, $headers);

if($mail) {
    echo "Mail Sent";
}