var down= document.getElementById("down");
var body= document.getElementsByTagName("body")[0];
var status;
down.addEventListener("click",function(event){
    body.scrollTop=1000;
})

// animation
down.addEventListener("mouseenter",function(event){

    var down_animation= setInterval(frame,1);
    var initial=80;
    var shift=1;
    function frame(){
        if(initial==81){
            clearInterval(down_animation);
        }

        else{
            initial=initial+shift;
            down.style.top=initial+'%';
        }
    }
    function check_timeout(){
        status="go";
    }

    setTimeout(check_timeout,300)
})

down.addEventListener("mouseleave",function(event){

    if(status=="go"){
    var down_animation= setInterval(frame,1);
    var initial=81;
    var shift=1;
    function frame(){
        if(initial==80){
            clearInterval(down_animation);
        }

        else{
            initial=initial-shift;
            down.style.top=initial+'%';
        }
    }
}
})

