let add_title = document.getElementById("add_title");
let add_textarea = document.getElementById("add_textarea");
let error_addblog = document.getElementById("errorAdd_title");
let token = localStorage.getItem('token');
let logedIn = localStorage.getItem('logedIn') || "";
let userToset = document.querySelector('.userToset');
let addBlog = document.getElementById('addBlog')
const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

userToset.innerHTML = logedIn;
let checkIn = JSON.parse(localStorage.getItem('status'));
console.log(checkIn)
const myDiv = document.getElementById("myDiv");
if(checkIn == false){
    myDiv.style.display = "none";
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



addBlog.addEventListener('submit', (event) =>{
    event.preventDefault();
    if(add_title.value != "" && add_textarea.value != ""){
    let actualDate = `${day}-${months[month]}-${year}`;
    let fileToget = document.getElementById('add_image').files[0];
    let title = document.getElementById('add_title').value;
    let description = document.getElementById('add_textarea').value;
    const formData = new FormData();
    formData.append('image', fileToget);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author',logedIn)
        fetch('https://puce-helpful-xerus.cyclic.app/blogs', {
            // fetch('http://localhost:4000/blogs', {
            method: 'POST',
            headers: {
                'Authorization': token,
              },
            body: formData,
            // mode: 'no-cors'
          })
          .then(response => {
            console.log("blog created")
            location.href = 'https://my-brand-richard.netlify.app/html/manage.html'
        })
          .then(resp => {
        }).catch(err => console.log(err))

}
    else{
        add_title.style.border = "2px solid red" 
        add_textarea.style.border = "2px solid red"
    }
})

function edit() {
    window.location.href = 'https://my-brand-richard.netlify.app/html/editblog.html';
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