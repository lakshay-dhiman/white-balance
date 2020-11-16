<?php
session_start();
  if (isset($_FILES['image-file'])) {

    $allowed_files=array("png","jpg","jpeg");
    $variable=explode(".",$_FILES['image-file']['name']);
    $final_name_id = uniqid().".".end($variable);
    echo $final_name_id."<br>";
    if (in_array(strtolower(end($variable)),$allowed_files)){
      $target_file="../Uploads/". $final_name_id ;
      move_uploaded_file($_FILES["image-file"]["tmp_name"], $target_file);
      
      require_once 'db.inc.php';
      $sql = "UPDATE Users SET image_name = :image_name WHERE user_id=:user_id";
      $prepare = $pdo-> prepare($sql);
      $prepare -> execute(array(
        ':image_name' => $final_name_id,
        ':user_id' => $_SESSION['user_data']['user_id']
      ));


    }

    //edit name
    require_once 'db.inc.php';
    $sql="UPDATE Users SET name = :name WHERE user_id = :user_id";
    $prepare= $pdo-> prepare($sql);
    $prepare-> execute(array(
      ':name' => $_POST['name'],
      ':user_id' => $_SESSION['user_data']['user_id']
    ));

    $sql="SELECT * FROM Users WHERE user_id = :user_id";
    $prepare= $pdo-> prepare($sql);
    $prepare-> execute(array(':user_id' => $_SESSION['user_data']['user_id']));
    $record= $prepare->fetch(PDO:: FETCH_ASSOC);
    $_SESSION['user_data']=$record;

    header('location: ../edit.php');
  }
