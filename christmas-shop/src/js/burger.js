
const MENU = document.querySelector('.nav');
const MENU_LI_s = document.querySelectorAll('.nav__link');
const BURGER_BTN = document.querySelector('.burger-btn');


BURGER_BTN.addEventListener("click", (e) => {
    console.log('BURGER_BTN');
    menuOpen(e, true);
})

for (const MENU_LI of MENU_LI_s){
    MENU_LI.addEventListener("click", (e) => {
        menuOpen(e, false);
    })
}

export function menuOpen(e, f) {
    MENU.classList.toggle('menu-open');
    MENU.classList.toggle('h2');
    MENU.classList.toggle('h4');
    document.body.classList.toggle("shadow");
    BURGER_BTN.classList.toggle('burger-cross');
}

window.addEventListener("resize", (e) => {
    const w = window.innerWidth;
    if (w > 768 && MENU.classList.contains('menu-open')) {
        menuOpen(e, false);
    }
})
