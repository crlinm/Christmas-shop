const LEFT_BTN = document.querySelector('.left-btn');
const RIGHT_BTN = document.querySelector('.right-btn');
const SLIDER = document.querySelector('.wishes__slider');


export function slider(direction){

    if (direction === 'left') {
        console.log(LEFT_BTN, SLIDER);
        SLIDER.style.left = '30%';


    } else if (direction === 'right') {
        console.log(RIGHT_BTN, SLIDER);
        SLIDER.style.left = '-30%';
        LEFT_BTN.classList.remove('not_active');
    }
}

LEFT_BTN.addEventListener("click", (e) => slider('left'));
RIGHT_BTN.addEventListener("click", (e) => slider('right'));


window.addEventListener("resize", (e) => {
    const widthScreen = window.innerWidth;
    let nClicks = 1;
    if (widthScreen > 768) {
        nClicks = 3;
    } else {
        nClicks = 6;
    }
    const sliderWidth = SLIDER.clientWidth;


    console.log(widthScreen, nClicks, sliderWidth);
})

window.addEventListener('resize', resetSlider);

function resetSlider() {
    SLIDER.style.left = '0';
}
