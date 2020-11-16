document.addEventListener("click",function(event){
  if (event.target.getAttribute('id')=='save-not-loggedin'||event.target.getAttribute('id')=='not-loggedin-save') {
    window.alert('You are not logged in');
  }
})
