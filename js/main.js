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

//SLIDER

const carousel = document.querySelector('.carousel');
const slider = document.querySelector('#slider');
const choice = document.querySelector('.hero__choice');
let direction;
let count = 0;
const choseItems = document.querySelectorAll('.hero__choice-item');

choseItems.forEach(function (el) {
el.addEventListener('click', ()=> {
    
})
})
choice.addEventListener('click', function() {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translateX(-20%)';
});


setInterval(function () {
    count++
    if (count === 4) {
        count = 0
    }
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translateX(-20%)';
}, 10000)
slider.addEventListener('transitionend', function() {
    // get the last element and append it to the front

    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })
},false);


