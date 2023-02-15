let storedReadmore = JSON.parse(localStorage.getItem("readmore")) || [];
let readmore_title = document.getElementById("doit");
let readmoreDescription = document.getElementById("readmoreDescription");
let readmoreCont = document.querySelector('.contentOne');

let readmoreImage = new Image();
readmoreImage.src = storedReadmore.image;
readmoreCont.appendChild(readmoreImage);
readmoreDescription.innerHTML = storedReadmore.description;
readmore_title.innerHTML = storedReadmore.title;
console.log(storedReadmore);
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });