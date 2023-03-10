let logedinWell = document.getElementById("logedin");
let blogNumber = document.getElementById("blogNumber");
let totalMessages = document.getElementById("newBlog");
let commentCont = document.querySelector(".ad");
let token = localStorage.getItem('token');
let tokenTosend = {token:token}
let user = false;
user = JSON.parse(localStorage.getItem('status'));
if(user == false){
  myDiv.style.display = "none";
}
fetch('https://puce-helpful-xerus.cyclic.app/message')
  .then(response => response.json())
  .then(resp => {
    let allMessages = resp.data;
    for(let i = 0;i < allMessages.length;i++){
        let division = document.createElement("div");
        division.setAttribute('id', 'recent_comments');
        for(let j = 0;j < 4;j++){
            let date = new Date(allMessages[i].createdAt);
            let blogDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
           let paragraph = document.createElement("p");
           if(j == 0)paragraph.innerHTML = allMessages[i].names;
           if(j == 3)paragraph.innerHTML = blogDate;
           if(j == 1)paragraph.innerHTML = allMessages[i].message;
           if(j == 2)paragraph.innerHTML = allMessages[i].email;
           division.appendChild(paragraph)
        }
        commentCont.appendChild(division)
    let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs'));
    blogNumber.innerHTML = storedBlogs.length;
    totalMessages.innerHTML = allMessages.length;
    }
})

    
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });







