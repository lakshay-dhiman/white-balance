<?php

session_start();
$something = file_get_contents("php://input");
$data= json_decode($something,true);

print_r($data);



require_once('db.inc.php');

//checking if $exists
$sql="SELECT * FROM liked_images WHERE unsplash_id= :unsplash_id ";
$prepare = $pdo-> prepare($sql);
$prepare -> execute(array(':unsplash_id' => $data['id']));
$exists=$prepare->fetch(PDO::FETCH_ASSOC);
  if (!$exists){
    $sql = "INSERT INTO liked_images (unsplash_id, url, download_link, art_name, art_username, likes) VALUES (:unsplash_id, :url, :download_link, :art_name, :art_username, :likes) ";
    $prepare = $pdo-> prepare($sql);
    $prepare -> execute(array(
      ':unsplash_id' => $data['id'],
      ':url' => $data['url'],
      ':download_link' => $data['download_link'],
      ':art_name' => $data['name'],
      ':art_username' => $data['username'],
      ':likes' => $data['likes']
    ));
}
    $sql="SELECT * FROM liked_images WHERE unsplash_id= :unsplash_id ";
    $prepare = $pdo-> prepare($sql);
    $prepare -> execute(array(':unsplash_id' => $data['id']));
    $exists=$prepare->fetch(PDO::FETCH_ASSOC);
    if ($exists) {
      $image_id = $exists['image_id'];
    }

    $sql="SELECT * FROM user_likes WHERE image_id= :image_id and user_id=:user_id ";
    $prepare = $pdo-> prepare($sql);
    $prepare -> execute(array(
      ':image_id' => $image_id,
      ':user_id' => $_SESSION['user_data']['user_id']
    ));
    $exists= $prepare -> fetch(PDO::FETCH_ASSOC);
    if(!$exists){
      $sql = "INSERT INTO user_likes (user_id, image_id) VALUES (:user_id, :image_id) ";
      $prepare = $pdo-> prepare($sql);
      $prepare -> execute(array(
        ':user_id' => $_SESSION['user_data']['user_id'],
        ':image_id' => $image_id
      ));
    }
