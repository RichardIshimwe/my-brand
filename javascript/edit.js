let editTitle = document.getElementById('edit_title');
let editTextarea = document.getElementById('edit_textarea');
let errorm = document.getElementById('errorm');
let logedIn = localStorage.getItem('logedIn') || "";
let token = localStorage.getItem('token') || "";
let checkUser = localStorage.getItem('token') || "";
let receive_image = document.getElementById('receive_image');
let editForm = document.getElementById('editForm')
let paramsId = new URLSearchParams(window.location.search);

let _id = paramsId.get("id");
if(checkUser == true){}
else{
let admin = document.querySelectorAll('.admin');
for(let i = 0;i < admin.length;i++){
admin[i].style.display = "none";
}
}

receive_image.addEventListener('change', function () {
    let imageHolder = new FileReader();
    imageHolder.readAsDataURL(receive_image.files[0]);
    imageHolder.addEventListener('load', () => {
    const url = imageHolder.result;
    localStorage.setItem('image', url);
    })
});
let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
for(let i = 0;i < storedBlogs.length;i++){
    if(storedBlogs[i]._id == _id){
editTitle.value = storedBlogs[i].title;
editTextarea.value = storedBlogs[i].description;
    }
}

 editForm.addEventListener('submit', (event) =>{
event.preventDefault();
   let keepImage = localStorage.getItem('image');
   if(editTitle.value == "" && editTextarea.value == ""){
    editTitle.style.border = "2px solid red";
    editTextarea.style.border = "2px solid red";
    errorm.innerHTML = "*please fill out the form";
    return false;
   }else{
    if(editTitle.value != ""){
        editTitle.style.border = "2px solid green";
    }else{
        editTitle.style.border = "2px solid red";
        errorm.innerHTML = "*title field can not be empty";
        return false;
    }
    if(editTextarea.value != ""){
        editTextarea.style.border = "2px solid green";
    }else{
        editTextarea.style.border = "2px solid red";
        errorm.innerHTML = "*please enter the blog description";
        return false;
    }
   }

   let fileToget = document.getElementById('receive_image').files[0];
   const formData = new FormData();
   formData.append('image', fileToget);
   formData.append('title', editTitle.value);
   formData.append('description', editTextarea.value);
   formData.append('author',logedIn)
       fetch(`https://puce-helpful-xerus.cyclic.app/blogs/${_id}`, {
           method: 'PUT',
           body: formData,
           mode: 'no-cors'
         })
         .then(response => {
           location.href = 'https://my-brand-richard.netlify.app/html/manage.html'
       })
         .then(resp => {
       }).catch(err => console.log(err))
})
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });
  function logout(){
    localStorage.setItem('logedIn',"")
}