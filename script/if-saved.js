var next= document.getElementById("next-btn");
var prev= document.getElementById("prev-btn");
var save_it = document.getElementById('save-it');

document.addEventListener("click",function(event){
  var element= event.target;
  var elementClass= element.getAttribute("class")
  var elementID1= element.getAttribute("id1")
  var elementID2= element.getAttribute("id2")
  var elementID= element.getAttribute("id")

  if(elementClass=="active-image"){

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



      var oReq = new XMLHttpRequest();
      oReq.onload = function() {
        if(this.responseText){
          save_it.setAttribute('image_id',this.responseText);}
          else {
                      save_it.setAttribute('image_id',"");
          }
      };
      oReq.open("get", "Include Files/if_save_id.inc.php");
      oReq.send();

  }



});

next.addEventListener("click",function(event){

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



      var oReq = new XMLHttpRequest();
      oReq.onload = function() {
        if(this.responseText){
          save_it.setAttribute('image_id',this.responseText);}
          else {
                      save_it.setAttribute('image_id',"");
          }
      };
      oReq.open("get", "Include Files/if_save_id.inc.php");
      oReq.send();



})

prev.addEventListener("click",function(event){

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



      var oReq = new XMLHttpRequest();
      oReq.onload = function() {
        if(this.responseText!==null){
          save_it.setAttribute('image_id',this.responseText);}
          else {
                      save_it.setAttribute('image_id',"");
          }
      };
      oReq.open("get", "Include Files/if_save_id.inc.php");
      oReq.send();



})

window.addEventListener("keydown",function(event){
  if(event.which==39||event.which==37){

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

    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
      if(this.responseText){
        save_it.setAttribute('image_id',this.responseText);}
        else {
                    save_it.setAttribute('image_id',"");
        }
    };
    oReq.open("get", "Include Files/if_save_id.inc.php");
    oReq.send();
  }


});
