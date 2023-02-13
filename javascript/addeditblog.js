let add_title = document.getElementById("add_title");
let add_textarea = document.getElementById("add_textarea");
let add_image = document.getElementById("add_image");
let error_addblog = document.getElementById("errorAdd_title");
let blog_text1 = document.getElementById("blog_text1");

let manage_paragraph = document.querySelectorAll('.imgcont12')
let manage_image = document.querySelectorAll('.imgcont');
let blogNumber = document.getElementById("blogNumber");
let displayImage1 = document.querySelectorAll('.blogOne');
let displayParagraph = document.querySelectorAll('.blogTwo')
let dispalyBlog_array = [];

// ==================================manage blog===========================================
  function manageBlog(){
    let manageblog = JSON.parse(localStorage.getItem('hold_blogs'));
    // for(let i = 0;i < manage_image.length;i++){
    let manage_image_state,manage_paragraph_state;
    for(let i = 0;i < manageblog.length;i++){
        // window.alert(i)
        let para = document.createElement("p");
        manage_paragraph_state = manage_paragraph[i];
        para.innerHTML = manageblog[i].title;
        manage_paragraph_state.appendChild(para);
        let imageManage = new Image();
        imageManage.src = manageblog[i].image;
        manage_image_state = manage_image[i];
        manage_image_state.appendChild(imageManage)
    }
    // window.alert(manageblog);
    // window.alert("manage blog")
  }
// ========================================================================================

// =====================add blog whenever the new blog is appended==========================
function displayBlogs(){
dispalyBlog_array = JSON.parse(localStorage.getItem('hold_blogs'));
// window.alert(dispalyBlog_array)
console.log("these are the blogs")
let currentDisplayImage,currentDisplayParagraph;
console.log("this is the length of selector"+displayImage1.length)
for(let i = 0;i < displayImage1.length;i++){
    let displayImage = new Image();
    // let holdParagraph = ``
    currentDisplayImage = displayImage1[i];
    currentDisplayParagraph = displayParagraph[i];
    displayImage.src = dispalyBlog_array[i].image;
    currentDisplayImage.appendChild(displayImage);
    currentDisplayParagraph.innerHTML = `<a href="./html/readmore.html">${dispalyBlog_array[i].title}</a>`
}
}

function updateBlog(){
    window.alert("i am here")
    document.getElementById("blogNumber").innerHTML = 6;
}

function displayBlogsa(){
    displayImage.src = dispalyBlog_array[0].image;
    currentDisplayImage = displayImage1[0];
    currentDisplayImage.appendChild(displayImage);
    displayImage.src = dispalyBlog_array[1].image;
    currentDisplayImage = displayImage1[1];
    currentDisplayImage.appendChild(displayImage);
    dispalyBlog_array = JSON.parse(localStorage.getItem('hold_blogs'));
    console.log("these are the blogs")
    console.log(dispalyBlog_array[0].title);
    const displayImage = new Image();
    let i = 1;
    let divisionValue = displayImage[i];
    // for(let i = 0;i < 1;i++){
    displayImage.src = dispalyBlog_array[0].image;
    console.log("this is the value"+divisionValue)
    displayImage1.appendChild(displayImage);
    console.log(displayImage)
    blog_text1.innerHTML = `<a href="./html/readmore.html">${dispalyBlog_array[i].title}</a>`;
    // }
    }

// =========================================end=============================================



let hold_blogs = [];
let blogs = {
    title: "",
    description: "",
    image: ""
};
let addImage_holder;
add_image.addEventListener('change', function () {
    let imageHolder = new FileReader();
    imageHolder.readAsDataURL(add_image.files[0]);

    imageHolder.addEventListener('load', () => {
        const url = imageHolder.result;
        // addImage_array.push(url);
        // console.log(arrays)
        localStorage.setItem('image', url);
    })
});
// ===========================end of login=======================
// +++++++++++++++++++++++++++add blog+++++++++++++++++++++++++++
function addblog() {
//  window.alert("add blog button clicked");
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
if(JSON.parse(localStorage.getItem('hold_blogs')) != null){
console.log("there is blogs inside");
hold_blogs = JSON.parse(localStorage.getItem('hold_blogs'));//find a way to concantinate dummy content in local storage
hold_blogs.unshift(blogs);
localStorage.setItem('hold_blogs',JSON.stringify(hold_blogs));
}else{
    console.log("there is nothing inside the blog");
    hold_blogs.unshift(blogs);
    localStorage.setItem('hold_blogs',JSON.stringify(hold_blogs));
}  
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
// ===========================================display blogs================================================



// =========================================end of display blogs===========================================










