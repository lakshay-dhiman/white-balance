<?php
session_start();
require_once 'db.inc.php';

$pwd = $_POST['prev-pass'];
$pwd1 = $_POST['new-pass'];
$pwd2 = $_POST['confirm-pass'];

if($pwd!=""&&$pwd1!=""&&$pwd2!=""){
  if($pwd1==$pwd2){
    $sql="SELECT * FROM Users WHERE user_id = :user_id";
    $prepare= $pdo-> prepare($sql);
    if ($prepare) {
      $prepare-> execute(array(':user_id' => $_SESSION['user_data']['user_id']));
      $record= $prepare->fetch(PDO:: FETCH_ASSOC);
      if($record){
        $pwd_encrypted = $record['password'];
        if(password_verify($pwd,$pwd_encrypted)){
          $sql = 'UPDATE Users SET password = :password WHERE user_id = :user_id';
          $prepare = $pdo -> prepare($sql);
          $prepare -> execute(array(
            ':password' => password_hash($pwd1, PASSWORD_DEFAULT),
            ':user_id' => $_SESSION['user_data']['user_id']
          ));
          $_SESSION['success']="Successfully changed the password";
          header("location: ../edit-password.php?success=1");
        }
        else{
          $_SESSION['error']="Password Incorrect";
          header("location: ../edit-password.php?error=incorrect");
        }
      }
    }
  }else{
    $_SESSION['error']="Passwords dont match";
    header("location: ../edit-password.php?error=not_same");
}
}
else{
  $_SESSION['error']= "Empty Fields";
  header("location: ../edit-password.php?error=empty");
}
