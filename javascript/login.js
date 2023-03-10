let emailCheck_login = document.getElementById("emailCheckLogin");
let emailError_login = document.getElementById("emailLogin_error");
let passcodeError_login = document.getElementById("errorPasscode_login");
let checkEmail_login = document.getElementById("checkEmail_login");
let xpasscode_login = document.getElementById("xpasscode_login");
var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let hold_logedin = localStorage.getItem('logedIn') || "";
let logedout = document.getElementById("logedout");
let logedin = document.getElementById("logedin");
let loginForm = document.getElementById("loginForm");

if(hold_logedin != ""){
    logedin.innerHTML = `<i class="fa-solid fa-user"></i>${hold_logedin}`;
}else{
    logedout.innerHTML = "login";
}
function alerted(){
    document.querySelector(".hide").style.display = "flex";
  }
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });

loginForm.addEventListener('submit', (event) =>{
 event.preventDefault();
let emailf_login = document.getElementById("emailf_login");
let passcode_login = document.getElementById("passcodef_login");
    let state = 0;
    if (emailf_login.value == "" && passcode_login.value == "") {
        emailError_login.innerHTML = "*fields can not be empty";
        emailf_login.style.border = "2px solid red"
        passcode_login.style.border = "2px solid red";
        return false;
    } else {
        if (regex.test(emailf_login.value)) {
            emailf_login.style.border = "2px solid green"
            emailError_login.innerHTML = "";
            passcode_login.style.border = "none";
            state = 10;
        } else {
            emailf_login.style.border = "2px solid red"
            emailError_login.innerHTML = "*please enter the valid email";
            passcodeError_login.innerHTML = "";
            passcode_login.style.border = "none";
            return false;
        }
          if (state == 10){
            if (passcode_login.value == "") {
                passcodeError_login.innerHTML = "*please enter the password";
                passcode_login.style.border = "2px solid red";
                return false;
            } 
        }
    }
    let data = {
        email: emailf_login.value,
        password: passcode_login.value
    };
    fetch('https://puce-helpful-xerus.cyclic.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(resp => {
        console.log(resp);
        if(resp.data){
         localStorage.setItem('token',resp.data.token);
         localStorage.setItem('logedIn',resp.data.username);
         localStorage.setItem('status',true);
        //  localStorage.setItem('status',JSON.stringify(resp.data.admin));
         location.href = 'https://my-brand-richard.netlify.app/html/addblog.html'
        }else{
            console.log(resp.message)
            emailf_login.style.border = "2px solid red"
            passcode_login.style.border = "2px solid red";
            emailError_login.innerHTML = resp.message
        };
        return resp; 
      })
      .catch(error => {
        console.error('Error:', error);
      }); 
})

let allHearts = document.querySelectorAll("#numberLikes");
let allHeartsicon = document.querySelectorAll(".fa-heart");
let object = {0:0,1:0,2:0,3:0,4:0,5:0,6:0};
let holdlikes = localStorage.getItem('holdlikes') || {};

for(let o = 0;o < allHearts.length;o++){
    allHeartsicon[o].addEventListener('click',function(){
        let l = JSON.parse(holdlikes);
        let like = l.o+1;
        object.o = like;
       localStorage.setItem('holdlikes',JSON.stringify(object));
       allHearts[o].innerHTML = 1;
       allHeartsicon[o].style.color = "gold";
    });
}













