let logedinWell = document.getElementById("logedin");
let blogNumber = document.getElementById("blogNumber");

let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
let logedIn = localStorage.getItem('logedIn') || "";
if(logedIn === "richard"){}
else{
let admin = document.querySelectorAll('.admin');
for(let i = 0;i < admin.length;i++){
admin[i].style.display = "none";
}
}

    blogNumber.innerHTML = storedBlogs.length;
    function logMeout(){
        localStorage.setItem('logedIn',"")
    }
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });