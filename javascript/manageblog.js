let manage_paragraph = document.querySelectorAll('.imgcont12');
let manage_image = document.querySelectorAll('.imgcont');
let blogsDisplay = document.querySelectorAll('.manage');
let divisionState = 0;
let dispalyBlog_array = [];

// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });
// ==================================blog number===========================================
let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
// ==================================manage blog===========================================
//   function manageBlog(){
    let manage_image_state,manage_paragraph_state;
    let get_icondiv = document.querySelectorAll('.imgcont13');

    for(let i = 0;i < storedBlogs.length;i++){
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
        para.innerHTML = storedBlogs[i].title;
        let imageManage = new Image();
        imageManage.src = storedBlogs[i].image;
        manage_image_state = manage_image[i];
        if(divisionState < 7){
        blogsDisplay[i].style.display = "flex";
        manage_image_state.appendChild(imageManage)
        manage_paragraph_state.appendChild(para);
        get_icondiv[i].appendChild(icon);
        get_icondiv[i].appendChild(trash);
            }
    }
//   }
let allblogs = document.querySelectorAll(".fa-trash-can");
for(let i = 0;i < allblogs.length;i++){
    allblogs[i].addEventListener('click',function(){
        let id = allblogs[i].getAttribute("id");
        console.log(id);
        console.log(i)
        storedBlogs.splice(id,1)
        localStorage.setItem('hold_blogs',JSON.stringify(storedBlogs));
        location.reload();
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











