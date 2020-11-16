var signup = document.getElementById('complete_signup');
// var title = document.getElementById('login');
document.addEventListener("click",function(event){
  elem=event.target;
  elemID= elem.getAttribute('id');
  elemClass= elem.getAttribute('class');
  if(elemID=="show-signup"){
    signup.classList.toggle("login_visible");
  }else if (elemID=="signup-form" || elemClass=="signup-elements"|| elemID=="signup-overlay") {}
  else if(elemID=="hide-signup"){
      signup.classList.remove("login_visible");
      login.classList.add("login_visible");
  }
  else {
        signup.classList.remove("login_visible");
  }
})


