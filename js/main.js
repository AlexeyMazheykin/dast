const headerBottom = document.querySelector('.header__bottom');
const headerTop = document.querySelector('.header__top');
const slaider = document.querySelector('.hero__slaider');
const main = document.getElementById('main');
const choiseNode = document.querySelectorAll(".hero__choise-item");
window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerTop.scrollHeight) {
        headerBottom.classList.add('header__fixed');
        main.style.top = headerBottom.clientHeight + 'px';
    } else {
        headerBottom.classList.remove('header__fixed');
        main.style.top = 'auto'
    }
});
choiseNode.forEach(el => {
    el.addEventListener('click', () => {
        slaider.classList.add('translate')
    });
});