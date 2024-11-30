// import svg from "bundle-text:../assets/img/gifts/snow-power.svg";
const svgSnowflakes = new URL("../assets/img/gifts/snow-power.svg", import.meta.url).toString();
const svgCross = new URL("../assets/img/gifts/modal-cross.svg", import.meta.url).toString();

const modalGift = document.querySelector('.modal__overlay');
const nSnowlflakes = 5;

modalGift.addEventListener("click", (e) => closePopup(e));

const imgs = {
    "For Work": {
        "img": new URL("../assets/img/gifts/gift-for-work.png", import.meta.url).toString(),
        "tag": "gift__tag_purpled",
    },
    "For Health": {
        "img": new URL("../assets/img/gifts/gift-for-health.png", import.meta.url).toString(),
        "tag": "gift__tag_greened",
    },
    "For Harmony": {
        "img": new URL("../assets/img/gifts/gift-for-harmony.png", import.meta.url).toString(),
        "tag": "gift__tag_pinked",
    }
}


function closePopup(event) {
    console.log(event.target, event.currentTarget);
    if (event.target == event.currentTarget){
        modalGift.classList.remove("visible");
        document.body.classList.remove("shadow");
        modalGift.textContent = '';
    }
}


export class Gift {
    constructor({name, description, category, superpowers}) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.superpowers = superpowers;
    }

    createGift() {
        const gift = document.createElement('div');
        gift.classList.add("gift__card");

        const img = document.createElement("img");
        img.alt = "";
        img.src = imgs[this.category].img;

        const cardContent = document.createElement('div');
        cardContent.classList.add("card__content");

        const giftTag = document.createElement('p');
        giftTag.classList.add("h4");
        giftTag.classList.add("gift__tag");
        giftTag.classList.add(imgs[this.category].tag);
        giftTag.textContent = this.category;

        const giftName = document.createElement('p');
        giftName.classList.add("h3");
        giftName.classList.add("gift__name");
        giftName.textContent = this.name;

        cardContent.append(giftTag);
        cardContent.append(giftName);

        gift.append(img);
        gift.append(cardContent);

        gift.addEventListener("click", (e) => this.fillPopup(e));

        return gift;
    }

    fillPopup(){

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal__content');

        console.log('modalContent', modalContent)

        const modalText = document.createElement('div');
        modalText.classList.add('modal__text');

        const img = document.createElement('img');
        img.src = imgs[this.category].img;
        img.alt = '';


        const modalDescription = document.createElement('div');
        modalDescription.classList.add('modal__description');

        const giftTag = document.createElement('p');
        giftTag.classList.add("h4");
        giftTag.classList.add("gift__tag");
        giftTag.classList.add(imgs[this.category].tag);
        giftTag.textContent = this.category;

        const giftName = document.createElement('p');
        giftName.classList.add("h3");
        giftName.classList.add("gift__name");
        giftName.textContent = this.name;

        const giftDescription = document.createElement('p');
        giftDescription.classList.add('description');
        giftDescription.textContent = this.description;

        modalDescription.append(giftTag);
        modalDescription.append(giftName);
        modalDescription.append(giftDescription);

        modalText.append(modalDescription);


        const modalSuperpowers = document.createElement('div');
        modalSuperpowers.classList.add('modal__superpowers');

        const superpowersText = document.createElement('p');
        superpowersText.textContent= 'Adds superpowers to:';
        superpowersText.classList.add('h4');
        modalSuperpowers.append(superpowersText);

        const modalSuperpowersList = document.createElement('div');
        modalSuperpowersList.classList.add('superpowers__list');

        for (const [key, value] of Object.entries(this.superpowers)){
            const power = document.createElement('p');
            power.textContent = key[0].toUpperCase() + key.slice(1).toLowerCase();

            const powerValue = document.createElement('p');
            powerValue.textContent = value;

            const snowflakes = document.createElement('div');
            snowflakes.classList.add('snowlflakes');
            snowflakes.innerHTML = '';
            // snowflakes.innerHTML = svg;
            const cntSnow = Number(value.slice(1))/100;
            for (let i = 0; i < nSnowlflakes; i += 1) {
                snowflakes.innerHTML += `<img src="${svgSnowflakes}" alt=' '>`;
                if (i >= cntSnow) {
                    snowflakes.querySelector('img:last-child').classList.add('transparent');
                }
            }

            modalSuperpowersList.append(power)
            modalSuperpowersList.append(powerValue);
            modalSuperpowersList.append(snowflakes);
        }

        modalSuperpowers.append(modalSuperpowersList);

        modalText.append(modalSuperpowers);

        const btnClose = document.createElement('div');
        btnClose.classList.add('popup-btn-close');
        btnClose.innerHTML = '';
        btnClose.innerHTML += `<img src="${svgCross}" alt=' '>`;

        modalContent.append(img);
        modalContent.append(modalText);
        modalContent.append(btnClose);

        btnClose.addEventListener("click", (event) => {
            modalGift.classList.remove("visible");
            document.body.classList.remove("shadow");
            modalGift.textContent = '';
        });


        modalGift.append(modalContent);

        setTimeout(() => modalGift.classList.add('visible'), 0);

        document.body.classList.add("shadow");

        return modalGift;
    }
}

// function createPageGifts() {
//     const gift = document.createElement('div');
//     gift.classList.add("layout-grid");

// }


