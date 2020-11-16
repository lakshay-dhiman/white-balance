var account = document.getElementById('account-overlay');
document.addEventListener("click",function(event){
  elem=event.target;
  elemID= elem.getAttribute('id');
  elemClass= elem.getAttribute('class');

  if(elemID=="php-div"||elemID=="pfp"){
    account.classList.toggle("login_visible");
  }else if (elemClass=="account-item" || elemID=="triangle" || elemID=="account-overlay") {}

  else {
        account.classList.remove("login_visible");

  }
})
