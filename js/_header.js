let header_burger = document.querySelector('.burger');
let header_menu = document.querySelector('.header_menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header_list');

header_burger.onclick = function(){
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}
