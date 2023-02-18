// let hideAllblogs = document.querySelectorAll('.hideAllblogs');
// let blogImage = document.querySelectorAll('.content_s');
// let blogimage = document.querySelectorAll('.contents');
// console.log(blogimage.length)
// console.log(hideAllblogs.length);


// let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs'));
// console.log(storedBlogs[1].image);

// for(let i = 0;i < storedBlogs.length;i++){
//  let image = new Image();
//  image.src = storedBlogs[i].image;
//  if(i < 3){
//  blogimage[i].appendChild(image);
//  }else if(i > 3){
//   // blogimage[i].appendChild(image)
//   // blogimage[i].style.color
// }

//   // hideAllblogs[i].style.display = "none";
// }
// ========================================pre-loader===========
let allBlogs = document.querySelectorAll('#readBlog');
let paragraph = document.querySelectorAll('#pcon');
let allStoredblogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
let button = document.querySelectorAll('#readMorebtn');
console.log(button.length);
console.log(allStoredblogs);
 
let imageContainer = document.querySelectorAll('#readImage');
console.log(imageContainer.length);
for(let i = 0; i < allStoredblogs.length;i++){
  let btn = document.createElement("button");
  btn.setAttribute("id", i);
  btn.setAttribute("class", "readMorebtn");
  btn.textContent = "read more";
  button[i].appendChild(btn)
  let imageHolder = allStoredblogs[i].image;
  paragraph[i].innerHTML = allStoredblogs[i].title;
  console.log(imageHolder)
  let image = new Image();
  image.src = imageHolder;
  imageContainer[i].appendChild(image);
  allBlogs[i].style.display = "flex";
}
let selectAllbutton = document.querySelectorAll('.readMorebtn');
for(let j = 0; j<selectAllbutton.length ; j++){
  selectAllbutton[j].addEventListener('click',function(){
      let id = selectAllbutton[j].getAttribute('id');
      localStorage.setItem('readmore',id);
  });
}










window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });