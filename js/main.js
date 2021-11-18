/** @format */

var mybutton = document.getElementById("myBtn");

function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
