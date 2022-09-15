import { getPage2 } from "./page-2.js";
import { getPage1 } from "./page-1.js";
import { getPage3 } from "./page-3.js";
import { getPage4 } from "./page-4.js";
import { getPage5 } from "./page-5.js";

const btn = document.querySelectorAll(".gallery__btn ");
btn.forEach(item => { item.addEventListener("click", getPage) })
export function getPage(e) {
    const btnActive = document.querySelector(".gallery__btn--activ");
    switch (e.target.innerText) {
        case "Архитектура":
            btnActive.classList.remove("gallery__btn--activ")
            btn.forEach(item => {
                console.log(item.innerText)
                if (item.textContent == "Архитектура") {
                    item.classList.toggle("gallery__btn--activ")
                }
            })
            getPage1()
            break;
        case "Инфраструктура":

            btnActive.classList.remove("gallery__btn--activ")
            btn.forEach(item => {
                console.log(item.innerText)
                if (item.textContent == "Инфраструктура") {
                    item.classList.toggle("gallery__btn--activ")
                }
            })
            getPage2()
            break;
        case "Лобби":
            btnActive.classList.remove("gallery__btn--activ")
            btn.forEach(item => {
                console.log(item.innerText)
                if (item.textContent == "Лобби") {
                    item.classList.toggle("gallery__btn--activ")
                }
            })
            getPage3()
            break;
        case "Интерьер":
            btnActive.classList.remove("gallery__btn--activ")
            btn.forEach(item => {
                console.log(item.innerText)
                if (item.textContent == "Интерьер") {
                    item.classList.toggle("gallery__btn--activ")
                }
            })
            getPage4()
            break;
        case "Другое":
            btnActive.classList.remove("gallery__btn--activ")
            btn.forEach(item => {
                console.log(item.innerText)
                if (item.textContent == "Другое") {
                    item.classList.toggle("gallery__btn--activ")
                }
            })
            getPage5()
            break;
    }
}
