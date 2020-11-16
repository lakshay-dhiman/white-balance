<?php
session_start();
require_once("Include Files/db.inc.php");

if(isset($_SESSION['loggedin'])){

  $liked_images=array();
  $sql="SELECT liked_images.url, liked_images.image_id, liked_images.download_link, liked_images.art_name, liked_images.art_username from Users join liked_images join user_likes on user_likes.image_id = liked_images.image_id and user_likes.user_id = Users.user_id where Users.user_id=:user_id";
  $prepare = $pdo-> prepare($sql);
  $prepare -> execute(array(':user_id' => $_SESSION['user_data']['user_id']));
  while($liked_data=$prepare->fetch(PDO::FETCH_ASSOC)){
  array_push($liked_images,$liked_data);

  }
}
?>


<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Files/tab-logo.png">
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/per-category.css">
    <link rel="stylesheet" href="style/saved.css">
</head>

<body>

<!--
    the first view
  -->

  <header>
    <?php require_once 'Include Files/header.inc.php'; ?>

  </header>
<?php if(isset($_SESSION['loggedin'])) :?>


      <?php if (!empty($liked_images)): ?>
        <main>
        <h1 id="heading">LIKED IMAGES</h1>
        <div id="liked_images">
      <?php foreach ($liked_images as $key => $value):?>
      <div id="liked_image">
        <img src="<?php echo $value['url'] ?>" id="saved_image">
      <div id="photo_info">
        <h3>By: <?php echo $value['art_name'] ?></h3>
        <a href="<?php echo $value['download_link']."?force=true"; ?>" target="_blank" >download</a>
        <a href="<?php echo $value['art_username'] ?>" target="_blank" ><?php echo (explode(".com/",$value['art_username']))[1]; ?></a>
      </div>
      <div  id="remove" image_id="<?php echo $value['image_id'] ;?>"><div class="glyphicon glyphicon-trash" id="removeMF" image_id="<?php echo $value['image_id'] ;?>"></div></div>
    </div>
  <?php endforeach ; ?>
  <?php else: ?>
    <main style="height:100%">
    <h1 id="no_images">NO LIKED IMAGES YET</h1>
  <?php endif; ?>
  </div>
</main>
<div id="overlay-zoom">
  <img src="" id="img-overlay">
</div>

</body>



<script src="script/save-overlay.js"></script>
<script src="script/delete-from-saved.js"></script>

<?php else: ?>

  <h1 id="not-logged-in">you are not logged in </h1>


<?php endif; ?>

</html>
