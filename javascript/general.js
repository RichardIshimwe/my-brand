// window.alert("this is general javascript");
// let title = document.getElementById("edit_title");
let terminal = document.getElementById("home_terminal");
let closed = document.querySelector(".fa-xmark");
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

document.getElementById("edit_title").value = 'Node mcu Lol1n v3 details.';
document.getElementById("edit_textarea").value = 'Every device that is going to be invented need to pass in almost every  stage of production needed in industrial zone for the producrtion process so asto make the perfect product  perfect product the following are needed the design ,coding and manufacturing process for it to be used as a final product.This was an agricultural based project implemented using hardware and software.'

function edit(){
let edit = document.getElementById("edit_click");
window.location.href = 'editblog.html';
}
