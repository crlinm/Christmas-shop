import {Gift} from './Gift.js';
import {getGifts, randomIndex} from './utils.js';

const GIFTS_GRID_HOME = document.querySelector('.gift_cards__columns');
const MENU = document.querySelector('.nav');
const MENU_LI = document.querySelector('.nav>li');
const BURGER_BTN = document.querySelector('.burger-btn');

const cntCards = 4;


async function init() {
    const data = await getGifts();
    const gifts = data.map(e => new Gift(e));
    let n = gifts.length;
    for (let i = 0; i < cntCards; i += 1) {
        const iRandom = Math.floor(Math.random() * (n - 1));
        const gift = gifts[iRandom];
        gifts[iRandom] = gifts[n - 1];
        n -= 1;
        GIFTS_GRID_HOME.append(gift.createGift());
    }
}

init();

BURGER_BTN.addEventListener("click", (e) => {
    // console.log(e);
    MENU.classList.toggle('menu-open');
    MENU.classList.remove('h4');
    MENU.classList.add('h2');
})

MENU_LI.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) {
        MENU.classList.toggle('menu-open');
        MENU.classList.remove('h2');
        MENU.classList.add('h4');
    }
})
