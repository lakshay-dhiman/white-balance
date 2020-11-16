<?php
session_start();
$data = file_get_contents("php://input");
require_once 'db.inc.php';

$sql="SELECT * FROM liked_images WHERE unsplash_id= :unsplash_id";
$prepare = $pdo-> prepare($sql);
$prepare -> execute(array(':unsplash_id' => $data));
$exists=$prepare->fetch(PDO::FETCH_ASSOC);

print_r($exists);

if ($exists) {
  $image_id = $exists['image_id'];
  $_SESSION['image_id']=$image_id;
  $sql="SELECT * FROM user_likes WHERE image_id= :image_id and user_id=:user_id ";
  $prepare = $pdo-> prepare($sql);
  $prepare -> execute(array(
    ':image_id' => $image_id,
    ':user_id' => $_SESSION['user_data']['user_id']
  ));
  $exists=$prepare->fetch(PDO::FETCH_ASSOC);
  print_r($exists);
  if($exists){

    $_SESSION['class']='fas fa-bookmark';

  }else {

    $_SESSION['class']="far fa-bookmark";

  }

}else{

  $_SESSION['class']="far fa-bookmark";
  $_SESSION['image_id']="";

}
