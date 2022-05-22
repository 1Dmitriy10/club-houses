const btnMenu = document.querySelector(".btn-menu");

export function getMenu() {
    btnMenu.addEventListener("click", showMenu);
}

function showMenu() {
    const burgerLogo = document.querySelector(".menu-burger-logo");
    const burgerMenu = document.querySelector(".burger-menu");
    burgerLogo.classList.toggle("active");
    burgerMenu.classList.toggle("active");

}