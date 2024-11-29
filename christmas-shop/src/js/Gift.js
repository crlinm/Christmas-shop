const modalGift = document.querySelector('.modal__gift');
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


function closePopup() {
    modalGift.classList.toggle("hidden");
    document.body.classList.toggle("shadow");
    modalGift.textContent = '';
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
        modalGift.classList.toggle('hidden');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal__content');

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

        const live = document.createElement('div');
        // live.classList.add();
        live.textContent = 'Live';

        // "superpowers": {
        //     "live": "+100",
        //     "create": "+400",
        //     "love": "+200",
        //     "dream": "+300"
        //     }
        modalSuperpowers.append(superpowersText);
        modalSuperpowers.append(live);

        modalText.append(modalSuperpowers);

        modalContent.append(img);
        modalContent.append(modalText);

        modalGift.append(modalContent);

        document.body.classList.toggle("shadow");

        return modalGift;
    }
}

// function createPageGifts() {
//     const gift = document.createElement('div');
//     gift.classList.add("layout-grid");

// }


