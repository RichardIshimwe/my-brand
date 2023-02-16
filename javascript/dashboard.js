let logedinWell = document.getElementById("logedin");
let blogNumber = document.getElementById("blogNumber");
let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];

    blogNumber.innerHTML = storedBlogs.length;
    function logMeout(){
        localStorage.setItem('logedIn',"")
    }
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });