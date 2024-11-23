import giftsFile from './gifts.json';
// import giftsFile from 'url:./gifts.json';


export async function getGifts() {
    return giftsFile;
    // const newURL = new URL('./gifts.json', import.meta.url);
    // const res = await fetch('./gifts.json');
    // return res;
    // if (res.ok){
    //     const cardGifts = await res.json();
    //     console.log(cardGifts);
    //     return cardGifts;
    // } else {
    //     throw "failed fetch gifts.json";
    // }
}
