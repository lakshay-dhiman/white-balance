var category;

document.addEventListener("click",function(event){
    var clicked_elem= event.target;
    var elem_id= clicked_elem.getAttribute("id");
    var elem_class= clicked_elem.getAttribute("class");
    if(elem_class=="category-links"){
        category= elem_id;
        localStorage.setItem("category",category);
    }

})
