var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
var footersMenu = document.querySelector(".footers-menu");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}
function footersMenuToggle(){
    footersMenu.classList.toggle("footers-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}