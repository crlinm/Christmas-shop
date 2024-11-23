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

        return gift;
    // <div class="gift__card">
    //     <img src="./src/assets/img/gifts/gift-for-work.png" alt="">
    //     <div class="card__content">
    //         <p class="h4 gift__tag gift__tag_purpled">For work</p>
    //         <p class="h3 gift__name">Console.log Guru</p>
    //     </div>
    // </div>
    }
}

// function createPageGifts() {
//     const gift = document.createElement('div');
//     gift.classList.add("layout-grid");

// }


