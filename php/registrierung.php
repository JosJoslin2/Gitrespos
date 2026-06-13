<?php
include 'config.php';

$vorname  = $_POST["vorname"];
$nachname = $_POST["nachname"];
$email    = $_POST["email"];
$passwort = $_POST["passwort"];

$passwort_hash = password_hash($passwort, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (vorname, nachname, email, passwort) 
        VALUES ('$vorname', '$nachname', '$email', '$passwort_hash')";

if ($mysqli->query($sql)) {
    echo "Registrierung erfolgreich!🎉";
} else {
    echo " Fehler: " . $mysqli->error;
}
?>
