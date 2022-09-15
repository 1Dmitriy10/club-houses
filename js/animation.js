const circle = document.querySelectorAll(".info-dark-ellepse");
let video = 0;
let map = 0;

export function animationCircle() {
    setInterval(() => {
        video++;
        map--;
        circle[0].style.transform = `rotate(${video}deg)`;
        circle[1].style.transform = `rotate(${map}deg)`
    }, 30);
}