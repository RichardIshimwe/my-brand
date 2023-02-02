
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

window.onscroll = function() {
  console.log(document.body.scrollTop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function() {
  window.location.href = '#home';
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

let redirect = () =>{
  window.location.href = '../html/dashboard.html';
}


