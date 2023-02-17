let hideAllblogs = document.querySelectorAll('.hideAllblogs');
let blogImage = document.querySelectorAll('.content_s');
let blogimage = document.querySelectorAll('.contents');
console.log(blogimage.length)
console.log(hideAllblogs.length);


let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs'));
console.log(storedBlogs[1].image);

for(let i = 0;i < storedBlogs.length;i++){
 let image = new Image();
 image.src = storedBlogs[i].image;
 if(i < 3){
 blogimage[i].appendChild(image);
 }else if(i > 3){
  // blogimage[i].appendChild(image)
  // blogimage[i].style.color
}

  // hideAllblogs[i].style.display = "none";
}
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });