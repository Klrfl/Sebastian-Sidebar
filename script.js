//navigation
let nav = document.querySelector('nav');
let overlay = document.getElementById('overlay');

//openNav
function openNav(){
    nav.style.transform = 'translate(0)';
    nav.style.boxShadow = '5px 0px 15px rgba(0, 0, 0, 0.5)';
    //toggle overlay
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '2';
}

//closeNav
function closeNav(){
    nav.style.transform = 'translate(-100%)';
    nav.style.boxShadow = '0px 0px 0px #222';
    //close overlay
    overlay.style.zIndex = '0';
}

//goToTop
let goToTop = document.getElementById('goToTop'); 
window.onscroll = function(){
    scrollAppear();
};

function scrollAppear(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){ //disappear on very top
        goToTop.style.opacity = '1';
    } else{ //appear on scroll
        goToTop.style.opacity = '0';
    };
};

goToTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});