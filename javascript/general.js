let command = document.getElementById("command");
let terminalResult = document.getElementById("terminal_result");
let responseNav = document.getElementById("responseNav");
let emailf_login = document.getElementById("emailf_login");
let passcode_login = document.getElementById("passcodef_login");
let emailCheck_login = document.getElementById("emailCheckLogin");
let emailError_login = document.getElementById("emailLogin_error");
let passcodeError_login = document.getElementById("errorPasscode_login");
let checkEmail_login = document.getElementById("checkEmail_login");
let xpasscode_login = document.getElementById("xpasscode_login");
var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let emailf_signup = document.getElementById("emailf_signup");
let usernamef_signup = document.getElementById("usernamef_signup");
let passcodef_signup = document.getElementById("passcodef_signup");
let confirmf_signup = document.getElementById("confirmf_signup");
let passcode_signup = document.getElementById("passcodef_signup");
let emailCheck_signup = document.getElementById("emailCheckLogin");
let errorEmail_signup = document.getElementById("errorEmail_signup");
let errorUsername_signup = document.getElementById("errorUsername_signup");
let errorPasscode_signup = document.getElementById("errorPasscode_signup");
let errorConfirm_login = document.getElementById("errorConfirm_login");
let checkEmail_signup = document.getElementById("checkEmail_signup");
let checkUsername_signup = document.getElementById("checkUsername_signup");
let checkPasscode_signup = document.getElementById("checkPasscode_signup");
let checkConfirm_signup = document.getElementById("checkConfirm_signup");
let emailf_contact = document.getElementById("emailf_contact");
let namesf_contact = document.getElementById("namesf_contact");
let textareaf_contact = document.getElementById("textareaf_contact");
let error_contact = document.getElementById("error_contact");
let signup_array = [];
let signup_object ={email:"",username:"",passcode:"",confirmp:""};
let login_object = {email:"",username:""};
let passcodeError_signup = document.getElementById("errorPasscode_signup");
let xpasscode_signup = document.getElementById("xpasscode_signup");
let popupMessage = document.querySelector('.popupMessage');
let popup = document.querySelector('.popup');
let contact_array = [],contact_object = {names:"",email:"",message:""};


function alerted(){
    document.querySelector(".hide").style.display = "flex";
  }
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    // console.log(loader);
    loader.className += " hidden";
  });
// =============================================================
//=========================== login=============================
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
// ============================end of blog=======================
// ==============================signup==========================
function checkSignup() {

    if (emailf_signup.value == "" && usernamef_signup.value == "" && passcodef_signup.value == "" && confirmf_signup.value == "") {
        emailf_signup.style.border = "2px solid red"
        usernamef_signup.style.border = "2px solid red";
        passcodef_signup.style.border = "2px solid red"
        confirmf_signup.style.border = "2px solid red";
        errorEmail_signup.innerHTML = "*please fill out the form";
        return false;
    } else {
        if (emailf_signup.value != "" && regex.test(emailf_signup.value)) {
            emailf_signup.style.border = "2px solid green"
            checkEmail_signup.style.display = "flex";
            errorEmail_signup.innerHTML = "";
        }
        else {
            emailf_signup.style.border = "2px solid red"
            errorEmail_signup.innerHTML = "*please enter the valid email";
            return false;
        }
        if (usernamef_signup.value != "") {
            usernamef_signup.style.border = "2px solid green"
            checkUsername_signup.style.display = "flex";
            errorUsername_signup.innerHTML = "";
        }
        else {
            usernamef_signup.style.border = "2px solid red"
            errorUsername_signup.innerHTML = "*please enter the valid username";
            return false;
        }
        if (passcodef_signup.value.length > 4) {
            passcodef_signup.style.border = "2px solid green";
            checkPasscode_signup.style.display = "flex";
            passcodeError_signup.innerHTML = "";
        }
        else {
            passcodef_signup.style.border = "2px solid red"
            passcodeError_signup.innerHTML = "*passcode must be greater then 8 characters";
            return false;
        }
        if (confirmf_signup.value != "") {
            if (confirmf_signup.value === passcodef_signup.value) {
                confirmf_signup.style.border = "2px solid green";
                checkConfirm_signup.style.display = "flex";
                errorConfirm_login.innerHTML = "";
            }
            else {
                confirmf_signup.style.border = "2px solid red"
                errorConfirm_login.innerHTML = "*password does not match";
                return false;
            }
        }
        else {
            confirmf_signup.style.border = "2px solid red"
            errorConfirm_login.innerHTML = "*please confirm the password";
            return false;
        }
    }
signup_object ={email: emailf_signup.value, 
                username: usernamef_signup.value,
                passcode: passcodef_signup.value,
                confirmp: confirmf_signup.value};
signup_array = JSON.parse(localStorage.getItem('signupFormdata')) || [];
let hold = signup_array.find(object => object.username === signup_object.username);
if(hold){
    errorEmail_signup.style.color = "green";
    errorEmail_signup.innerHTML = "The username is taken";
    return false;
}else{
signup_array.push(signup_object);
localStorage.setItem('signupFormdata',JSON.stringify(signup_array));
console.log(JSON.parse(localStorage.getItem('signupFormdata')));
}
emailf_signup.value = ""; 
usernamef_signup.value = "";
passcodef_signup.value = "";
confirmf_signup.value = "";
return true;
}
// ============================end of signup=====================
// ++++++++++++++++++++++++++login functions++++++++++++++++++++++++++++
// =================================conatct page========================
function chaeckContact(){

    if (emailf_contact.value == "" && namesf_contact.value == "" && textareaf_contact.value == "" ) {
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
                names:namesf_contact.value,
                email:emailf_contact.value,
                message:textareaf_contact
            }
            contact_array.push(contact_object);           
            // window.alert(contact_array);
            
            localStorage.setItem("messages",)
            popupMessage.style.display = "flex";
            emailf_contact.style.border = "2px solid green";
            namesf_contact.style.border = "2px solid green"
            textareaf_contact.style.border = "2px solid green";
            error_contact.style.color = "green";
            error_contact.innerHTML = "*message sent successful";
    }
    return true;
}
// =====================================================================