
const hamburger = document.querySelector(".Hambergur")
const nav_menu = document.getElementsByTagName("ul")[0];

hamburger.addEventListener('click',addActive);

function addActive(){

    hamburger.classList.toggle("active")
    nav_menu.classList.toggle("active")
}