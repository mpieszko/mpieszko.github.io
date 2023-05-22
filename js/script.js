let ham = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let navbar = document.querySelector('.nav-bar')
let sliderImg = document.querySelector('#slider-img')


ham.addEventListener('click', event => {

    menu.classList.toggle('show')
    navbar.classList.toggle('nav-height')

})
 let images = ['./img/finalizadas/o01.jpg','./img/finalizadas/o02.jpg','./img/finalizadas/o03.jpg','./img/finalizadas/o04.jpg','./img/finalizadas/o05.jpg']
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===5){
        i=0;
    }
}
setInterval(slide,3000)