
import { animationCircle } from "./animation.js";
import { info } from "./info.js";
import { getMenu } from "./burgerMenu.js";
import { getPage } from "./galleryPage/galleryPagination.js";
import * as gallery from "./gallery.js";


getMenu()
info()
animationCircle()
getPage()

const presentation = new Swiper('.slider-top', {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    centeredSlides: true,



});
const presentationBottom = new Swiper('.slider-bottom', {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    slidesPerView: 3.5,
    spaceBetween: 30,
    centeredSlides: true,
    autoHeight: true,
    // effect: fade



});