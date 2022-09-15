import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const gallery = new Swiper('.gallery__slider', {

    // Navigation arrows
    navigation: {
        nextEl: '.gallery-slider-next',
        prevEl: '.gallery-slider-prev',
    },
    loop: true,
    slidesPerView: 2.2,
    spaceBetween: 80,
    centeredSlides: true,
    transformEl: null


});
const expert = new Swiper('.gallery__expert', {
    // Navigation arrows
    navigation: {
        nextEl: '.gallery__expert-next',
        prevEl: '.gallery__expert-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3
    },
    loop: true,
    // slidesPerView: 1,

    // centeredSlides: true,



});
export { gallery, expert }
const bul = document.querySelectorAll(".swiper-pagination-bullet")
let i = 0;
bul.forEach(item => {
    i++;
    item.insertAdjacentHTML("beforeend", `
    ${i}
    <div class="pagination-bul"></div>
    `)
})
console.log(bul)