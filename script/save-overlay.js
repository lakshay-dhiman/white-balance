var img_overlay = document.getElementById('img-overlay');
var overlay_save = document.getElementById('overlay-zoom');


document.addEventListener("click",function(event){
var elem=event.target;
var elemID= elem.getAttribute('id');

if(elemID=='saved_image'){
  var url= elem.getAttribute("src");
  img_overlay.setAttribute("src",url);

  overlay_save.classList.add('overlay_visible');
}

else if (elemID=='img-overlay') {
  //do nothing
}

else{
  overlay_save.classList.remove('overlay_visible');
}

})

window.addEventListener("keydown",function(event){
    if(event.which==27){
      overlay_save.classList.remove('overlay_visible');
    }

  });
