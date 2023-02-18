let storedid = localStorage.getItem("readmore") || "";
let allStoredBlogs = JSON.parse(localStorage.getItem('hold_blogs'));
let getuser = localStorage.getItem("logedIn") || "";
let comment = document.getElementById("comment");
let commentButton = document.querySelector('.commentButton');
let commentDivision = document.querySelector('.contentThree');
let storedReadmore = JSON.parse(localStorage.getItem("readmore")) || [];
let readmore_title = document.getElementById("doit");
let readmoreDescription = document.getElementById("readmoreDescription");
let readmoreCont = document.querySelector('.contentOne');


let readmoreImage = new Image();
readmoreImage.src = allStoredBlogs[storedid].image;
readmoreCont.appendChild(readmoreImage);
readmoreDescription.innerHTML = allStoredBlogs[storedid].description;
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
  location.reload();}else{
    alert("please login");
  }
  });
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });