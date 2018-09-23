const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', ()=> {
    if (burger.className.includes('active')) {
        burger.className = 'burger toggle';
        nav.className = '';
        
    } else {
        burger.className += ' active';
        nav.className += ' active';
    }
        
});
