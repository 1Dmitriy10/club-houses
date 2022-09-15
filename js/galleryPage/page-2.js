import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const pageBox = document.querySelector(".gallery__page-box")

export function getPage2() {
    pageBox.innerHTML = ""
    pageBox.insertAdjacentHTML("beforeend", `
<div class="swiper gallery__slider">
<!-- Additional required wrapper -->
<div class="swiper-wrapper ff">
    <!-- Slides -->
    <div class="swiper-slide test"><img class="slider-img"
            src="./assets/img/gallery/gallery-img-slider.png" alt=""></div>
    <div class="swiper-slide test"><img class="slider-img"
            src="./assets/img/gallery/gallery-img-slider.png" alt=""></div>
    <div class="swiper-slide test"><img class="slider-img"
            src="./assets/img/gallery/gallery-img-slider.png" alt="">
    </div>
    <div class="swiper-slide test"><img class="slider-img"
            src="./assets/img/gallery/gallery-img-slider.png" alt=""></div>
    <div class="swiper-slide test"><img class="slider-img"
            src="./assets/img/gallery/gallery-img-slider.png" alt=""></div>

</div>

<!-- If we need navigation buttons -->
<div class="gallery-slider-prev"></div>
<div class="gallery-slider-next"></div>
</div>
`)
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
}