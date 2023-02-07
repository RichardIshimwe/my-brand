// window.alert("this is general javascript");
// let title = document.getElementById("edit_title");
let terminal = document.getElementById("home_terminal");
let closed = document.querySelector(".fa-xmark");
let command = document.getElementById("command");
let terminalResult = document.getElementById("terminal_result");
let responseNav = document.getElementById("responseNav");
let email_login = document.getElementById("form_input");
let passcode_login = document.getElementById("login_passcode");
let emailCheck_login = document.getElementById("emailCheckLogin");

//=========================== login=============================
function checkLogin(){
emailCheck_login.style.display = "block";
    // window.alert("button clicked");
    return false;
}
// ===========================end of login=======================

// +++++++++++++++++++++++++++validate email++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++signup+++++++++++++++++++++++++++++++++++
let signup = () => {
    let email_signup = document.getElementById("signup_email");
    let username_signup = document.getElementById("signup_username");
    let pass_signup = document.getElementById("signup_pass");
    let cpass_signup = document.getElementById("signup_cpass");

    if (email_signup.value == "" && username_signup.value == "" && pass_signup.value == "" && cpass_signup.value == "") {
        responseNav.innerHTML = "*please fill out the form";
    }
    // else if (email_signup.value != "") {
    //     if (email_signup.value == "email") {
    //         email_signup.style.border = "2px solid green";
    //     } else {
    //         responseNav.innerHTML = "*provided email is incorect";
    //         email_signup.style.border = "2px solid red";
    //     }
    // }
    else if (username_signup.value != "") {
        if (username_signup.value == "email") {
            username_signup.style.border = "2px solid green";
        } else {
            responseNav.innerHTML = "*please enter the username";
            username_signup.style.border = "2px solid red";
        }
    }


    //    if(email_signup.value == "" && username_signup.value == "" && pass_signup.value=="" && cpass_signup.value == ""){
    //         responseNav.innerHTML = "*please fill out the form";
    //         // email_signup.style.border = "2px solid red";
    //         // username_signup.style.border = "2px solid red";
    //         // pass_signup.style.border = "2px solid red";
    //         // cpass_signup.style.border = "2px solid red";
    //    }
    //    else if(email_signup.value != ""){
    //    if(validateEmail(email_signup.value) == false){
    //     email_signup.style.border = "2px solid green";
    //    }else{
    //     email_signup.style.border = "2px solid red";
    //    }
    // }
}
// ++++++++++++++++++++++++++login functions++++++++++++++++++++++++++++
let login = () => {
    if (email_login.value != "") {
        window.location.href = './html/dashboard.html';
    }else {
        window.alert("please enter something")
    }

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
closed.addEventListener('click', () => {
    document.querySelector(".terminal").style.display = "none";
    document.querySelector(".home_profile").style.display = "flex";
})


terminal.addEventListener('click', () => {

    document.querySelector(".terminal").style.display = "block";
    document.querySelector(".home_profile").style.display = "none";

})


function edit() {
    let edit = document.getElementById("edit_click");
    window.location.href = 'editblog.html';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && command.value != "") {
        if (command.value === "login") {
            window.location.href = '#login';
            terminalResult.innerHTML = "";
        }
        else if (command.value === "help") {
            terminalResult.innerHTML = "terminal is underconstruction";
        }

        else {
            terminalResult.innerHTML = "invalid command try -help- command";
        }
        command.value = "";
    }
});
// ====================================validation========================================











