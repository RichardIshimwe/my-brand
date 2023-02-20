let storedid = localStorage.getItem("readmore") || "";
let allStoredBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];
let getuser = localStorage.getItem("logedIn") || "";
let comment = document.getElementById("comment");
let commentButton = document.querySelector('.commentButton');
let commentDivision = document.querySelector('.contentThree');
let storedReadmore = JSON.parse(localStorage.getItem("readmore")) || [];
let readmore_title = document.getElementById("doit");
let readmoreDescription = document.getElementById("readmoreDescription");
let readmoreCont = document.querySelector('.contentOne');
let setTime = document.getElementById("setTime");


let readmoreImage = new Image();
readmoreImage.src = allStoredBlogs[storedid].image;
readmoreCont.appendChild(readmoreImage);
readmoreDescription.innerHTML = allStoredBlogs[storedid].description;
setTime.innerHTML = `<i class="fa-regular fa-clock"></i>${allStoredBlogs[storedid].date}`;
console.log(allStoredBlogs[storedid].date)
readmore_title.innerHTML = allStoredBlogs[storedid].title;
let allComments = allStoredBlogs[storedid].comments || [];

for(let z = 0; z < allComments.length ;z++){
  let addComment = document.createElement("div");
  addComment.setAttribute("class", "readmoreComments");
  let header = document.createElement("h2");
  header.setAttribute("class", "commenterName");
  header.innerHTML = allComments[z].commenter;
  addComment.appendChild(header);
  let commentParagraph = document.createElement("p");
  commentParagraph.setAttribute("class", "commenterContent");
  commentParagraph.innerHTML = allComments[z].comment;
  addComment.appendChild(commentParagraph);
  commentDivision.appendChild(addComment);
}

commentButton.addEventListener('click',function(){
  if(getuser != ""){
  about={
    commenter:getuser,
    comment:comment.value
  };
  allStoredBlogs[storedid].comments.push(about);
  localStorage.setItem('hold_blogs', JSON.stringify(allStoredBlogs));
  location.reload();
}else{
    alert("please login");
  }
  });





let paragraph = document.querySelectorAll('#p');
let dates = document.querySelectorAll('#date');
let allButton = document.querySelectorAll('#button');
let imageTodisplay = document.querySelectorAll('.imagef');
let imageDivision = document.querySelectorAll('#listRecentblogs');
console.log(imageDivision.length);
for(let i = 0;i < allStoredBlogs.length;i++){
  let btn = document.createElement("button");
  let imagetodisplay = new Image();
  btn.textContent = "read more";
  if(i<3){
    imagetodisplay.src = allStoredBlogs[i].image;
    imageTodisplay[i].appendChild(imagetodisplay);
    btn.setAttribute("class","readbtns");
    btn.setAttribute("id",i);
    dates[i].innerHTML = allStoredBlogs[i].date;
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
})
}











// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });