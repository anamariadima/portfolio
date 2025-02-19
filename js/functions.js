
function toggleMenu(event) {
    var menuContainer = document.getElementById("hamburger__menu");
    if (menuContainer.style.display === "block") {
        menuContainer.style.display = "none";
    } else {
        menuContainer.style.display = "block";
    }
}

function closeMenu() {
    var menuContainer = document.getElementById("hamburger__menu");
    menuContainer.style.display = "none";
}

window.onclick = (event) => {
    if(!event.target.matches ("menu-toggler")) {
        if(menu.classList.contains ("show")) {
            menu.classList.remove ("show")
        }
    }
}