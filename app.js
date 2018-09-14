const burger = document.querySelector('.burger');

burger.addEventListener('click', ()=> {
    const result = burger.className.includes('active') 
        ? burger.className = 'burger toggle'
        : burger.className += ' active';
});
