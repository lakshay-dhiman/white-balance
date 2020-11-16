var remove = document.getElementById('remove');

  document.addEventListener("click",function(event){
    if(event.target.getAttribute('id')=='remove'||event.target.getAttribute('id')=='removeMF'){
    if(confirm('are you sure  you wanna remove this from saved')){
    var image_id=event.target.getAttribute('image_id');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "Include Files/remove.inc.php");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(image_id);
    document.location.reload(true);

  }
}

});
