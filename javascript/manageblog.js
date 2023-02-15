let manage_paragraph = document.querySelectorAll('.imgcont12')
let manage_image = document.querySelectorAll('.imgcont');
let blogsDisplay = document.querySelectorAll('.manage');

let dispalyBlog_array = [];
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });
// ==================================blog number==========================================
let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
// ==================================manage blog===========================================
//   function manageBlog(){
    let manage_image_state,manage_paragraph_state;
    let get_icondiv = document.querySelectorAll('.imgcont13');

    for(let i = 0;i < storedBlogs.length;i++){
        let icon = document.createElement("i");
        let trash = document.createElement("i");
        let para = document.createElement("p");
        icon.className = "fa-solid fa-pen-to-square";
        trash.className = "fa-solid fa-trash-can";
        trash.setAttribute("id",i);
        icon.setAttribute("id",i);
        manage_paragraph_state = manage_paragraph[i];
        para.innerHTML = storedBlogs[i].title;
        let imageManage = new Image();
        imageManage.src = storedBlogs[i].image;
        manage_image_state = manage_image[i];
        blogsDisplay[i].style.display = "flex";
        manage_image_state.appendChild(imageManage)
        manage_paragraph_state.appendChild(para);
        get_icondiv[i].appendChild(icon);
        get_icondiv[i].appendChild(trash);
    }
// }

let allblogs = document.querySelectorAll(".fa-trash-can");
console.log(allblogs.length)

