burger = document.querySelector('.burger')
nav = document.querySelector('.nav')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    navList.classList.toggle('v');
    rightNav.classList.toggle('v');
    nav.classList.toggle('h-nav');
})
var input = 0;
var counter = document.querySelector('.counter')
var box1 = document.getElementById('one')
var box2 = document.getElementById('two')
var box3 = document.getElementById('three')
var box4 = document.getElementById('four')
box2.innerHTML = '<p>'+input+'</p>';
box4.addEventListener('click' , reset);
function reset(e){
    input = 0;
    box2.innerHTML = '<p>'+input+'</p>';
}
box3.addEventListener('click' , add);
function add(e){
    input++;
    box2.innerHTML = '<p>'+input+'<p>';
}
box1.addEventListener('click' , remove);
function remove(e){
    input--;
    box2.innerHTML = '<p>'+input+'</p>';
}
