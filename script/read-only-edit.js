var name_field = document.getElementById('name-input');
  name_field.readOnly=true;

document.getElementById("edit-icon")
  .addEventListener('click', function(event){
    name_field.readOnly=false;
    name_field.focus();
    name_field.select();
    name_field.active();
  })
// document,addEventListener('click', function(event){
//   if(event.target.getAttribute('id')!=="edit-icon"||event.target.getAttribute('id')!=="name-input"){
//   name_field.readOnly=true;
//   }
// })
