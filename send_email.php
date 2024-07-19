<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "zhumatthew10@gmail.com"; // Replace with your email address
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $schedule = isset($_POST["sched-int"]) ? "Yes" : "No";

    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $fullMessage = "Email: " . $email . "\n";
    $fullMessage .= "Subject: " . $subject . "\n";
    $fullMessage .= "Message: " . $message . "\n";
    $fullMessage .= "Schedule Interview: " . $schedule . "\n";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>