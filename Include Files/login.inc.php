<?php
session_start();
if(isset($_POST['login'])){

  $url="../".$_POST['current_page'];
  $email = $_POST['email'];
  $pwd = $_POST['pwd'];

//validation
  if(empty($_POST['email']) || empty($_POST['pwd'])){
    $_SESSION['error-login']="all fields are required";
    header("Location: $url");
    return;
  }

  else if(!filter_var($email, FILTER_VALIDATE_EMAIL) ){
    $_SESSION['error-login'] = "enter a valid email address";
    header("Location: $url");
    return;
  }

//vallidation end


//databse part
require_once("db.inc.php");



  $sql="SELECT * FROM Users WHERE email = :email";
  $prepare= $pdo-> prepare($sql);
  if ($prepare) {
    $prepare-> execute(array(':email' => $email));
    $record= $prepare->fetch(PDO:: FETCH_ASSOC);
    if($record){
      $pwd_encrypted = $record['password'];
      if(password_verify($pwd,$pwd_encrypted)){

        $_SESSION['user_data']=$record;
        $_SESSION['loggedin']=true;
        // $_SESSION['success']="successfully logged in";
        header("Location: $url");
        return;
      }else {
        $_SESSION['error-login']="Password incorrect";
        $_SESSION['filled']=$email;
        header("Location: $url");
        return;
      }
    }else{
      $_SESSION['error-login'] = "user does not exist, consider registering";
      header("Location: $url");
      return;
    }
  }else{
    $_SESSION['error-login'] = "an error occured";
    header("Location: $url");
    return;
  }


}
else {
  header("Location: $url");
  return;
}
