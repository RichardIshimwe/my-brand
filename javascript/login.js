let emailf_login = document.getElementById("emailf_login");
let passcode_login = document.getElementById("passcodef_login");
let emailCheck_login = document.getElementById("emailCheckLogin");
let emailError_login = document.getElementById("emailLogin_error");
let passcodeError_login = document.getElementById("errorPasscode_login");
let checkEmail_login = document.getElementById("checkEmail_login");
let xpasscode_login = document.getElementById("xpasscode_login");
var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function alerted(){
    document.querySelector(".hide").style.display = "flex";
  }
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    // console.log(loader);
    loader.className += " hidden";
  });

function checkLogin() {
    let state = 0;
    if (emailf_login.value == "" && passcode_login.value == "") {
        emailError_login.innerHTML = "*fields can not be empty";
        emailf_login.style.border = "2px solid red"
        passcode_login.style.border = "2px solid red";
        return false;
    } else {
        if (regex.test(emailf_login.value)) {
            emailf_login.style.border = "2px solid green"
            checkEmail_login.style.display = "block";
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
login_object = {
    email: emailf_login.value,
    passcode: passcode_login.value
};
signup_array = JSON.parse(localStorage.getItem('signupFormdata')) || [];
let logedIn = {};
console.log(signup_array)
let checkmail =signup_array.find(obj => obj.email === login_object.email)
let hold = signup_array.find(object => object.email === login_object.email && object.passcode === login_object.passcode);
if(hold){
    console.log(hold.username);
    localStorage.setItem('logedIn',hold.username);
    emailf_login.value ="";
    passcode_login.value ="";
    return true;
}
else{
    if(checkmail){
        passcode_login.style.border = "none";
        checkEmail_login.style.display = "none";
        emailError_login.innerHTML = "";
        emailf_login.border = "none";
        passcodeError_login.innerHTML = "";
        emailError_login.innerHTML = "*incorrect email or password";
    }else{
    passcode_login.style.border = "none";
    checkEmail_login.style.display = "none";
    emailError_login.innerHTML = "";
    emailf_login.border = "none";
    passcodeError_login.innerHTML = "";
    emailError_login.innerHTML = "*do a signup with the below link";
}}
   return false;
}