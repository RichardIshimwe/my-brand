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
let passcodeError_signup = document.getElementById("errorPasscode_signup");
let signup_array = [];
let signup_object ={email:"",username:"",passcode:"",confirmp:""};

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


