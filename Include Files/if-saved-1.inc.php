<?php
session_start();
  usleep(300);
  $classe=$_SESSION['class'];
  echo $_SESSION['class'];
  // $class=trim($classe,'"');
  // echo json_encode(trim($class,'"'));
