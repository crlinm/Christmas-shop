import {Gift} from './Gift.js';
import {getGifts} from './utils.js';


const GIFTS_GRID = document.querySelector(".layout-grid");


async function init() {
    const data = await getGifts();
    const cntGifts = data.length;

    // const gift = document.createElement('div');
    // gift.classList.add("layout-grid");


    for (let i = 0; i < cntGifts; i += 1) {
        const gift = new Gift(data[i]);
        GIFTS_GRID.append(gift.createGift());
    }
}

init();
