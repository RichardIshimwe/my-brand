let add_title = document.getElementById("add_title");
let add_textarea = document.getElementById("add_textarea");
let add_image = document.getElementById("add_image");
let error_addblog = document.getElementById("errorAdd_title");
let logedIn = localStorage.getItem('logedIn') || "";
let userToset = document.querySelector('.userToset');
const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

userToset.innerHTML = logedIn;

if(logedIn === "richard"){}
else{
let admin = document.querySelectorAll('.admin');
for(let i = 0;i < admin.length;i++){
admin[i].style.display = "none";
}
}

let dispalyBlog_array = [];
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });
// ==================================blog number==========================================
let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];

let addImage_holder;
add_image.addEventListener('change', function () {
    let imageHolder = new FileReader();
    imageHolder.readAsDataURL(add_image.files[0]);
    imageHolder.addEventListener('load', () => {
    const url = imageHolder.result;
    localStorage.setItem('image', url);
    })
});

function addblog() {
    if(add_title.value != "" && add_textarea.value != ""){
    let actualDate = `${day}-${months[month]}-${year}`;
    addImage_holder = localStorage.getItem('image');
    blogs = {
        title: add_title.value,
        description: add_textarea.value,
        image: addImage_holder,
        comments:[],
        author: logedIn,
        date:actualDate
        };
    console.log(blogs);
    hold_blogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
    hold_blogs.unshift(blogs);
    localStorage.setItem('hold_blogs',JSON.stringify(hold_blogs));
    add_title.value = "";
    add_textarea.value = "";
    return true;}
    else{
        add_title.style.border = "2px solid red" 
        add_textarea.style.border = "2px solid red"
    }
    return false;
}

function edit() {
    window.location.href = 'editblog.html';
}
// ======================================================social medias=====================================
function linkedin() {
    window.open('https://www.linkedin.com/in/ishimwe-richard-40175a24a/', '_blank');
    // window.alert("linledin is clicked");
}
function github() {
    window.open('https://github.com/rich26638', '_blank');
}
// ===================================================end of socialmedia===================================
function logout(){
    localStorage.setItem('logedIn',"")
}
// https://www.youtube.com/watch?v=hKyudh3rC_A
// https://www.youtube.com/watch?v=hKyudh3rC_A