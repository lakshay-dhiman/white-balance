<?php $location=explode("/",$_SERVER['REQUEST_URI'])?>
<div id="firstview">
    <!-- back to top button -->
    <div id=top-btn><div class="glyphicon glyphicon-chevron-up" id="up-arrow"></div></div>

    <!-- navbar -->
    <nav class="navbar navbar-default" id="navigation">

        <div class="container-fluid">

        <!-- logo and all -->
        <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php" id="logo"><img src="Files/LOGO"></a>
                <?php if (!isset($_SESSION['loggedin'])): ?>
                  <div id='login-responsive'>Login</div>
                  <?php else: ?>
                  <div id="php-div" class="only-for-responsive"><li><img id="pfp" src="<?php echo "Uploads/".$_SESSION['user_data']['image_name'] ?>" alt=""></li></div>
                <?php endif; ?>

        </div>

        <!-- main links  -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav" id="menu-elements">

                <li class="category-links" id="travel"><a href="per-category.php" class="category-links" id="travel">Travel</a></li>
                <li class="category-links" id="nature"><a href="per-category.php" class="category-links" id="nature">Nature</a></li>
                <li class="category-links" id="textures"><a href="per-category.php" class="category-links" id="textures">Textures</a></li>
                <li class="category-links" id="people"><a href="per-category.php" class="category-links" id="people">People</a></li>
                <li class="category-links" id="technology"><a href="per-category.php" class="category-links" id="technology">Technology</a></li>
                <li class="category-links" id="athletics"><a href="per-category.php" class="category-links" id="athletics">Athletics</a></li>
                <li class="category-links" id="animals"><a href="per-category.php" class="category-links" id="animals">Animals</a></li>
                <li class="category-links" id="interiors"><a href="per-category.php" class="category-links" id="interiors">Interiors</a></li>
                <li class="category-links" id="food"><a href="per-category.php" class="category-links" id="food">Food</a></li>
            </ul>

  <!-- right links -->
        <ul class="nav navbar-nav navbar-right" id="menu-elements-right">
            <div id="nav-search-icon" class="visible"><li id="nav-search-glyphcon"><div class="glyphicon glyphicon-search" id="nav-search-glyphcon"></div></li></div>
            <form><input type="text" id="nav-search-box" class="invisible" placeholder="Search"></form>

            <!-- if not logged in -->
            <?php if(!isset($_SESSION['loggedin'])) : ?>
                <div id="login">LOGIN</div>
            <?php endif ; ?>
  <!-- if not logged in -->

  <!-- if logged in -->
            <?php if(isset($_SESSION['loggedin'])) : ?>
              <?php if($_SESSION['loggedin']) : ?>
              <div id="php-div"><li><img id="pfp" src="<?php echo "Uploads/".$_SESSION['user_data']['image_name'] ?>" alt=""></li></div>
              <?php endif ; ?>
            <?php endif ; ?>
  <!-- if logged in -->

        </ul>
      </div>
      </div>
    </nav>

    <!--
      login overlay
  -->
  <div id="blur-login"></div>
  <?php if(isset($_SESSION['error-login'])) : ?>
      <div id="login-overlay" class="login_visible">
  <?php else : ?>
    <div id="login-overlay">
  <?php endif ; ?>
      <div class="triangle"></div>
      <form id="login-form" action="Include Files/login.inc.php" method="post">
        <h2 class="login-elements" >LOGIN HERE</h2>
        <div id="cross-login" class="glyphicon glyphicon-remove-sign"></div>
        <?php if(isset($_SESSION['error-login'])) : ?>
          <p id="error">* <?php echo $_SESSION['error-login']; unset($_SESSION['error-login']);?></p>
        <?php endif ; ?>

        <input class="login-elements" type="text" name="email" spellcheck="false" placeholder="Email">
        <input class="login-elements" type="password" name="pwd" placeholder="Password">
        <input class="login-elements" type="hidden" name="login">
        <input type="hidden" name="current_page" value="<?php echo end($location)?>">
        <button class="login-elements" type="submit" name="submit">LOG IN</button>
        <p class="login-elements" >New user ? <a id="show-signup" href="#">SIGNUP</a> </p>

      </form>
    </div>
    <!--
      login overlay end
   -->


   <!-- logged in overlay -->
<?php if(isset($_SESSION['loggedin'])) : ?>
  <?php if($_SESSION['loggedin']) : ?>
    <div id="account-overlay">
      <div class="triangle"></div>
      <div click="edit" class="account-item" id="profile">
        <div id="mask"><img click="edit" class="account-item" src="<?php echo "Uploads/".$_SESSION['user_data']['image_name'] ?>" ></div>
        <div click="edit" class="account-item" id="account-name"><h1 click="edit" class="account-item" ><?php echo $_SESSION['user_data']['name'] ?></h1>  </div>
        <div click="edit" id="edit" class="glyphicon glyphicon-menu-right account-item"></div>
      </div>
      <div click="saved" class="account-item" id="saved-images"><a click="saved" href="saved.php">SAVED IMAGES</a></div>
      <div class="account-item" id="logout-div"><a href="Include Files/logout.inc.php" id="logout">LOGOUT</a> </div>
    </div>
  <?php endif ; ?>
<?php endif ; ?>

   <!-- logged in overlay -->

   <!--
    signup overlay
  -->

  <?php if(isset($_SESSION['error-reg'])) : ?>
      <div id="complete_signup" class="login_visible">
  <?php else : ?>
    <div id="complete_signup">
  <?php endif ; ?>

      <div id="blur"></div>
      <div id="signup-overlay">
        <div id="cross-signup" class="glyphicon glyphicon-remove-sign"></div>
        <h1 class="signup-elements" >SIGNUP HERE</h1>
        <form id="signup-form" action="Include Files/register.inc.php" method="post">
          <h2 class="signup-elements" >Please give following details</h2>

          <?php if(isset($_SESSION['error-reg'])) : ?>
            <p id="error">* <?php echo $_SESSION['error-reg']; unset($_SESSION['error-reg']);?></p>
          <?php endif ; ?>

          <input class="signup-elements" type="text" name="email" spellcheck="false" placeholder="Enter your Email">
          <input class="signup-elements" type="text" name="name" spellcheck="false" placeholder="Your Name">
          <input class="signup-elements" type="password" name="pwd1" placeholder="Enter Password">
          <input class="signup-elements" type="password" name="pwd2" placeholder="Confirm Password">
          <input class="signup-elements" type="hidden" name="register">
          <input type="hidden" name="current_page" value="<?php echo end($location) ?>">
          <button class="signup-elements" type="submit" name="submit">SIGN UP</button>
          <p id="signup-p" class="signup-elements" >Already registered ? <a id="hide-signup" href="#">LOGIN</a> </p>
        </form>
      </div>
    </div>
    <!--
     signup overlay end
   -->


   <script src="bootstrap-3.3.7-dist/js/jquery-3.5.1.min.js"></script>
   <script src="bootstrap-3.3.7-dist/js/bootstrap.js"></script>
   <script src="script/back-to-top.js"></script>
   <script src="script/navbar-search.js"></script>
   <script src="script/category-links.js"></script>
   <script src="script/show-menu.js"></script>
   <?php if (isset($_SESSION['loggedin'])): ?>
     <script src="script/acount-overlay.js"></script>
     <script src="script/go-to-edit.js"></script>
   <?php else: ?>
     <script src="script/signup-overlay.js"></script>
     <script src="script/login-overlay.js"></script>
   <?php endif; ?>
