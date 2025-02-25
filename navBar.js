function toggleMenu() {
    document.getElementsByClassName("topNav")[0].classList.toggle("active");
}

document.getElementById("burgerMenu").onclick = toggleMenu;