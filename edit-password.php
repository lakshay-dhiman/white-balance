<?php session_start() ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="Files/tab-logo.png">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit profile</title>
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
    <link rel="stylesheet" href="style/edit.css">
    <link rel="stylesheet" href="style/style.css">
  </head>
  <body>
    <header>
      <?php require_once 'Include Files/header.inc.php'; ?>
    </header>

    <main>

      <h1 id="edit-heading">EDIT YOUR INFORMATION</h1>

      <div id='the-form'>
      <form action="Include Files/edit-pwd.inc.php" method="post" enctype="multipart/form-data" id="edit-form">
        <?php if (isset($_SESSION['error'])): ?>
          <span id="error"><?php echo $_SESSION['error']; unset($_SESSION['error'])?></span>
        <?php endif; ?>
        <?php if (isset($_SESSION['success'])): ?>
          <span id="success"><?php echo $_SESSION['success']; unset($_SESSION['success'])?></span>
        <?php endif; ?>

        <h1>Change your Password</h1>
        <input type="password" name="prev-pass" placeholder="enter old password">
        <input type="password" name="new-pass" placeholder="enter new password">
        <input type="password" name="confirm-pass" placeholder="confirm new password">
        <button type="submit" name="edit">UPDATE</button>
        <a id="back" href="edit.php">back</a>

      </form>
    </div>

    </main>
    <footer id="footer">
    <div id="footer-content">

        <div id="footer-brand">
            <img src="Files/LOGO">
            <h3>WHITE BALANCE</h3>
        </div>

        <div id="sources">
            <h3>Image Sources</h3>
            <ul>
                <li>   </li>
                <li><a href="https://unsplash.com/" target="_blank">Unsplash.com</a></li>
                <li><a href="https://unsplash.com/developers" target="_blank">Unsplash Developers</a></li>
            </ul>
        </div>



    </div>

    </footer>
  </body>


  <script src="script/delete-from-saved.js"></script>
  <script src="script/image-overview.js"></script>




</html>
