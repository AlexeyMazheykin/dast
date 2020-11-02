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
let direction = -1;
let count = 0;

/*choseItems.forEach(function (el) {
    el.addEventListener('click', () => {
        console.log(count, el.dataset.id)
        if (count > el.dataset.id) {
            console.log('Счетчик больше')

            if (direction === -1) {
                direction = 1;
                slider.appendChild(slider.firstElementChild);
            }
            carousel.style.justifyContent = 'flex-end';
            slider.style.transform = `translate(${(count - el.dataset.id)*20}%)`;
            count = Number(el.dataset.id);
            console.log(count, el.dataset.id)

        } else if (count < el.dataset.id) {
            console.log('счетчик меньше')
            if (count > 4) {
                count = 0
            }
            direction = -1;
            carousel.style.justifyContent = 'flex-start';
            slider.style.transform = `translateX(-${(el.dataset.id - count)*20}%)`;
            count = Number(el.dataset.id);
            console.log(count, el.dataset.id)
        }
    })
})*/

/*next.addEventListener('click', function () {
    if (direction === 1) {
        //  direction = -1;
        slider.prepend(slider.lastElementChild);
    }
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translateX(-20%)';
});

prev.addEventListener('click', function () {
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translateX(20%)';

});*/

setInterval(function () {
    count++
    if (count > 4) {
        count = 0
    }
    if (direction === 1) {
        //  direction = -1;
        slider.prepend(slider.lastElementChild);
    }
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translateX(-20%)';
}, 5000)

slider.addEventListener('transitionend', function () {
    // get the last element and append it to the front

    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);

    }
console.log (slider)
    slider.style.transition = 'none';
    slider.style.transform = `translateX(0)`;
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })
}, false);


