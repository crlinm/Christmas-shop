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


const TIMER_VALUES = document.querySelectorAll('.timer__value');

function timer() {
    // const newYearDate = new Date("2025-01-01T00:00:00Z");
    const newYearDate = new Date(`${new Date().getFullYear() + 1}-01-01T00:00:00Z`);
    let diffTime = newYearDate - Date.now();

    const mlsInDay = 1000 * 60 * 60 * 24;
    const mlsInHour = 1000 * 60 * 60;
    const mlsInMinute = 1000 * 60;

    const diffDays = Math.floor(diffTime / mlsInDay);
    diffTime -= diffDays * mlsInDay;

    const diffHours = Math.floor(diffTime / mlsInHour);
    diffTime -= diffHours * mlsInHour;

    const diffMinutes = Math.floor(diffTime / mlsInMinute);
    diffTime -= diffMinutes * mlsInMinute;

    const diffSeconds = Math.floor(diffTime / 1000);
    const res = [diffDays, diffHours, diffMinutes, diffSeconds];

    let i = 0;
    for (const t of TIMER_VALUES) {
        t.textContent = res[i++]
    }
}

setInterval(timer, 1000);
