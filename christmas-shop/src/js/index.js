import {Gift} from './Gift.js';
import {getGifts, randomIndex} from './utils.js';
import {menuOpen} from './burger.js';


const GIFTS_GRID_HOME = document.querySelector('.gift_cards__columns');

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

