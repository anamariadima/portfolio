
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
    if(event.target.className !== "menu-icon" && event.target.className !== "menu-toggler") {
        var menuContainer = document.getElementById("hamburger__menu");
        menuContainer.style.display = "none";
    }
}