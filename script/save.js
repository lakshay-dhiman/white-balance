  var  req_data={};
document.addEventListener("click",function(event){
  var element= event.target;
  var elementID= element.getAttribute("id")

  var url=photo_save["urls"]["regular"],
      download_link=photo_save['links']['download'],
      name=photo_save['user']['name'],
      username=photo_save['user']['links']['html'],
      likes=photo_save['likes'];
      image_id=photo_save["id"];



      req_data['url']=url;
      req_data['download_link']=download_link;
      req_data['name']=name;
      req_data['username']=username;
      req_data['likes']=likes;
      req_data['id']=image_id;

  if(elementID=='save'|| elementID=='save-it'){

    var saved= document.getElementById('save-it').getAttribute('class');
    if(saved=="far fa-bookmark"){
      var if_saved=false;
    }
    else if (saved=="fas fa-bookmark") {
      var if_saved=true;
    }

    image_id=photo_save["id"];
    // check_if_saved(image_id);
    jsondata=JSON.stringify(image_id);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "Include Files/if-saved.inc.php");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(image_id);


    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
        save_it.setAttribute('class',this.responseText);
    };
    oReq.open("get", "Include Files/if-saved-1.inc.php");
    oReq.send();


    if(!if_saved){
      jsondata=JSON.stringify(req_data);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "Include Files/save.inc.php");
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(jsondata);

      var oReq = new XMLHttpRequest();
      oReq.onload = function() {
          event.target.setAttribute('image_id',this.responseText);
      };
      oReq.open("get", "Include Files/if_save_id.inc.php");
      oReq.send();

      image_id=photo_save["id"];
      // check_if_saved(image_id);
      jsondata=JSON.stringify(image_id);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "Include Files/if-saved.inc.php");
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(image_id);


      var oReq = new XMLHttpRequest();
      oReq.onload = function() {
          save_it.setAttribute('class',this.responseText);
      };
      oReq.open("get", "Include Files/if-saved-1.inc.php", true);
      oReq.send();


    }

    if(if_saved){

      var data_to_send = event.target.getAttribute('image_id');
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "Include Files/remove.inc.php");
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(data_to_send);


      image_id=photo_save["id"];
      jsondata=JSON.stringify(image_id);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "Include Files/if-saved.inc.php");
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(image_id);


      var oReq = new XMLHttpRequest();
      oReq.onload = function() {
          save_it.setAttribute('class',this.responseText);
      };
      oReq.open("get", "Include Files/if-saved-1.inc.php", true);
      oReq.send();

    }
  }

})
