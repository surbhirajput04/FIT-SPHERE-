let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//typing text

const typed = new Typed('.multiple-text', {
    strings: ['Fitness', 'Strength','Personalized workout plans' , 'health professionals','Fat loose'],
    typeSpeed: 60,
    backSpeed:60,
    backDelay:1000,
    loop:true,

  });

 