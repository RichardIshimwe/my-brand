let manage_paragraph = document.querySelectorAll('.imgcont12');
let manage_image = document.querySelectorAll('.imgcont');
let blogsDisplay = document.querySelectorAll('.manage');
let dispalyBlog_array = [];
let logedIn = localStorage.getItem('logedIn') || "";
if(logedIn === "richard"){}
else{
let admin = document.querySelectorAll('.admin');
for(let i = 0;i < admin.length;i++){
admin[i].style.display = "none";
}
}
window.alert
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
console.log(holdStored);
// ==================================manage blog===========================================
//   function manageBlog(){
    let manage_image_state,manage_paragraph_state;
    let get_icondiv = document.querySelectorAll('.imgcont13');

    for(let i = 0;i < holdStored.length;i++){
        divisionState++;
        localStorage.setItem('divisionState',divisionState);
        let icon = document.createElement("i");
        let trash = document.createElement("i");
        let para = document.createElement("p");
        icon.className = "fa-solid fa-pen-to-square";
        trash.className = "fa-solid fa-trash-can";
        trash.setAttribute("id",i);
        icon.setAttribute("id",i);
        icon.setAttribute("href","./editblog.html")
        manage_paragraph_state = manage_paragraph[i];
        para.innerHTML = holdStored[i].title;
        let imageManage = new Image();
        imageManage.src = holdStored[i].image;
        manage_image_state = manage_image[i];
        if(divisionState < 7){
        blogsDisplay[i].style.display = "flex";
        manage_image_state.appendChild(imageManage)
        manage_paragraph_state.appendChild(para);
        get_icondiv[i].appendChild(icon);
        get_icondiv[i].appendChild(trash);
        }
    }
let popupMessagemanage = document.querySelector('.popupMessagemanage');
let confirmDelete = document.getElementById("delete");
let confirmcancel = document.getElementById("cancel");


let allblogs = document.querySelectorAll(".fa-trash-can");
for(let i = 0;i < allblogs.length;i++){
    allblogs[i].addEventListener('click',function(){
        popupMessagemanage.style.display = "flex";
        confirmDelete.addEventListener('click',function(){
            popupMessagemanage.style.display = "";
            let id = allblogs[i].getAttribute("id");
            console.log(id);
            console.log(i)
            holdStored.splice(id,1)
            localStorage.setItem('hold_blogs',JSON.stringify(holdStored));
            location.reload();
        })
        confirmcancel.addEventListener('click',function(){
            popupMessagemanage.style.display = "";
        })
     
    });
}
let alledit = document.querySelectorAll(".fa-pen-to-square");
console.log("edit cans:"+alledit.length);
for(let i = 0;i < alledit.length;i++){
    alledit[i].addEventListener('click',function(){
    let edit = alledit[i].getAttribute("id");
    localStorage.setItem('editId',edit);
    window.location.href = "editblog.html";
    console.log(localStorage.getItem('editId'));
    });
}

function logout(){
    localStorage.setItem('logedIn',"")
}









