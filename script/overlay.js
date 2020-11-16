
var img = document.getElementsByClassName("image");
var overlay= document.getElementById("overlay")
var next= document.getElementById("next-btn");
var prev= document.getElementById("prev-btn");

var photo_save=[] ;

document.addEventListener("click",function(event){
var element= event.target;
var elementClass= element.getAttribute("class")
var elementID1= element.getAttribute("id1")
var elementID2= element.getAttribute("id2")
var elementID= element.getAttribute("id")

    if(elementClass=="image"){
        overlay_url = photo_data[elementID2].results[elementID1].urls.regular;
        overlay_image= document.getElementById("overlay-image");
        overlay_image.setAttribute("src",overlay_url)
        overlay.classList.add("overlay-visible");
        element.setAttribute("class","active-image")
        //for save
        photo_save=photo_data[elementID2].results[elementID1];


        // download link
        var download_link= photo_data[elementID2].results[elementID1].links.download;
        var download_button = document.querySelector("#download");
        download_button.setAttribute("href",download_link+"?force=true");

        // name
        var artist_name= photo_data[elementID2].results[elementID1].user.name;
        var name= document.getElementById("name");
        name.innerHTML= "By :"+artist_name;

        // username
        var artist_username=photo_data[elementID2].results[elementID1].user.username;
        var username= document.querySelector("#username a");
        var user_url=photo_data[elementID2].results[elementID1].user.links.html;
        username.innerHTML="@"+artist_username;
        username.setAttribute("href",user_url);

        // likes
        var img_likes= photo_data[elementID2].results[elementID1].likes;
        var likes= document.getElementById("likes_number");
        likes.innerHTML=img_likes;

        var active_image= document.getElementsByClassName("active-image")[0];
        var img_count=active_image.getAttribute("count");
        if(img_count==1){
        prev.classList.add("invisible");
        }
        else{
            prev.classList.remove("invisible");
        }


    }

    else if(elementClass=="overlay-visible"){
        overlay.classList.remove("overlay-visible");
        var active_image= document.getElementsByClassName("active-image")[0];
        active_image.setAttribute("class","image");

    }
})

window.addEventListener("keydown",function(event){
    if(event.which==27){
        overlay.classList.remove("overlay-visible");
        var active_image= document.getElementsByClassName("active-image")[0];
        active_image.setAttribute("class","image");
    }
})



next.addEventListener("click",function(event){
    var active_image= document.getElementsByClassName("active-image")[0];
    var img_count=active_image.getAttribute("count");
    img_count=''+(parseInt(img_count)+1)+'';
    active_image.setAttribute("class","image");
    var to_be_activated= document.querySelectorAll("img[count='"+img_count+"']")[0];
    to_be_activated.setAttribute("class","active-image");
    var active_image= document.getElementsByClassName("active-image")[0];
    var elementID1= active_image.getAttribute("id1")
    var elementID2= active_image.getAttribute("id2")
    var overlay_url = photo_data[elementID2].results[elementID1].urls.regular;
    var overlay_image= document.getElementById("overlay-image");
    overlay_image.setAttribute("src",overlay_url)
    prev.classList.remove("invisible");

    //for save
    photo_save=photo_data[elementID2].results[elementID1];

        // download link
        var download_link= photo_data[elementID2].results[elementID1].links.download;
        var download_button = document.querySelector("#download");
        download_button.setAttribute("href",download_link+"?force=true");

        // name
        var artist_name= photo_data[elementID2].results[elementID1].user.name;
        var name= document.getElementById("name");
        name.innerHTML= "By :"+artist_name;

        // username
        var artist_username=photo_data[elementID2].results[elementID1].user.username;
        var username= document.querySelector("#username a");
        var user_url=photo_data[elementID2].results[elementID1].user.links.html;
        username.innerHTML="@"+artist_username;
        username.setAttribute("href",user_url);

        // likes
        var img_likes= photo_data[elementID2].results[elementID1].likes;
        var likes= document.getElementById("likes_number");
        likes.innerHTML=img_likes;

        if(img_count%29==0){
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

prev.addEventListener("click",function(event){
    var active_image= document.getElementsByClassName("active-image")[0];
    var img_count=active_image.getAttribute("count");
    if(img_count>1){
    img_count=''+(parseInt(img_count)-1)+'';
    active_image.setAttribute("class","image");
    var to_be_activated= document.querySelectorAll("img[count='"+img_count+"']")[0];
    to_be_activated.setAttribute("class","active-image");
    var active_image= document.getElementsByClassName("active-image")[0];
    var elementID1= active_image.getAttribute("id1")
    var elementID2= active_image.getAttribute("id2")
    var overlay_url = photo_data[elementID2].results[elementID1].urls.regular;
    var overlay_image= document.getElementById("overlay-image");
    overlay_image.setAttribute("src",overlay_url)

    //for save
    photo_save=photo_data[elementID2].results[elementID1];

        // download link
        var download_link= photo_data[elementID2].results[elementID1].links.download;
        var download_button = document.querySelector("#download");
        download_button.setAttribute("href",download_link+"?force=true");

        // name
        var artist_name= photo_data[elementID2].results[elementID1].user.name;
        var name= document.getElementById("name");
        name.innerHTML= "By :"+artist_name;

        // username
        var artist_username=photo_data[elementID2].results[elementID1].user.username;
        var username= document.querySelector("#username a");
        var user_url=photo_data[elementID2].results[elementID1].user.links.html;
        username.innerHTML="@"+artist_username;
        username.setAttribute("href",user_url);

        // likes
        var img_likes= photo_data[elementID2].results[elementID1].likes;
        var likes= document.getElementById("likes_number");
        likes.innerHTML=img_likes;
    }
    if(img_count==1){
        prev.classList.add("invisible");
    }
})

window.addEventListener("keydown",function(event){
    if(event.which==39){
        var active_image= document.getElementsByClassName("active-image")[0];
        var img_count=active_image.getAttribute("count");
        img_count=''+(parseInt(img_count)+1)+'';
        active_image.setAttribute("class","image");
        var to_be_activated= document.querySelectorAll("img[count='"+img_count+"']")[0];
        to_be_activated.setAttribute("class","active-image");
        var active_image= document.getElementsByClassName("active-image")[0];
        var elementID1= active_image.getAttribute("id1")
        var elementID2= active_image.getAttribute("id2")
        var overlay_url = photo_data[elementID2].results[elementID1].urls.regular;
        var overlay_image= document.getElementById("overlay-image");
        overlay_image.setAttribute("src",overlay_url)
        prev.classList.remove("invisible");

        // download link
        var download_link= photo_data[elementID2].results[elementID1].links.download;
        var download_button = document.querySelector("#download");
        download_button.setAttribute("href",download_link+"?force=true");

        // name
        var artist_name= photo_data[elementID2].results[elementID1].user.name;
        var name= document.getElementById("name");
        name.innerHTML= "By :"+artist_name;

        // username
        var artist_username=photo_data[elementID2].results[elementID1].user.username;
        var username= document.querySelector("#username a");
        var user_url=photo_data[elementID2].results[elementID1].user.links.html;
        username.innerHTML="@"+artist_username;
        username.setAttribute("href",user_url);

        // likes
        var img_likes= photo_data[elementID2].results[elementID1].likes;
        var likes= document.getElementById("likes_number");
        likes.innerHTML=img_likes;

        if(img_count%29==0){
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
    }
})

window.addEventListener("keydown",function(event){
    if(event.which==37){
        var active_image= document.getElementsByClassName("active-image")[0];
        var img_count=active_image.getAttribute("count");
        if(img_count>1){
        img_count=''+(parseInt(img_count)-1)+'';
        active_image.setAttribute("class","image");
        var to_be_activated= document.querySelectorAll("img[count='"+img_count+"']")[0];
        to_be_activated.setAttribute("class","active-image");
        var active_image= document.getElementsByClassName("active-image")[0];
        var elementID1= active_image.getAttribute("id1")
        var elementID2= active_image.getAttribute("id2")
        var overlay_url = photo_data[elementID2].results[elementID1].urls.regular;
        var overlay_image= document.getElementById("overlay-image");
        overlay_image.setAttribute("src",overlay_url)

        // download link
        var download_link= photo_data[elementID2].results[elementID1].links.download;
        var download_button = document.querySelector("#download");
        download_button.setAttribute("href",download_link+"?force=true");

        // name
        var artist_name= photo_data[elementID2].results[elementID1].user.name;
        var name= document.getElementById("name");
        name.innerHTML= "By :"+artist_name;

        // username
        var artist_username=photo_data[elementID2].results[elementID1].user.username;
        var username= document.querySelector("#username a");
        var user_url=photo_data[elementID2].results[elementID1].user.links.html;
        username.innerHTML="@"+artist_username;
        username.setAttribute("href",user_url);

        // likes
        var img_likes= photo_data[elementID2].results[elementID1].likes;
        var likes= document.getElementById("likes_number");
        likes.innerHTML=img_likes;
        }
        if(img_count==1){
            prev.classList.add("invisible");
        }
    }
})

var cross= document.getElementById("cross");

cross.addEventListener("click",function(event){
    overlay.classList.remove("overlay-visible");
    var active_image= document.getElementsByClassName("active-image")[0];
    active_image.setAttribute("class","image");
})
