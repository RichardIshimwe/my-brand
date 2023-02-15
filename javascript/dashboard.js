let logedinWell = document.getElementById("logedin");
let logedout = document.getElementById("logedout");
let blogNumber = document.getElementById("blogNumber");
let hold_logedin = localStorage.getItem('logedIn') || "";
let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
if(hold_logedin != ""){
    // logedinWell.innerHTML = localStorage.getItem('logedIn');
//     logedinWell.innerHTML = `<a href="./html/dashboard.html"><i class="fa-solid fa-user"></i>${hold_logedin}</a>`
}else{
    logedout.innerHTML = "login";
}
    blogNumber.innerHTML = storedBlogs.length;

window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });