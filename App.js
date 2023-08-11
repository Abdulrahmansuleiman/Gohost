

// preloader effect
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";  
})


//menudrop down

var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function menuToggle() {
    if (menuItems.style.maxHeight =="0px") {
        menuItems.style.maxHeight = "400px";
    }
    
     else{
        menuItems.style.maxHeight = "0px";
     }
}

// slider images

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next(){
    slides[index].classList.remove("active");
    index = (index + 1)%slides.length;
    slides[index].classList.add("active");
}

function prev(){
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length)%slides.length;
    slides[index].classList.add("active");
}
setInterval(next, 6000);