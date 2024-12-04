
const MENU = document.querySelector('.nav');
const MENU_LI_s = document.querySelectorAll('.nav__link');
const BURGER_BTN = document.querySelector('.burger-btn');

let isOpen = false;

BURGER_BTN.addEventListener("click", (e) => {
    menuOpen(e, !isOpen);
})

for (const MENU_LI of MENU_LI_s){
    MENU_LI.addEventListener("click", (e) => {
        menuOpen(e, false);
    })
}

export function menuOpen(e, f) {
    if (f) {
        MENU.classList.add('menu-open');
        MENU.classList.remove('h4');
        MENU.classList.add('h2');
        document.body.classList.add("shadow");
        BURGER_BTN.classList.add('burger-cross');
        isOpen = true;
    } else {
        console.log('else', e.target, e.currentTarget);
        if (e.target == e.currentTarget) {
            MENU.classList.remove('menu-open');
            MENU.classList.add('h4');
            MENU.classList.remove('h2');
            document.body.classList.remove("shadow");
            BURGER_BTN.classList.remove('burger-cross');
            isOpen = false;
        }
    }
}

window.addEventListener("resize", (e) => {
    const w = window.innerWidth;
    if (w > 768 && MENU.classList.contains('menu-open')) {
        menuOpen(e, false);
    }
})
