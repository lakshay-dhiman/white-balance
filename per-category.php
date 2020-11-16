<?php session_start() ?>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="Files/tab-logo.png">
    </head>
    <body>
    <link rel="stylesheet" href="style/per-category.css">


    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
    <link rel="stylesheet" href="style/style.css">
    <header>
            <!-- back to top button -->
            <?php require_once 'Include Files/header.inc.php'; ?>

    </header>
    <!-- images -->
    <h1 id="heading"></h1>
    <div id="no-image"></div>
    <div id="container">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>

    <!-- overlay -->
    <div id="overlay">
        <img id="overlay-image" src="">
        <div id="interact">
          <a id="download" ><div class="glyphicon glyphicon-download" ></div></a><br>
          <?php if(isset($_SESSION['loggedin'])) : ?>
            <div id="save"><i id="save-it"></i></div>
          <?php else : ?>
            <div id='save-not-loggedin'><i class="far fa-bookmark" id="not-loggedin-save" ></i></div>
          <?php endif ; ?>
        </div>
        <div id="next-btn"><div class="glyphicon glyphicon-menu-right"></div></div>
        <div id="prev-btn"><div class="glyphicon glyphicon-menu-left"></div></div>
        <div id="artist">
            <div id="name"></div><br>
            <div id="username"><a target="_blank"></a></div><br>
            <div id="likes">Likes <div class="glyphicon glyphicon-thumbs-up"></div> : <span id="likes_number"></span></div><br>
        </div>
        <div class="glyphicon glyphicon-remove-sign" id="cross"></div>

    </div>
        <script src="script/image-load.js"></script>
        <script src="script/overlay.js"></script>
        <script src="script/save.js"></script>
        <script src="script/if-saved.js"></script>
        <script src="script/save-not-loggedin.js"></script>
        <script src="https://kit.fontawesome.com/97c0d3b4dc.js" crossorigin="anonymous"></script>
    </body>
</html>
