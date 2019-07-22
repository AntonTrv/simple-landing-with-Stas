let prices = Array.from(document.getElementsByClassName('section-plans_list-item'));

prices.forEach((el) => {
    el.onmouseover = () => {
        el.classList.add('active')
        prices.filter(item => item!==el ? item.classList.remove('active'): null)
    };
});

let nav = Array.from(document.querySelectorAll('.section-footer_nav ul li a'));

nav.forEach((el) => {
    el.onmouseover = () => {
        el.classList.add('active')
        nav.filter(item => item!==el ? item.classList.remove('active'): null)
    };
});
