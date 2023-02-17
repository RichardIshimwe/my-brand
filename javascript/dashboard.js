let logedinWell = document.getElementById("logedin");
let blogNumber = document.getElementById("blogNumber");
let commentCont = document.querySelector(".ad");

let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [],messages = JSON.parse(localStorage.getItem('messages')) || [];

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

for(let i = 0;i < messages.length;i++){
    let division = document.createElement("div");
    division.setAttribute('id', 'recent_comments');
    for(let j = 0;j < 3;j++){
       let paragraph = document.createElement("p");
       paragraph.innerHTML = messages[i][j];
       division.appendChild(paragraph)
    }
    
    console.log(division);
    console.log(commentCont)
    commentCont.appendChild(division)
}





