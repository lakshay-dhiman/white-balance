var photo_data=[];
var category=localStorage.getItem("category")

var body = document.getElementsByTagName("body")[0];
var i=0
var count=1;


fetch("https://api.unsplash.com/search/photos?query="+category+"&per_page=30&page=&client_id=P3GtEuGrxWt8Xkvr50XcQlrWg2ktKg9aFcP0zVaBzRU")
    .then(function(data){
       return data.json();
    })
    .then(function(data){
        var total= data.total;
        photo_data[1]=data;
        if(photo_data[1].total!=0){
        var heading= document.getElementById("heading")
        heading.innerHTML=category.toLocaleUpperCase()

    
    
        while(i<=29){
            for(var j=0; j<=2; j++){
                var something = document.getElementsByClassName("column");
                url=(data.results[i].urls.small);
                var image = document.createElement("img");
                something[j].appendChild(image);
                image.setAttribute("class","image")
                image.setAttribute("id1",i)
                image.setAttribute("id2","1")
                image.setAttribute("count",(count))
                image.setAttribute("src",url)  
                i++;
                count++;
            }
            
        }

    }

    else{
        
        var no_image= document.createElement("img");
        var div_tag= document.getElementById("no-image");

        no_image.setAttribute("src","Files/no-results.png")
        div_tag.appendChild(no_image);
    }
    
    })   
    
var page=2;
var stop=0;


document.addEventListener("scroll",function(){
    if(((body.scrollTop+window.innerHeight)>(document.documentElement.scrollHeight-2000))&&((body.scrollTop+window.innerHeight)<(document.documentElement.scrollHeight))&&stop==0){
    stop=1;
    fetch("https://api.unsplash.com/search/photos?query="+category+"&per_page=30&page="+page+"&page=&client_id=P3GtEuGrxWt8Xkvr50XcQlrWg2ktKg9aFcP0zVaBzRU")
    .then(function(data){
       return data.json();
    })
    .then(function(data){
        var total= data.total;
        photo_data[page]=data;
    
        var i=0;
        while(i<=29){
            for(var j=0; j<=2; j++){
                var something = document.getElementsByClassName("column");
                url=(data.results[i].urls.small);
                var image = document.createElement("img");
                something[j].appendChild(image);
                image.setAttribute("class","image")
                image.setAttribute("id1",i)
                image.setAttribute("id2",page)
                image.setAttribute("count",count)
                image.setAttribute("src",url) 
                count++; 
                i++;
            }
        }
        page++;
        
    
    }) 
    
    }
    else if(((body.scrollTop+window.innerHeight)<(document.documentElement.scrollHeight-2000))&&((body.scrollTop+window.innerHeight)<(document.documentElement.scrollHeight))){
    stop=0;
    }
    
})

var active_link= document.getElementById(""+category+"");
active_link.classList.add("link-active")



