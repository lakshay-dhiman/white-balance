<?php session_start(); ?>

<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="Files/tab-logo.png">
        <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
        <link rel="stylesheet" href="style/style.css">
    </head>

    <body>

    <!--
        the first view
      -->

    <header>
      <?php require_once 'Include Files/header.inc.php'; ?>


        <div id="landing"></div>
            <div id="landing-content">
                <h1 id="main-heading">WHITE BALANCE</h1>
                <div id="main-search-icon"> <div class="glyphicon glyphicon-search" id="main-search-glyphcon"></div></div>
                <div id="main-searchbar" ><form><input type="text"  placeholder="Search" id="searchbar-main"> </form></div>
            </div>
        <div class="glyphicon glyphicon-menu-down" id="down"></div>
    </div>
    </header>

    <!--
        the first view wnd
     -->



     <!--
         main content of page
       -->


    <main id="main-page">
        <h2 id="categories">CATEGORIES</h2>
        <div class="cat-item" ><a href="per-category.php">
            <img id="travel" class="category-links" src="https://images.unsplash.com/photo-1589803196808-b395a6f32a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" >
            <h3 class="category-links" id="travel" >Travel</h3></a>
        </div>
        <div class="cat-item"  ><a href="per-category.php">
            <img class="category-links" id="nature" src="https://images.unsplash.com/photo-1579329974377-10c2d3458e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" >
            <h3 class="category-links" id="nature">Nature</h3></a>
        </div>
        <div class="cat-item" ><a href="per-category.php">
            <img class="category-links" id="textures"  src="https://images.unsplash.com/photo-1589737172771-1ff396cb2e74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" >
            <h3 class="category-links" id="textures" >Textures</h3></a>
        </div>
        <div class="cat-item" ><a href="per-category.php">
            <img id="people" class="category-links" src="https://images.unsplash.com/photo-1588255431349-06f2c40e3e8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" >
            <h3 class="category-links" id="people" >People</h3></a>
        </div>
        <div class="cat-item" ><a href="per-category.php">
            <img id="technology" class="category-links" src="https://images.unsplash.com/photo-1588213855193-2adeb19d7eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" >
            <h3 class="category-links" id="technology" >Technology</h3></a>
        </div>
        <div class="cat-item" ><a href="per-category.php">
            <img id="athletics" class="category-links" src="https://images.unsplash.com/photo-1545151414-8a948e1ea54f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" >
            <h3 class="category-links" id="athletics" >Athletic</h3></a>
        </div>
        <div class="cat-item" ><a href="per-category.php">
            <img id="animals" class="category-links" src="https://images.unsplash.com/photo-1589657811299-8a792670e68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" >
            <h3 class="category-links" id="animals" >Animals</h3></a>
        </div>
        <div class="cat-item" ><a href="per-category.php">
            <img id="interiors" class="category-links" src="https://images.unsplash.com/photo-1564273795917-fe399b763988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" >
            <h3 class="category-links" id="interiors" >Interiors</h3></a>
        </div>
        <div class="cat-item" ><a href="per-category.php">
            <img id="food" class="category-links" src="https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" >
            <h3 class="category-links" id="food" >Food</h3></a>
        </div>
    </main>
    <!--
        main page end

     -->


     <!--
        footer start

       -->

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
    <!--
        footer end
     -->

    <!--
        scripts and all that shit

     -->
    <script src="script/search-main.js"></script>
    <script src="script/down-arrow.js"></script>
    <script src="script/searchbar.js"></script>



    </body>
</html>
