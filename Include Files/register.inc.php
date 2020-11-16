<?php
session_start();
if(isset($_POST['register'])){

  $url="../".$_POST['current_page'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $pwd1 = $_POST['pwd1'];
  $pwd2 = $_POST['pwd2'];
//validation
  if(empty($_POST['email']) || empty($_POST['pwd1']) || empty($_POST['pwd1']) || empty($_POST['name'])){
    $_SESSION['error-reg']="all fields are required";
    header("Location: $url");
    return;
  }

  else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $_SESSION['error-reg'] = "enter a valid email address";
    header("Location: $url");
    return;
  }

  else if(!preg_match("/^[a-zA-Z ]*$/",$name)){
    $_SESSION['error-reg'] = "name can have only alphabetical characters";
    header("Location: $url");
    return;
  }

  if($pwd1!=$pwd2){
    $_SESSION['error-reg'] = "the passwords dont match ";
    header("Location: $urld");
    return;
  }else{
    $password = password_hash($pwd1, PASSWORD_DEFAULT);
  }
//end of validation

//database insertion

  require_once("db.inc.php");
  $sql="SELECT * FROM Users WHERE email= :email ";
  $prepare = $pdo-> prepare($sql);
  $prepare -> execute(array(':email' => $email));
  $exists=$prepare->fetch(PDO::FETCH_ASSOC);
    if ($exists){
      $_SESSION['error-reg']='user exists';
      header("location: $url");
      return;
    }


  $sql="INSERT INTO Users (name, email, password, image_name) VALUES (:name, :email, :password, :image_name)";
  $prepare = $pdo-> prepare($sql);
  if($prepare){
    $prepare -> execute(array(
      ':name' => $name,
      ':email' => $email,
      'password' => $password,
      ':image_name' => 'default-pfp.png'

    ));
    //success
    // $_SESSION['success']='user registered';
    //logging in
    $sql="SELECT * FROM Users WHERE email = :email";
    $prepare= $pdo-> prepare($sql);
    $prepare-> execute(array(':email' => $email));
    $record= $prepare->fetch(PDO:: FETCH_ASSOC);
    $_SESSION['user_data']=$record;
    $_SESSION['loggedin']=true;
    header("Location: $url");
    return;

  }else{
    $_SESSION['error-reg']='something went wrong';
  }

  header("location: $url");
  return;


}
else {
  header("Location: $url");
  return;
}
