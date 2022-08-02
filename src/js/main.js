let menuBtn = document.getElementById('button-menu');
let closeMenuBtn = document.getElementById('button-close-menu');
let menuMobile = document.getElementById('menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('show')
})

closeMenuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('show')
})


//carousel mobile section pain
let getButtons = document.getElementById('buttons-carousel');
let buttons = [...getButtons.children]

const replaceClass = (el, b) => {
    let a = el.classList.item(1);
    el.classList.replace(a, b)
}

const changePosition = (value) => {
    let getCarousel = document.getElementById('items-carousel');
    let carousel = [...getCarousel.children];
    if(value == 0) {
        replaceClass(carousel[0], 'column-two');
        replaceClass(carousel[1], 'column-three');
        replaceClass(carousel[2], 'column-one')
    } else if (value == 1) {
        replaceClass(carousel[0], 'column-one');
        replaceClass(carousel[1], 'column-two');
        replaceClass(carousel[2], 'column-three')
    } else if (value == 2) {
        replaceClass(carousel[0], 'column-three');
        replaceClass(carousel[1], 'column-one');
        replaceClass(carousel[2], 'column-two')
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(!e.target.classList.contains('active')){
           for(let i=0; i<buttons.length; i++){
               if (e.target === buttons[i]){
                   buttons[i].classList.add('active');
                   changePosition(i)
               } 
               else if(buttons[i].classList.contains('active')
                    && buttons[i] != e.target) {
                    buttons[i].classList.remove('active')
                }
           }
           
        }
    });
})

//carousel mobile section benefit

let getButtonsBenefit = document.getElementById('buttons-benefit');
let buttonsBenefit = [...getButtonsBenefit.children];

const changePositionBenefit = (value) => {
    let getCarouselBenefit = document.getElementById('items-carousel-benefit');
    let carousel = [...getCarouselBenefit.children];
    if(value == 0) {
        replaceClass(carousel[4], 'column-one');
        replaceClass(carousel[5], 'column-two');
        replaceClass(carousel[1], 'column-three');
        replaceClass(carousel[2], 'column-four');
        replaceClass(carousel[3], 'column-five')
    } else if (value == 1) {
        replaceClass(carousel[5], 'column-one');
        replaceClass(carousel[1], 'column-two');
        replaceClass(carousel[2], 'column-three');
        replaceClass(carousel[3], 'column-four');
        replaceClass(carousel[4], 'column-five')
    } else if (value == 2) {
        replaceClass(carousel[1], 'column-one');
        replaceClass(carousel[2], 'column-two');
        replaceClass(carousel[3], 'column-three');
        replaceClass(carousel[4], 'column-four');
        replaceClass(carousel[5], 'column-five')
    }   else if (value == 3) {
        replaceClass(carousel[2], 'column-one');
        replaceClass(carousel[3], 'column-two');
        replaceClass(carousel[4], 'column-three');
        replaceClass(carousel[5], 'column-four');
        replaceClass(carousel[1], 'column-five')
    }   else if (value == 4) {
        replaceClass(carousel[3], 'column-one');
        replaceClass(carousel[4], 'column-two');
        replaceClass(carousel[5], 'column-three');
        replaceClass(carousel[1], 'column-four');
        replaceClass(carousel[2], 'column-five')
    }
}

buttonsBenefit.forEach(button => {
    button.addEventListener('click', (e) => {
        if(!e.target.classList.contains('active')){
           for(let i=0; i<buttonsBenefit.length; i++){
               if (e.target === buttonsBenefit[i]){
                   buttonsBenefit[i].classList.add('active');
                   changePositionBenefit(i)
               } 
               else if(buttonsBenefit[i].classList.contains('active')
                    && buttonsBenefit[i] != e.target) {
                    buttonsBenefit[i].classList.remove('active')
                }
           }
           
        }
    });
})

const removeAnimation = (div, animation) => {
    div.classList.remove('animate__animated')
    div.classList.remove(animation)
}
const addAnimation = (div, animation) => {
    div.classList.add('animate__animated')
    div.classList.add(animation)
}

const showBenefits = (div, animation) => {
    div.classList.add('animate__animated')
    div.classList.add(animation)
}

const setTimeFunction = (div, animation, time) => {
    setTimeout(() => {
        showBenefits(div, animation)
    }, time)
}

let benefitCards = document.getElementsByClassName('grid-column')
let benefits = [...benefitCards]
benefits.forEach((benefit, idx) => {
    setTimeFunction(benefit, 'animate__fadeInUp', `${200 * (idx + 1)}`)
})

//comments

const commentImages = [
    './src/images/comments-1.jpg',
    './src/images/comments-2.jpg',
    './src/images/comments-lg.png',
    './src/images/comments-3.jpg',
    './src/images/comments-4.jpg'
]

let divTargets = document.getElementById('comment-targets');
let targets = [...divTargets.children];
let divTexts = document.getElementById('comment-text');
let texts = [...divTexts.children];
let divImage = document.getElementById('comment-image');


targets.forEach((target, idx) => {
    target.addEventListener('click', (e) => {
        removeAnimation(divImage, 'animate__bounceInLeft')
        if(!e.target.classList.contains('active')){
            for(let i=0; i<targets.length; i++) {
                targets[i].classList.remove('active')
                texts[i].classList.remove('show')
                removeAnimation(texts[i], 'animate__bounceInRight')
            }
            e.target.classList.add('active')
            setTimeout(() => {
                divImage.style.backgroundImage = `url(${commentImages[idx]})`
                texts[idx].classList.add('show')
                addAnimation(divImage, 'animate__bounceInLeft')
                addAnimation(texts[idx], 'animate__bounceInRight')
            }, 200)
            
        }
    })
})