var menu = document.querySelector(".menuUl")
var btnMenuOpen = document.querySelector(".btnMenuOpen");
var btnMenuClose = document.querySelector(".btnMenuClose");

btnMenuOpen.addEventListener("click",function(){
    menu.classList.add("menuOpen");
});

btnMenuClose.addEventListener("click",function(){
    menu.classList.remove("menuOpen");
});