
//HEADER;
const headerBottom = document.querySelector('.header__bottom');
const headerTop = document.querySelector('.header__top');
const main = document.getElementById('main');
const choiceNode = document.querySelectorAll(".hero__choise-item");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerTop.scrollHeight) {
        headerBottom.classList.add('header__fixed');
        main.style.top = headerBottom.clientHeight + 'px';
    } else {
        headerBottom.classList.remove('header__fixed');
        main.style.top = 'auto'
    }
});


const slider = document.querySelector('.hero__slaider');
let herroSlide = document.querySelectorAll('.hero__slaid');
let herroArray = [];

herroSlide.forEach(el => {
    herroArray.push(el.outerHTML);
    el.remove();
})

console.log(herroArray)

let step = 0;
let offset = 0;

function draw() {

    if (step > 2) {
        step = 0;
        offset = 0;
    }

    slider.insertAdjacentHTML('beforeend', herroArray[step]);
    slider.style.left = offset * (-1900) + 'px';
    step++;
    offset++;
}

draw()

slider.addEventListener('click', function () {
console.log(this)
    draw()
})






