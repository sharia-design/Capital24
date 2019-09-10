<?php 

$db_name = "capital24";
$servername = "localhost";
$db_username = "root";
$db_password = "11Sveliiasamani_";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$db_name", $db_username, $db_password);
    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
	    die("ERROR: Could not connect. " . $e->getMessage());
    }

?>