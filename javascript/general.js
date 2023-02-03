// window.alert("this is general javascript");
// let title = document.getElementById("edit_title");
let terminal = document.getElementById("home_terminal");
let closed = document.querySelector(".fa-xmark");
let command = document.getElementById("command");
let terminalResult = document.getElementById("terminal_result");

// ======================================================social medias=====================================
function linkedin(){
    window.open('https://www.linkedin.com/in/ishimwe-richard-40175a24a/','_blank');
    // window.alert("linledin is clicked");
}
function github(){
    window.open('https://github.com/rich26638','_blank');
}
// ===================================================end of socialmedia===================================
closed.addEventListener('click', () =>{
    document.querySelector(".terminal").style.display = "none";
    document.querySelector(".home_profile").style.display = "flex";
})


terminal.addEventListener('click',() =>{

document.querySelector(".terminal").style.display = "block";
document.querySelector(".home_profile").style.display = "none";

})


function edit(){
let edit = document.getElementById("edit_click");
window.location.href = 'editblog.html';
}

document.addEventListener('keydown',function(event){
    if(event.key === 'Enter' && command.value != ""){
        if(command.value === "login"){
            window.location.href = '#login';
            terminalResult.innerHTML = "";
        }
        else if(command.value === "help"){
            terminalResult.innerHTML = "terminal is underconstruction";
        }
        
        else{
            terminalResult.innerHTML = "invalid command try -help- command";
        }
        command.value = "";
    }
});








