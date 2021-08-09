let btn_menu = document.querySelector(".btn__menu");
let navbar = document.querySelector(".navbar");

btn_menu.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
});