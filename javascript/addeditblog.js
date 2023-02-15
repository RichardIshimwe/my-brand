let add_title = document.getElementById("add_title");
let add_textarea = document.getElementById("add_textarea");
let add_image = document.getElementById("add_image");
let error_addblog = document.getElementById("errorAdd_title");

let dispalyBlog_array = [];
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });
// ==================================blog number==========================================
let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];

function addblog() {
    if (add_title.value == "" && add_textarea.value == "") {
        add_title.style.border = "2px solid red"
        add_textarea.style.border = "2px solid red";
        error_addblog.innerHTML = "*fields can not be empty";
        return false;
    } else {
        if (add_title.value != "") {
            add_title.style.border = "2px solid green"
            error_addblog.innerHTML = "";
        }
        else {
            add_title.style.border = "2px solid red"
            error_addblog.innerHTML = "";
            return false;
        }
        if (add_textarea.value.length > 5) {
            add_textarea.style.border = "2px solid green"
            error_addblog.innerHTML = "";
        }
        if (add_textarea.value.length < 5) {
            add_textarea.style.border = "2px solid red"
            error_addblog.innerHTML = "*blog description must have more than 40 character";
            return false;
        }
    }
    addImage_holder = localStorage.getItem('image');
    blogs = {
        title: add_title.value,
        description: add_textarea.value,
        image: addImage_holder
        };
    hold_blogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];//find a way to concantinate dummy content in local storage
    hold_blogs.unshift(blogs);
    localStorage.setItem('hold_blogs',JSON.stringify(hold_blogs));
    add_title.value = "";
    add_textarea.value = "";
    return true;
}

function edit() {
    window.location.href = 'editblog.html';
}
// ======================================================social medias=====================================
function linkedin() {
    window.open('https://www.linkedin.com/in/ishimwe-richard-40175a24a/', '_blank');
    // window.alert("linledin is clicked");
}
function github() {
    window.open('https://github.com/rich26638', '_blank');
}
// ===================================================end of socialmedia===================================