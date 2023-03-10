let manage_paragraph = document.querySelectorAll('.imgcont12');
let manage_image = document.querySelectorAll('.imgcont');
let blogsDisplay = document.querySelectorAll('.manage');
let dispalyBlog_array = [];
let token = localStorage.getItem('token') || "";
let logedIn = localStorage.getItem('logedIn');
let user = false;
user = JSON.parse(localStorage.getItem('status'));
let dateToday = document.querySelectorAll('#dateToday');
let getAdmin = document.querySelector('.admin');
let white = document.getElementById('.white');
const myDiv = document.getElementById("myDiv");
if(user == false){
    myDiv.style.display = "none";
}
fetch('https://puce-helpful-xerus.cyclic.app/blogs')
.then(response => response.json())
.then(async (resp) =>{
    storedBlogs = await resp.data;
    console.log(storedBlogs)
    localStorage.setItem('hold_blogs',JSON.stringify(storedBlogs))})
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });
// ==================================blog number===========================================
let divisionState = 0;
let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [],holdStored = [];
if(logedIn === "richard"){
 holdStored = storedBlogs;
}else{
for(let i = 0;i < storedBlogs.length;i++){
    if(storedBlogs[i].author === logedIn){
        holdStored.push(storedBlogs[i]);
    }
}
}
// ==================================manage blog===========================================
    let manage_image_state,manage_paragraph_state;
    let get_icondiv = document.querySelectorAll('.imgcont13');

let blogDivision = document.querySelector('.add_content');

fetch('https://puce-helpful-xerus.cyclic.app/blogs')
.then(response => response.json())
.then(async (resp) =>{
    storedBlogs = await resp.data;
    console.log(storedBlogs);
    let userBlogs = [];
    console.log("userblogs",userBlogs)
    if(user == true) {
        console.log("admin",userBlogs.length) 
        userBlogs = storedBlogs;
    }else if(user == false){
        console.log("not an admin",userBlogs.length) 
        for(let p = 0; p < storedBlogs.length; p++){
            if(storedBlogs[p].author == logedIn){
                console.log("my blog")
                userBlogs.push(storedBlogs[p]);
            }
        }
    }
    for(let i = 0;i < userBlogs.length;i++){
        const date = new Date(userBlogs[i].createdAt);
        const blogDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        blogDivision.innerHTML +=`
           <div class="manage">
            <div class="imagew">
                <div class="imgcont">
                <img src="${userBlogs[i].image}" alt="" srcset="">
                </div>
                <div class="dateCont">
                    <p id="dateToday">
                    <i class="fa-regular fa-clock"></i>${blogDate}
                    </p>
                </div>
                <div class="author">Author: ${userBlogs[i].author}</div>
                <div class="imgcont12">
                <p>${userBlogs[i].title}</p>
                </div>
                   <div class="imgcont13">
            <i class="fa-solid fa-pen-to-square" id="${userBlogs[i]._id}"></i>
            <i class="fa-solid fa-trash-can" id="${userBlogs[i]._id}"></i>
                    </div>
                   </div>
                     </div>
           `
        }
        let alledit = document.querySelectorAll(".fa-pen-to-square");
for(let i = 0;i < alledit.length;i++){
    alledit[i].addEventListener('click',function(){
    let edit = alledit[i].getAttribute("id");
    console.log(edit)
    let id = this.getAttribute("id");
    location.href = `https://my-brand-richard.netlify.app/html/editblog.html?id=${id}`
    });
}


let popupMessagemanage = document.querySelector('.popupMessagemanage');
let confirmDelete = document.getElementById("delete");
let confirmcancel = document.getElementById("cancel");


let allblogs = document.querySelectorAll(".fa-trash-can");
for(let i = 0;i < allblogs.length;i++){
    allblogs[i].addEventListener('click',function(){
        popupMessagemanage.style.display = "flex";
        localStorage.setItem('deleteId',allblogs[i].getAttribute("id"));    
    });
}
confirmDelete.addEventListener('click',function(){
    popupMessagemanage.style.display = "";
    let _id = localStorage.getItem('deleteId')
    console.log(_id);
    let tokenTosend = {token:token};
    fetch(`https://puce-helpful-xerus.cyclic.app/blogs/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tokenTosend)
      })
      .then(response => response.json())
      .then(resp => {
        console.log(resp)
        location.reload();
    })

})
confirmcancel.addEventListener('click',function(){
    popupMessagemanage.style.display = "";
})


})



function logout(){
    localStorage.setItem('logedIn',"")
}









