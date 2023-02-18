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
let contact_array = JSON.parse(localStorage.getItem('messages')) || [],contact_object = {names:"",email:"",message:""};

let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];

// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });
// =================================conatct page========================
function chaeckContact(){

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
            contact_object = {
                0:namesf_contact.value,
                1:emailf_contact.value,
                2:textareaf_contact.value
            }
            contact_array.unshift(contact_object);    
            localStorage.setItem("messages",JSON.stringify(contact_array));
            popupMessage.style.display = "flex";
            emailf_contact.style.border = "2px solid green";
            namesf_contact.style.border = "2px solid green"
            textareaf_contact.style.border = "2px solid green";
            error_contact.style.color = "green";
            error_contact.innerHTML = "*message sent successful";
    }
    return false;
}
// =====================================================================
let currentDisplayImage,currentDisplayParagraph,blogId;
// for(let i = 0;i < displayImage1.length;i++){
for(let i = 0; i < storedBlogs.length; i++){
let button = document.createElement("button");
button.setAttribute("class", "addedButton")
button.setAttribute("id", i)
button.textContent = "Read More"
let displayImage = new Image();
currentDisplayImage = displayImage1[i];
currentDisplayParagraph = displayParagraph[i];
displayImage.src = storedBlogs[i].image;
blogButtonAnchor[i].appendChild(button)
currentDisplayImage.appendChild(displayImage);
allBlogDisplay[i].style.display = "flex";
currentDisplayParagraph.innerHTML = `<a href="./html/readmore.html">${storedBlogs[i].title}</a>`
}
let allBlogButton = document.querySelectorAll('.addedButton');
for(let i = 0;i < allBlogButton.length;i++){
allBlogButton[i].addEventListener('click',function(){
    let id = this.getAttribute("id");
    localStorage.setItem('readmore', id);
})
}
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