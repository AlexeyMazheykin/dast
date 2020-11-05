//HEADER;
const headerBottom = document.querySelector('.header__bottom');
const headerTop = document.querySelector('.header__top');
const main = document.getElementById('main');
const hero = document.querySelector('.hero');


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

const sliderText = document.querySelector('#slider').innerHTML;
const slider = document.querySelector('#slider');
const choice = document.querySelector('.hero__choice');
const choiceItems = document.querySelectorAll('.hero__choice-item');
let countHero = 0;
let countInt = 4;
let countListener = 1;

choiceItems.forEach(el => {
    el.addEventListener('click', function () {
        if (countHero <= 4) {
            countHero = +this.dataset.id
            slider.style.left = `-${100 * (+this.dataset.id)}%`
        } else {
            slider.style.left = `-${100 * (+this.dataset.id)}%`
            if (countInt / countListener < +this.dataset.id * countListener) {
                countInt = +this.dataset.id * countListener + countInt;
            } else if (countInt / countListener > +this.dataset.id * countListener) {
                countInt = countInt - +this.dataset.id;
            }
        }
    });
});
setInterval(function () {
    if (countHero < 4) {
        countHero++
        countInt = 4;
        slider.style.left = `-${100 * (countHero)}%`
    } else {
        countHero = 5;
        countInt++;
        slider.style.left = `-${100 * (countInt)}%`
        console.log(countHero, countInt, countListener)
        if (countInt % 5 === 0) {
            countListener++
            slider.insertAdjacentHTML('beforeend', sliderText);
        }
    }
},20000);



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
//SCROLL TO TOP

const scrollTop = document.querySelector('.scroll__top');
let scrolled;
let timer;

window.addEventListener('scroll', () =>{
    if (window.pageYOffset > hero.scrollHeight) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
});
scrollTop.addEventListener('click', () => {

scrolled = window.pageYOffset;
    scrollToTop();
});
function scrollToTop () {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 50;
        timer = setTimeout(scrollToTop, 10);
    } else {
        window.scrollTo(0, 0);
        clearTimeout(timer)
    }

}








