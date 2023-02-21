let manage_paragraph = document.querySelectorAll('.imgcont12');
let manage_image = document.querySelectorAll('.imgcont');
let blogsDisplay = document.querySelectorAll('.manage');
let dispalyBlog_array = [];
let logedIn = localStorage.getItem('logedIn') || "";
let dateToday = document.querySelectorAll('#dateToday');
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
// ==================================manage blog===========================================
//   function manageBlog(){
    let manage_image_state,manage_paragraph_state;
    let get_icondiv = document.querySelectorAll('.imgcont13');



//     <div class="manage image1">
//     <div class="imagew">
//         <div class="imgcont">
//         </div>
//         <div class="dateCont">
//             <p id="dateToday"></p>
//         </div>
//         <div class="imgcont12">
//         </div>
//         <div class="imgcont13">
//         </div>
//     </div>
// </div>
let blogDivision = document.querySelector('.add_content');



for(let i = 0;i < storedBlogs.length;i++){
blogDivision.innerHTML +=`
   <div class="manage">
    <div class="imagew">
        <div class="imgcont">
        <img src="${storedBlogs[i].image}" alt="" srcset="">
        </div>
        <div class="dateCont">
            <p id="dateToday">
            <i class="fa-regular fa-clock"></i>${holdStored[i].date}
            </p>
        </div>
        <div class="imgcont12">
        <p>${storedBlogs[i].title}</p>
        </div>
           <div class="imgcont13">
    <i class="fa-solid fa-pen-to-square" id="${i}"></i>
    <i class="fa-solid fa-trash-can" id="${i}"></i>
            </div>
           </div>
             </div>
   `
}
    // for(let i = 0;i < holdStored.length;i++){

    //     divisionState++;
    //     localStorage.setItem('divisionState',divisionState);
    //     let icon = document.createElement("i");
    //     let trash = document.createElement("i");
    //     let para = document.createElement("p");
    //     icon.className = "fa-solid fa-pen-to-square";
    //     trash.className = "fa-solid fa-trash-can";
    //     trash.setAttribute("id",i);
    //     icon.setAttribute("id",i);
    //     icon.setAttribute("href","./editblog.html")
    //     manage_paragraph_state = manage_paragraph[i];
    //     para.innerHTML = holdStored[i].title;
    //     dateToday[i].innerHTML = `<i class="fa-regular fa-clock"></i>${holdStored[i].date}`;
    //     let imageManage = new Image();
    //     imageManage.src = holdStored[i].image;
    //     manage_image_state = manage_image[i];
    //     if(divisionState < 7){
    //     blogsDisplay[i].style.display = "flex";
    //     manage_image_state.appendChild(imageManage)
    //     manage_paragraph_state.appendChild(para);
    //     get_icondiv[i].appendChild(icon);
    //     get_icondiv[i].appendChild(trash);
    //     }
    // }
let popupMessagemanage = document.querySelector('.popupMessagemanage');
let confirmDelete = document.getElementById("delete");
let confirmcancel = document.getElementById("cancel");


let allblogs = document.querySelectorAll(".fa-trash-can");
for(let i = 0;i < allblogs.length;i++){
    allblogs[i].addEventListener('click',function(){
        popupMessagemanage.style.display = "flex";
        localStorage.setItem('deleteId',i);    
    });
}
confirmDelete.addEventListener('click',function(){
    popupMessagemanage.style.display = "";
    let id = allblogs[localStorage.getItem('deleteId')].getAttribute("id");
    holdStored.splice(id,1)
    localStorage.setItem('hold_blogs',JSON.stringify(holdStored));
    location.reload();
})
confirmcancel.addEventListener('click',function(){
    popupMessagemanage.style.display = "";
})
let alledit = document.querySelectorAll(".fa-pen-to-square");
for(let i = 0;i < alledit.length;i++){
    alledit[i].addEventListener('click',function(){
    let edit = alledit[i].getAttribute("id");
    localStorage.setItem('editId',edit);
    window.location.href = "editblog.html";
    });
}

function logout(){
    localStorage.setItem('logedIn',"")
}









