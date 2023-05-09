<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "tadkartawijaya@gmail.com"; // Replace with your email address
    $headers = "From: " . $email . "\r\n" .
        "Reply-To: " . $email . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    $mail_body = "Name: " . $name . "\n" .
        "Email: " . $email . "\n" .
        "Subject: " . $subject . "\n" .
        "Message: " . $message;

    mail($to, $subject, $mail_body, $headers);
}
?>
