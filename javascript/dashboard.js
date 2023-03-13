let logedinWell = document.getElementById("logedin");
let blogNumber = document.getElementById("blogNumber");
let totalMessages = document.getElementById("newBlog");
let commentCont = document.querySelector(".ad");
let token = localStorage.getItem('token');
let adminButton = document.getElementById('adminForm');
let logedIn = localStorage.getItem('logedIn') || "";
var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let tokenTosend = {token:token}
let user = false;
user = JSON.parse(localStorage.getItem('status'));
if(user == false){
  location.href = '../index.html'
  myDiv.style.display = "none";
}
if(logedIn != 'Richard'){adminButton.style.display = "none"}
fetch('https://puce-helpful-xerus.cyclic.app/message')
  .then(response => response.json())
  .then(resp => {
    let allMessages = resp.data;
    for(let i = allMessages.length - 1;i >= 0;i--){
        let division = document.createElement("div");
        division.setAttribute('id', 'recent_comments');
        for(let j = 0;j < 5;j++){
            let date = new Date(allMessages[i].createdAt);
            let blogDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
           let paragraph = document.createElement("p");
           if(j == 0)paragraph.innerHTML = allMessages[i].names;
           if(j == 1)paragraph.innerHTML = allMessages[i].message;
           if(j == 2)paragraph.innerHTML = allMessages[i].email;
           if(j == 3)paragraph.innerHTML = blogDate;
           if(j == 4){
            let color;
            if(allMessages[i].check){
              color = "green";
             }
            // paragraph.innerHTML = `<i class="fa-solid fa-check-to-slot" id=${allMessages[i]._id}></i>`
            paragraph.innerHTML = `<i class="fa-solid fa-check-to-slot" id=${allMessages[i]._id} style="color:${color}"></i>`
          };
           division.appendChild(paragraph)
        }
    commentCont.appendChild(division)
    let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs'));
    blogNumber.innerHTML = storedBlogs.length;
    totalMessages.innerHTML = allMessages.length;
    }
            let messagebutton = document.querySelectorAll(".fa-check-to-slot");
            console.log(messagebutton.length);
            for(let i = 0;i < messagebutton.length;i++){
              messagebutton[i].addEventListener('click',function(){
              messagebutton[i].style.color = 'green';
              console.log(messagebutton[i])
              let id = messagebutton[i].getAttribute("id");
              const _id = id;
              fetch(`https://puce-helpful-xerus.cyclic.app/message/${_id}`,{
                method: 'PUT',
              })
              .then(response => {
                response.json();
                console.log(response);
              })
              .then(message => message)
              .catch(err => console.log(err))
              console.log({id})
              });
          }
})

adminButton.addEventListener('submit', (e) =>{
  e.preventDefault();
  let adminInput = document.getElementById('adminInput');
  let adminPara = document.getElementById('adminPara');
    if(regex.test(adminInput.value)){
      console.log(logedIn)
      let userTobeAdmin ={token:token,email: adminInput.value};
     fetch('https://puce-helpful-xerus.cyclic.app/makeAdmin', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(userTobeAdmin)
       })
       .then(response => response.json())
       .then(resp => {
        console.log(resp);
        adminPara.innerHTML = resp.message;
      })
      }else{
        adminPara.innerHTML = "*validid email is repuired"
     }
})
    
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });







