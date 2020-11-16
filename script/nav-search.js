var nav_search= document.getElementById("nav-search-box");

nav_search.addEventListener("keydown",function(){
    inner_text = nav_search.value;
    category=inner_text;

    if(event.which==13){
        window.location.php="per-category.php";
        event.preventDefault();
        category=inner_text;
        localStorage.setItem("category",category)
    }
})
