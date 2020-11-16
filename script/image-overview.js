document.getElementById('image-file')
  .addEventListener("change", function(event){
    if(this.files[0]){
      var read = new FileReader();

      read.onload = function(event){
        document.getElementById('pfp-preview').setAttribute('src',event.target.result);
      }
      read.readAsDataURL(this.files[0]);
      }
  })

  document.getElementById('edit-pfp')
    .addEventListener("click", function(event){
      document.getElementById('image-file').click();
    })
