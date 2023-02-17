let editTitle = document.getElementById('edit_title');
let editTextarea = document.getElementById('edit_textarea');
let errorm = document.getElementById('errorm');
let logedIn = localStorage.getItem('logedIn') || "";
if(logedIn === "richard"){}
else{
let admin = document.querySelectorAll('.admin');
for(let i = 0;i < admin.length;i++){
admin[i].style.display = "none";
}
}

let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [],editId = localStorage.getItem('editId') || 0;
console.log(JSON.parse(localStorage.getItem('hold_blogs')));

editTitle.value = storedBlogs[editId].title;
editTextarea.value = storedBlogs[editId].description;

function editblog(){
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
    storedBlogs[editId].title = document.getElementById('edit_title').value;
    storedBlogs[editId].description = document.getElementById('edit_textarea').value;
    localStorage.setItem('hold_blogs',JSON.stringify(storedBlogs));
    console.log(JSON.parse(localStorage.getItem('hold_blogs')));
    return true;
}
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });
  function logout(){
    localStorage.setItem('logedIn',"")
}