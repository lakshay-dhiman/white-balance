document.addEventListener('click',function(event){
  if(event.target.getAttribute('click')=='edit'){
    window.location.href = "edit.php";
  }

  if(event.target.getAttribute('click')=='saved'){
    window.location.href = "saved.php";
  }

})
