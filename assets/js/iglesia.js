const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const menu = document.querySelector('#nav-menu')

openMenu.addEventListener('click', ()=>{
    menu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('show')
})

const enlaces = document.querySelectorAll('.menu__enlace');

function linkAction(){
    /*** ACTIVE LINK ***/

    enlaces.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*** REMOCE MENU MOBILE ***/
    navMenu.classList.remove('show')
}
enlaces.forEach(n => n.addEventListener('click', linkAction));