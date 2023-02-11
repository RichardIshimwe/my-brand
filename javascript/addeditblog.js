let add_title = document.getElementById("add_title");
let add_textarea = document.getElementById("add_textarea");
let add_image = document.getElementById("add_image");
let error_addblog = document.getElementById("errorAdd_title");
let hold_blogs = [];
let blogs = {
    title: "",
    description: "",
    image: ""
};
let addImage_holder;
// let add_image = document.getElementById("")


add_image.addEventListener('change', function () {
    let imageHolder = new FileReader();
    imageHolder.readAsDataURL(add_image.files[0]);

    imageHolder.addEventListener('load', () => {
        const url = imageHolder.result;
        // addImage_array.push(url);
        // console.log(arrays)
        localStorage.setItem('image', url);
    })
});


// ===========================end of login=======================
// +++++++++++++++++++++++++++add blog+++++++++++++++++++++++++++
function addblog() {

    if (add_title.value == "" && add_textarea.value == "") {
        add_title.style.border = "2px solid red"
        add_textarea.style.border = "2px solid red";
        error_addblog.innerHTML = "*fields can not be empty";
        return false;
    } else {
        if (add_title.value != "") {
            add_title.style.border = "2px solid green"
            error_addblog.innerHTML = "";
        }
        else {
            add_title.style.border = "2px solid red"
            error_addblog.innerHTML = "";
            return false;
        }
        if (add_textarea.value.length > 5) {
            add_textarea.style.border = "2px solid green"
            error_addblog.innerHTML = "";
        }
        if (add_textarea.value.length < 5) {
            add_textarea.style.border = "2px solid red"
            error_addblog.innerHTML = "*blog description must have more than 40 character";
            return false;
        }
    }
    addImage_holder = localStorage.getItem('image');
    blogs = {
        title: add_title.value,
        description: add_textarea.value,
        image: addImage_holder
        };
    console.log(blogs);
    hold_blogs = JSON.parse(localStorage.getItem('hold_blogs'));//find a way to concantinate dummy content in local storage
    hold_blogs.unshift(blogs);
    console.log(hold_blogs);
    localStorage.setItem('hold_blogs',JSON.stringify(hold_blogs));
    return false;
}

function edit() {
    // let edit = document.getElementById("edit_click");
    window.location.href = 'editblog.html';
}
// ======================================================social medias=====================================
function linkedin() {
    window.open('https://www.linkedin.com/in/ishimwe-richard-40175a24a/', '_blank');
    // window.alert("linledin is clicked");
}
function github() {
    window.open('https://github.com/rich26638', '_blank');
}
// ===================================================end of socialmedia===================================











