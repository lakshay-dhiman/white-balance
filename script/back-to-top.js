var body = document.body;
var top_button= document.getElementById("top-btn");
var button= document.getElementById("up-arrow");
// visibility and all
window.addEventListener("scroll",function(event){
    top_button.className = (body.scrollTop>800)? "visible" : "invisible" ;
})

// back to top action
top_button.addEventListener("click", function(event){
    event.preventDefault;
    body.scrollTop="0";
  });


// animation
top_button.addEventListener("mouseenter",function(event){

  var up_animation= setInterval(frame,5);
  var initial=85;
  var shift=0.5;
  function frame(){
      if(initial==83){
          clearInterval(up_animation);
      }

      else{
          initial=initial-shift;
          top_button.style.top=initial+'%';
      }
  }
})

top_button.addEventListener("mouseleave",function(event){

  var up_animation= setInterval(frame,5);
  var initial=83;
  var shift=0.5;
  function frame(){
      if(initial==85){
          clearInterval(up_animation);
      }

      else{
          initial=initial+shift;
          top_button.style.top=initial+'%';
      }
  }
})
