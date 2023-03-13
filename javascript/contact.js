let emailf_contact = document.getElementById("emailf_contact");
let namesf_contact = document.getElementById("namesf_contact");
let textareaf_contact = document.getElementById("textareaf_contact");
let error_contact = document.getElementById("error_contact");
let login_object = {email:"",username:""};
let popupMessage = document.querySelector('.popupMessage');
let popup = document.querySelector('.popup');
let allBlogDisplay = document.querySelectorAll('.blogAll');
let displayImage1 = document.querySelectorAll('.blogOne');
let displayParagraph = document.querySelectorAll('.blogTwo');
let blogButtonAnchor = document.querySelectorAll('#openBlog');
let contactForm = document.getElementById('contactForm')
let contact_array = JSON.parse(localStorage.getItem('messages')) || [],contact_object = {names:"",email:"",message:""};

let currentDisplayImage,currentDisplayParagraph,blogId;
let blogContainer = document.querySelector(".blog_content");
let noblogs = document.querySelector('.noblogs');
let readmoreBtn = document.querySelector('.blog_button');
var buttonState ;

let storedBlogs = [];

// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });

// =================================conatct page========================
  contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (emailf_contact.value == "" || namesf_contact.value == "" || textareaf_contact.value == "" ) {
        emailf_contact.style.border = "2px solid red";
        namesf_contact.style.border = "2px solid red"
        textareaf_contact.style.border = "2px solid red";
        error_contact.innerHTML = "*please fill out the form";
        return false;
    }else if (emailf_contact.value != "" && namesf_contact.value != "" && textareaf_contact.value != "" ){
        setTimeout(function(){
            popupMessage.style.display = "none";
            emailf_contact.style.border = "none";
            namesf_contact.style.border = "none"
            textareaf_contact.style.border = "none";
            error_contact.innerHTML = "";
            emailf_contact.value = "";
            namesf_contact.value = "";
            textareaf_contact.value = "";
            },2000);
    let messageTosend = {
        names:namesf_contact.value,
        email:emailf_contact.value,
        message:textareaf_contact.value,
    }

    fetch('https://puce-helpful-xerus.cyclic.app/message/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageTosend)
      })
      .then( response => response.json())
      .then(resp =>{})
            popupMessage.style.display = "flex";
            emailf_contact.style.border = "2px solid green";
            namesf_contact.style.border = "2px solid green"
            textareaf_contact.style.border = "2px solid green";
            error_contact.style.color = "green";
            error_contact.innerHTML = "*message sent successful";
    }
    return false;
})
// =====================================================================

fetch('https://puce-helpful-xerus.cyclic.app/blogs')
.then(response => response.json())
.then(async (resp) =>{
    storedBlogs = await resp.data;
    localStorage.setItem('hold_blogs',JSON.stringify(storedBlogs))
    document.addEventListener('click',() =>{
        console.log("event");
    })
if(storedBlogs.length != 0){
    let iterate = storedBlogs.length -1;
    for(let i = 0; i < storedBlogs.length; i++){
    if(i < 3){
    let button = document.createElement("button");
    button.setAttribute("class", "addedButton")
    button.setAttribute("id", storedBlogs[iterate]._id)
    button.textContent = "Read More"
    let displayImage = new Image();
    currentDisplayImage = displayImage1[i];
    currentDisplayParagraph = displayParagraph[i];
    displayImage.src = storedBlogs[iterate].image;
    blogButtonAnchor[i].appendChild(button);
    currentDisplayImage.appendChild(displayImage);
    allBlogDisplay[i].style.display = "flex";
    currentDisplayParagraph.innerHTML = `<a href="./html/readmore.html">${storedBlogs[iterate].title}</a>`
    }
    iterate--;
    }
    let allBlogButton = document.querySelectorAll('.addedButton');
    for(let i = 0;i < allBlogButton.length;i++){
    allBlogButton[i].addEventListener('click',function(){
        let id = this.getAttribute("id");
        // location.href = `http://127.0.0.1:5501/html/readmore.html?id=${id}`
        location.href = `https://my-brand-richard.netlify.app/html/readmore.html?id=${id}`
    })
    }
    }else if(storedBlogs.length == 0){
             noblogs.style.display = "grid";
             readmoreBtn.style.display = "none";
        }
        return resp;
    })

function logMeout(){
localStorage.setItem('logedIn',"")
}
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function() {
  window.location.href = '#home';
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
// ======================================================social medias=====================================
function linkedin() {
    window.open('https://www.linkedin.com/in/ishimwe-richard-40175a24a/', '_blank');
    // window.alert("linledin is clicked");
}
function github() {
    window.open('https://github.com/rich26638', '_blank');
}
// ===================================================end of socialmedia===================================