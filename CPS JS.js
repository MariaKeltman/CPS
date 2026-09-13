const showButton = document.querySelector(".brands__btn-show");
const showButtonText = document.querySelector(".brands__btn-text");
const showButtonIcon = showButton.querySelector("svg");
let isOpen = false;
const hiddenItems = document.querySelectorAll(".brands__list-items--hidden");
const hiddenItemsMin = document.querySelectorAll(".brands__list-items--hidden-min");
const isTablet = function () {
    return window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
};
let swiper = null;

showButton.addEventListener("click", function () {

    isOpen = !isOpen;
    if(isOpen === true) {
        showButtonText.textContent = "Скрыть";
        showButtonIcon.classList.add("brands__btn-open");
        for(let i = 0; i < hiddenItems.length; i++){
            hiddenItems[i].classList.remove("brands__list-items--hidden");
        }
        if (isTablet() === true){
            for(let i = 0; i < hiddenItemsMin.length; i++){
                hiddenItemsMin[i].classList.remove("brands__list-items--hidden-min");
            }
        }
    }
    else{
        showButtonText.textContent = "Показать все";
        showButtonIcon.classList.remove("brands__btn-open");
        for(let i = 0; i < hiddenItems.length; i++){
            hiddenItems[i].classList.add("brands__list-items--hidden");
        }
        if (isTablet() === true) {
            for (let i = 0; i < hiddenItemsMin.length; i++) {
                hiddenItemsMin[i].classList.add("brands__list-items--hidden-min");
            }
        }
    }
});

const initSwiper = function () {
    if (window.innerWidth < 768  && !swiper) {
        swiper = new Swiper('.brands__swiper', {
            slidesPerView: 1,
            spaceBetween: 16,

            pagination: {
                el: '.brands__swiper .swiper-pagination',
                clickable: true,
            },
        });
    }

    if (window.innerWidth >= 768 && swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
};

initSwiper();

window.addEventListener('resize', function () {
    initSwiper();
});


const repairShowButton = document.querySelector(".repair__btn-show");
const repairShowButtonText = document.querySelector(".repair__btn-text");
const repairShowButtonIcon = repairShowButton.querySelector("svg");
let repairIsOpen = false;
const repairHiddenItems = document.querySelectorAll(".repair__list-items--hidden");
const repairHiddenItemsMin = document.querySelectorAll(".repair__list-items--hidden-min");
const isRepairTablet = function () {
    return window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
};
let repairSwiper = null;

repairShowButton.addEventListener("click", function () {

    isOpen = !isOpen;
    if(isOpen === true) {
        repairShowButtonText.textContent = "Скрыть";
        repairShowButtonIcon.classList.add("repair__btn-open");
        for(let i = 0; i < repairHiddenItems.length; i++){
            repairHiddenItems[i].classList.remove("repair__list-items--hidden");
        }
        if (isTablet() === true){
            for(let i = 0; i < repairHiddenItemsMin.length; i++){
                repairHiddenItemsMin[i].classList.remove("repair__list-items--hidden-min");
            }
        }
    }
    else{
        repairShowButtonText.textContent = "Показать все";
        repairShowButtonIcon.classList.remove("repair__btn-open");
        for(let i = 0; i < repairHiddenItems.length; i++){
            repairHiddenItems[i].classList.add("repair__list-items--hidden");
        }
        if (isTablet() === true) {
            for (let i = 0; i < repairHiddenItemsMin.length; i++) {
                repairHiddenItemsMin[i].classList.add("repair__list-items--hidden-min");
            }
        }
    }
});

const repairInitSwiper = function () {
    if (window.innerWidth < 768  && !repairSwiper) {
        repairSwiper = new Swiper('.repair__swiper', {
            slidesPerView: 1,
            spaceBetween: 16,

            pagination: {
                el: '.repair__swiper .swiper-pagination',
                clickable: true,
            },
        });
    }

    if (window.innerWidth >= 768 && repairSwiper) {
        repairSwiper.destroy(true, true);
        repairSwiper = null;
    }
};

repairInitSwiper();

window.addEventListener('resize', function () {
    repairInitSwiper();
});


let priceSwiper = null;
const priceShowSwiper = function () {
    if (window.innerWidth < 768 && !priceSwiper) {

        priceSwiper = new Swiper(".price__swiper", {
            slidesPerView: 1,
            spaceBetween: 16,

            pagination: {
                el: ".price__swiper .swiper-pagination",
                clickable: true,
            },
        });
    }
    if (window.innerWidth >= 768 && priceSwiper) {
        priceSwiper.destroy(true, true);
        priceSwiper = null;
    }
};

priceShowSwiper();

window.addEventListener("resize", function () {
    priceShowSwiper();
});

const overlay = document.querySelector('.overlay');

const callButtons = document.querySelectorAll('.header__call, .footer__call');
const callModal = document.querySelector('.modal-call');
const callClose = document.querySelector('.modal-call__close');

callButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        callModal.classList.add('modal--active');
        overlay.classList.add('overlay--active');
    });
});

callClose.addEventListener('click', function () {
    callModal.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
});

const feedbackButtons = document.querySelectorAll(
    '.header__chat, .footer__chat'
);

const feedbackModal = document.querySelector('.modal-feedback');
const feedbackClose = document.querySelector('.modal-feedback__close');

feedbackButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        feedbackModal.classList.add('modal--active');
        overlay.classList.add('overlay--active');
    });
});

feedbackClose.addEventListener('click', function () {
    feedbackModal.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
});

const menuButton = document.querySelector('.header__img');
const sidebar = document.querySelector('.sidebar');
const sidebarCross = document.querySelector('.header__cross');

menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar--active');
    overlay.classList.toggle('overlay--active');
});

sidebarCross.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--active');
    overlay.classList.remove('overlay--active');
});

overlay.addEventListener('click', function () {
    callModal.classList.remove('modal--active');
    feedbackModal.classList.remove('modal--active');
    sidebar.classList.remove('sidebar--active');
    overlay.classList.remove('overlay--active');
});