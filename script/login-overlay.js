var login = document.getElementById("login-overlay");
var title = document.getElementById("login");
// var title = document.getElementById("login");
// var blur = document.getElementById("blur");
var title_responsive = document.getElementById("login-responsive");

document.addEventListener("click", function (event) {
  elem = event.target;
  elemID = elem.getAttribute("id");
  elemClass = elem.getAttribute("class");

  if (elemID == "login") {
    login.classList.toggle("login_visible");
    title.classList.toggle("login-active");
    // title_responsive.classList.toggle("login-active");
  } else if (
    elemID == "login-form" ||
    elemClass == "login-elements" ||
    elemID == "triangle" ||
    elemID == "login-overlay"
  ) {
  } else {
    login.classList.remove("login_visible");
    title.classList.remove("login-active");
    title_responsive.classList.remove("login-active");
    console.log("else");
  }

  if (($(document).width() < 768) || ((window.innerHeight < window.innerWidth)&&($(document).width() < 500)) ){
    if (elemID == "login-responsive") {
      title_responsive.classList.toggle("login-active");
      login.classList.toggle("login_visible");
      $("#blur-login").toggle();
    } else if (
      elemID == "login-form" ||
      elemClass == "login-elements" ||
      elemID == "triangle" ||
      elemID == "login-overlay"
    ) {
    } else {
      login.classList.remove("login_visible");
      title_responsive.classList.remove("login-active");
      $("#blur-login").hide();
    }
  }
});
