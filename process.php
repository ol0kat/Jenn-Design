<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Save the message to a file (you can modify this to store in a database, send an email, etc.)
$file = 'messages.txt';
$current = file_get_contents($file);
$current .= "Name: $name\nEmail: $email\nMessage: $message\n\n";
file_put_contents($file, $current);

// Redirect back to the HTML page after submitting the form
header('Location: index.html');
exit();
?>
