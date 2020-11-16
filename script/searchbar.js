var search = document.getElementById("searchbar-main");
var nav_search= document.getElementById("nav-search-box");

if(search){
search.addEventListener("keydown",function(){
    inner_text = search.value;
    category=inner_text;

    if(event.which==13){
        window.location.href="per-category.php";
        event.preventDefault();
        category=inner_text;
        localStorage.setItem("category",category)
    }

})
}

nav_search.addEventListener("keydown",function(){
    inner_text = nav_search.value;
    category=inner_text;

    if(event.which==13){
        window.location.href="per-category.php";
        event.preventDefault();
        category=inner_text;
        localStorage.setItem("category",category)
    }

})
