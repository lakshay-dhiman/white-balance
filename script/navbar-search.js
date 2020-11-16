var nav_search_icon= document.getElementById("nav-search-icon")
var nav_textbox = document.getElementById("nav-search-box")
var open=0;

document.addEventListener("click",function(event){
    var elem = event.target,
        elemID= elem.getAttribute('id');
    
    if(elemID=="nav-search-glyphcon" || elemID=="nav-search-icon"){
        nav_textbox.value="";
        nav_search_icon.classList.remove("visible")
        nav_search_icon.classList.add("invisible")
        nav_textbox.classList.add("visible")
        nav_textbox.classList.remove("invisible")
        nav_textbox.focus();

        //animation
        var out_form= setInterval(frame2,5);
        var initial_width= 0;
        var shift=10;

        function frame2(){
            if(initial_width==250){
                clearInterval(out_form);
            }

            else{
                initial_width=initial_width+shift;
                nav_textbox.style.width=initial_width+'px'
            }
        }


    }

    else if(elemID=="nav-search-box"){}

    else if(elemID!=="nav-search-glyphcon" || elemID!=="nav-search-icon"){
        nav_search_icon.classList.remove("invisible")
        nav_search_icon.classList.add("visible")
        nav_textbox.classList.remove("visible")
        nav_textbox.classList.add("invisible")

        // animation
        var out_form= setInterval(frame2,5);
        var initial_width= 250;
        var shift=10;

        function frame2(){
            if(initial_width==0){
                clearInterval(out_form);
            }

            else{
                initial_width=initial_width-shift;
                nav_textbox.style.width=initial_width+'px'
            }
        }
    }
})


