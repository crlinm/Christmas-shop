import {Gift} from './Gift.js';
import {getGifts} from './utils.js';
import {menuOpen} from './burger.js';


const GIFTS_GRID = document.querySelector(".layout-grid");
const GIFTS_TAGS = document.querySelector('.gifts__tags');


async function clickTag(e) {
    console.log(e, e.target.innerText);
    if (e.target.classList.contains('tag__category')) {
        const currentTag = e.target;
        // console.log(currentTag);
        clearChosenTags();
        currentTag.classList.add('gift__tag__chosen');

        const giftChosen = await showGiftsByTag(currentTag.innerText);
        // console.log(giftChosen);
        showGifts(giftChosen);
    }
}

const clearChosenTags = () => {
    const tags = document.querySelectorAll(".tag__category");
    // console.log(tags);
    tags.forEach(tag => {
        tag.classList.remove('gift__tag__chosen');
        tag.classList.add('gift__tag__not_chosen');
    });
}

async function showGiftsByTag(value) {
    const gifts = await getGifts();
    const cntGifts = gifts.length;

    if (value === 'ALL') {
        return gifts;
    }

    const res = [];
    for (let i = 0; i < cntGifts; i += 1) {
        const gift = new Gift(gifts[i]);
        if (gift.category.toUpperCase() === value.toUpperCase()) {
            res.push(gift);
        }
    }
    console.log(res);
    return res;
}

const showGifts = (gifts) => {
    GIFTS_GRID.textContent = '';

    for (let i = 0; i < gifts.length; i += 1) {
        const gift = new Gift(gifts[i]);
        GIFTS_GRID.append(gift.createGift());
    }
}


async function init() {
    const gifts = await getGifts();
    const cntGifts = gifts.length;

    // const gift = document.createElement('div');
    // gift.classList.add("layout-grid");

    showGifts(gifts);
}

init();

GIFTS_TAGS.addEventListener("click", (e) => clickTag(e));


const SCROLL_BTN = document.querySelector('.scroll-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300 && window.innerWidth <= 768) {
        SCROLL_BTN.classList.add('show');
    } else {
        SCROLL_BTN.classList.remove('show');
    }
})