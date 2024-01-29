const faceBani = document.querySelector('.sec01fbanime');
function faceb(){
    const targetRect = faceBani.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        faceBani.classList.add('sec01fbAni'); 
    } else {
        faceBani.classList.remove('sec01fbAni');
    }
};

window.addEventListener('scroll', faceb);


const fuwawa = document.querySelectorAll('.sec02FukidaItem');
function fuwawawa() {
    fuwawa.forEach(function (target) {
        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add('sec02FukidaItem');
        } else {
            target.classList.remove('sec02FukidaItem');
        }
    });
};
window.addEventListener('scroll', fuwawawa);


const fadein = document.querySelectorAll('.sec03img');
function fadeinn() {
    fadein.forEach(function (target) {
        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add('fadeinn');
        } 
        else {
            target.classList.remove('fadeinn');
        }
    });
};
window.addEventListener('scroll', fadeinn);


const fadein02 = document.querySelectorAll('.sec03merit');
function fadeinn() {
    fadein02.forEach(function (target) {
        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add('fadeinn');
        } 
    });
};
window.addEventListener('scroll', fadeinn);


const bounce = document.querySelectorAll('.sec04title');
function bouncebounce() {
    bounce.forEach(function (target) {
        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add('animate__bounce');
        } else {
            target.classList.remove('animate__bounce');
        }
    });
};
window.addEventListener('scroll', bouncebounce);



function resizeFacebookPlugin() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth <= 500) {
        document.getElementById('my-fb-page').setAttribute('data-width', '300');
        document.getElementById('my-fb-page').setAttribute('data-height', '300');
    } else {
        document.getElementById('my-fb-page').setAttribute('data-width', '400');
        document.getElementById('my-fb-page').setAttribute('data-height', '400');
    }

    FB.XFBML.parse();
}

window.addEventListener('resize', resizeFacebookPlugin);
window.addEventListener('load', resizeFacebookPlugin);


const swiper = new Swiper('.swiper01', {
    loop: true,
    effect: 'scroll',
    speed:1500,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 2000,
    }
});


const swiper02 = new Swiper(".swiper02", {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const handslide = document.querySelector('.sec04Hand');
function handslideanime() {
        const targetRect = handslide.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            handslide.classList.add('sec04Hand');
        } else {
            handslide.classList.remove('sec04Hand');
        }
    };

window.addEventListener('scroll', handslideanime);