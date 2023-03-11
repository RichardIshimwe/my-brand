// let storedid = localStorage.getItem("readmore") || "";
let allStoredBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
let getuser = localStorage.getItem("logedIn") || "";
let token = localStorage.getItem("token") || "";
// let comment = document.getElementById("comment");
let commentButton = document.querySelector('.commentButton');
let commentDivision = document.querySelector('.contentThree');
// let storedReadmore = 0;
// // let storedReadmore = JSON.parse(localStorage.getItem("readmore")) || [];
let readmore_title = document.getElementById("doit");
// let readmoreDescription = document.getElementById("readmoreDescription");
let readmoreCont = document.querySelector('.contentOne');
// let setTime = document.getElementById("setTime");
// let author = document.getElementById("author");
let paramsId = new URLSearchParams(window.location.search);
let _id = paramsId.get("id");
let readmoreImage = new Image();
fetch(`https://puce-helpful-xerus.cyclic.app/blogs/${_id}`)
.then(response => response.json())
.then(async (resp) =>{
    let allStoredBlogs = await resp.data;
    const date = new Date(allStoredBlogs.createdAt);
    const blogDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
readmoreImage.src = allStoredBlogs.image;
readmoreCont.appendChild(readmoreImage);
readmoreDescription.innerHTML = allStoredBlogs.description;
author.innerHTML = allStoredBlogs.author;
setTime.innerHTML = `<i class="fa-regular fa-clock"></i>${blogDate}`;
readmore_title.innerHTML = allStoredBlogs.title;
let comments = allStoredBlogs.comments;
for(let z = 0; z < comments.length ;z++){
  let addComment = document.createElement("div");
  addComment.setAttribute("class", "readmoreComments");
  let header = document.createElement("h2");
  header.setAttribute("class", "commenterName");
  header.innerHTML = comments[z].name;
  addComment.appendChild(header);
  let commentParagraph = document.createElement("p");
  commentParagraph.setAttribute("class", "commenterContent");
  commentParagraph.innerHTML = comments[z].comment;
  addComment.appendChild(commentParagraph);
  commentDivision.appendChild(addComment);
}
})

commentButton.addEventListener('click',function(){
  let blogComment ={
    token:token,
    comment:comment.value
  };
  if(token != ""){
    if(comment.value != ""){
    fetch(`https://puce-helpful-xerus.cyclic.app/comment/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogComment)
    })
    .then( response => response.json())
    .then(resp =>{location.reload();});
  }else{comment.style.border = "2px solid red"}
}else{
    alert("please login");
  }
  });

let paragraph = document.querySelectorAll('#p');
let dates = document.querySelectorAll('#date');
let allButton = document.querySelectorAll('#button');
let imageTodisplay = document.querySelectorAll('.imagef');
let imageDivision = document.querySelectorAll('#listRecentblogs');
for(let i = 0;i < allStoredBlogs.length;i++){
  let btn = document.createElement("button");
  let imagetodisplay = new Image();
  btn.textContent = "read more";
  if(i<3){
    const date = new Date(allStoredBlogs[i].createdAt);
    const blogDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    imagetodisplay.src = allStoredBlogs[i].image;
    imageTodisplay[i].appendChild(imagetodisplay);
    btn.setAttribute("class","readbtns");
    btn.setAttribute("id", allStoredBlogs[i]._id);
    dates[i].innerHTML = blogDate;
    paragraph[i].innerHTML = allStoredBlogs[i].title;
    allButton[i].appendChild(btn);
    imageDivision[i].style.display = "grid";
  }
}

let readMoreadded = document.querySelectorAll('.readbtns');
for(let i = 0;i < readMoreadded.length;i++){
  readMoreadded[i].addEventListener('click',function(){
    let id = this.getAttribute("id");
    localStorage.setItem('readmore', id);
    location.reload();
    location.href = `https://my-brand-richard.netlify.app/html/readmore.html?id=${id}`
    // location.href = `http://127.0.0.1:5501/html/readmore.html?id=${id}`
})
}

// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });