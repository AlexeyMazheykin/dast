//HEADER;
const headerBottom = document.querySelector('.header__bottom');
const headerTop = document.querySelector('.header__top');
const main = document.getElementById('main');


window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerTop.scrollHeight) {
        headerBottom.classList.add('header__fixed');
        main.style.top = headerBottom.clientHeight + 'px';
    } else {
        headerBottom.classList.remove('header__fixed');
        main.style.top = 'auto'
    }
});

//SLIDER

const carousel = document.querySelector('.carousel');
const slider = document.querySelector('#slider');
const choice = document.querySelector('.hero__choice');
const choseItems = document.querySelectorAll('.hero__choice-item');
let direction = 1;
let count = 0;
let countChild = 0;


choseItems.forEach(element => {
    element.addEventListener('click', function () {
        clearInterval(interval);

        if (count < this.dataset.id) {
            direction = 1;
            carousel.style.justifyContent = 'flex-start';
            slider.style.transform = `translateX(${-(+this.dataset.id - count) * 1900}px)`;
            countChild = +this.dataset.id - count;
            count = +this.dataset.id;
        } else if (count > this.dataset.id) {
            direction = -1;
            carousel.style.justifyContent = 'flex-end';
            countChild = count - Number(this.dataset.id);
            count = +this.dataset.id;
            for (let i = 0; i < countChild; i++) {
                slider.appendChild(slider.firstElementChild);
            }
            slider.style.transform = `translateX(${(count - Number(this.dataset.id)) * 1900}px)`;
        }
    });
});

let interval = setInterval(function () {
    count++
    if (count > 4) {
        count = 0;
    }
    countChild = 1;
    slider.style.transform = `translateX(-1900px)`;
}, 10000);

slider.addEventListener('transitionend', function () {
    console.log('Событие', count, countChild)

    if (direction === -1) {
        for (let i = 0; i < countChild; i++) {
            slider.prepend(slider.lastElementChild);
        }
    } else {
        for (let i = 0; i < countChild; i++) {
            slider.appendChild(slider.firstElementChild);
        }
    }
    slider.style.transition = 'none';
    slider.style.transform = `translateX(0px)`;
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })
}, false);

//BEST

const bestBtn = document.querySelectorAll('.best__btn ');
const bestSlider = document.querySelector('.best__slider');
const bestBtnNext = document.querySelector('.best__btn-next');
const bestBtnPrev = document.querySelector('.best__btn-prev');
let bestCount = 0;
let sliderPosition = 0;
bestBtnPrev.style.display = 'none';

bestBtn.forEach(function (element) {
    element.addEventListener('click', function () {
        bestCount += +this.dataset.count;
        console.log(bestCount);
        sliderPosition += +this.dataset.trans
        bestSlider.style.left = `${sliderPosition}%`;
        if (sliderPosition == 0) {
            bestBtnPrev.style.display = 'none';
        } else {
            bestBtnPrev.style.display = 'block';
        }
        if (bestCount >= bestSlider.childElementCount - 1) {
            bestBtnNext.style.display = 'none';
        } else {
            bestBtnNext.style.display = 'block';
        }
    });
});






