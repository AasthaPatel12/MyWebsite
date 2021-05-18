burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
    navList.classList.toggle('v');
    rightNav.classList.toggle('v');
    navbar.classList.toggle('h-nav');
})