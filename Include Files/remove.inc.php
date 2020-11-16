<?php
session_start();
$image_id = file_get_contents("php://input");
echo $image_id;
require_once('db.inc.php');
$sql="DELETE FROM user_likes WHERE image_id = :image_id AND user_id=:user_id";
$prepare = $pdo -> prepare($sql);
$prepare -> execute(array(
  ':image_id' => $image_id,
  ':user_id'=> $_SESSION['user_data']['user_id']
));
