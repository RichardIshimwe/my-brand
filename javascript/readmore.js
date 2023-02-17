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
// console.log(allStoredBlogs[storedid].comments.comment)
let allComments = allStoredBlogs[storedid].comments || [];

// console.log(allStoredBlogs[storedid].comments[storedid].commenter);
console.log(allComments)

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

// let item = "heloooo";
// let comments = storedReadmore.comments
// console.log(allStoredBlogs[0])
// allStoredBlogs[0].comments.push(item);
// console.log(allStoredBlogs);



// console.log("this is comment"+storedReadmore.comments.commenter); 

commentButton.addEventListener('click',function(){
  // let comments = allStoredBlogs[storedid].comments || [];
  // let about = {commenter:"",comment:""};
  // let addComment = document.createElement("div");
  // addComment.setAttribute("class", "readmoreComments");
  // let header = document.createElement("h2");
  // header.setAttribute("class", "commenterName");
  // header.innerHTML = getuser;
  // addComment.appendChild(header);
  // let commentParagraph = document.createElement("p");
  // commentParagraph.setAttribute("class", "commenterContent");
  // commentParagraph.innerHTML = comment.value;
  // addComment.appendChild(commentParagraph);
  // commentDivision.appendChild(addComment);
  if(getuser != ""){
  about={
    commenter:getuser,
    comment:comment.value
  };
  allStoredBlogs[storedid].comments.push(about);
  console.log(allStoredBlogs[storedid].comments);
  localStorage.setItem('hold_blogs', JSON.stringify(allStoredBlogs));
  location.reload();}else{
    alert("please login");
  }
  // console.log(about);
  // console.log(allStoredBlogs[storedid].comments);
  // console.log(storedid)
  });
// ========================================pre-loader===========
window.addEventListener('load',function(){
    let loader = document.querySelector('.holder_wave');
    loader.className += " hidden";
  });



// let storedReadmore = JSON.parse(localStorage.getItem("readmore")) || [];
// let readmore_title = document.getElementById("doit");
// let readmoreDescription = document.getElementById("readmoreDescription");
// let readmoreCont = document.querySelector('.contentOne');

// let readmoreImage = new Image();
// readmoreImage.src = storedReadmore.image;
// readmoreCont.appendChild(readmoreImage);
// readmoreDescription.innerHTML = storedReadmore.description;
// readmore_title.innerHTML = storedReadmore.title;
// console.log(storedReadmore);
// // ========================================pre-loader===========
// window.addEventListener('load',function(){
//     let loader = document.querySelector('.holder_wave');
//     loader.className += " hidden";
//   });