var search_icon= document.getElementById("main-search-icon")
var textbox = document.getElementById("main-searchbar")
var text_box = document.getElementById("searchbar-main")

var open=0;

document.addEventListener("click",function(event){
    var elem = event.target,
        elemID= elem.getAttribute('id');
        
    
    if(elemID=="main-search-glyphcon" || elemID=="main-search-icon"){
        text_box.value="";
        search_icon.classList.remove("visible")
        search_icon.classList.add("invisible")
        textbox.classList.add("visible")
        textbox.classList.remove("invisible")
        text_box.focus();  


        //animation
        var out_form= setInterval(frame2,5);
        var initial_width= 0;
        var shift=20;

        function frame2(){
            if(initial_width==600){
                clearInterval(out_form);
            }

            else{
                initial_width=initial_width+shift;
                text_box.style.width=initial_width+'px'
            }
        }

    }

    else if(elemID=="searchbar-main"){}

    else if(elemID!=="main-search-glyphcon" || elemID!=="main-search-icon"){
        var in_form= setInterval(frame2,5);
        var initial_width=600;
        var shift=20;
        //animation

        function frame2(){
            if(initial_width==0){
                clearInterval(in_form);
            }

            else{
                initial_width=initial_width-shift;
                text_box.style.width=initial_width+'px'
            }
        }

        search_icon.classList.remove("invisible")
        search_icon.classList.add("visible")
        textbox.classList.remove("visible")
        textbox.classList.add("invisible")
    }
})

