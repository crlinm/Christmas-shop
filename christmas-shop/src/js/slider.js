const LEFT_BTN = document.querySelector('.left-btn');
const RIGHT_BTN = document.querySelector('.right-btn');
const SLIDER = document.querySelector('.wishes__slider');

let currentShift = 0;
let currentClick = 0;
let nClicks = 0;


export function slider(direction){
    const shift = getShift();

    if (direction === 'left') {
        currentShift += shift;
        currentClick -= 1;
        SLIDER.style.left = `${currentShift}px`;
        RIGHT_BTN.classList.remove('not_active');
        if (currentClick == 0) {
            LEFT_BTN.classList.add('not_active');
            RIGHT_BTN.classList.remove('not_active');
        }
    } else if (direction === 'right') {
        currentShift -= shift;
        currentClick += 1;
        SLIDER.style.left = `${currentShift}px`;
        LEFT_BTN.classList.remove('not_active');
        if (currentClick == nClicks) {
            RIGHT_BTN.classList.add('not_active');
        }
    }
}

LEFT_BTN.addEventListener("click", (e) => slider('left'));
RIGHT_BTN.addEventListener("click", (e) => slider('right'));


function getShift() {
    const widthScreen = window.innerWidth;
    if (widthScreen > 768) {
        nClicks = 3;
    } else {
        nClicks = 6;
    }
    const sliderWidth = SLIDER.clientWidth;
    return Math.round((SLIDER.scrollWidth - sliderWidth + Math.round((widthScreen - sliderWidth) / 2)) / nClicks);
}

window.addEventListener("resize", (e) => {
    const shift = getShift();
})


window.addEventListener('resize', resetSlider);

function resetSlider() {
    SLIDER.style.left = '0';
    LEFT_BTN.classList.add('not_active');
    RIGHT_BTN.classList.remove('not_active');
}
