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


// ===== Reg ==== //

if (isset($_REQUEST['reg']) && $_REQUEST['reg'] == true) {
	$name = $_REQUEST['name'];
	$email = $_REQUEST['email'];
	$phone = $_REQUEST['phone'];
	$source = $_REQUEST['source'];
	$camp = 'Landing Page UK (Pakistan, India etc..';

    $sth = $pdo->prepare('INSERT INTO `leads`(
        `name`,
        `phone`, 
        `email`, 
        `campaign`, 
        `source`
        ) 
        VALUES (
        :name,
        :phone, 
        :email, 
        :campaign,
        :source
        )');

        $sth->bindValue(':name', $name);
        $sth->bindValue(':phone', $phone);
        $sth->bindValue(':email', $email);
        $sth->bindValue(':campaign', $camp);
        $sth->bindValue(':source', $source);


    $pdoExec = $sth->execute();


    if ($pdoExec) {
        echo "Succ";
    } else {
        echo "failed";
    }

}

// ===== /. Reg ==== //


?>