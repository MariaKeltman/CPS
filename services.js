const showButton = document.querySelector(".main__btn-show");
const showButtonText = document.querySelector(".main__btn-text");
const showButtonIcon = showButton.querySelector("svg");
let isOpen = false;
const hiddenItems = document.querySelectorAll(".main__list-items--hidden");
const hiddenItemsMin = document.querySelectorAll(".main__list-items--hidden-min");
const isTablet = function () {
    return window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
};
let swiper = null;

showButton.addEventListener("click", function () {

    isOpen = !isOpen;
    if(isOpen === true) {
        showButtonText.textContent = "Скрыть";
        showButtonIcon.classList.add("main__btn-open");
        for(let i = 0; i < hiddenItems.length; i++){
            hiddenItems[i].classList.remove("main__list-items--hidden");
        }
        if (isTablet() === true){
            for(let i = 0; i < hiddenItemsMin.length; i++){
                hiddenItemsMin[i].classList.remove("main__list-items--hidden-min");
            }
        }
    }
    else{
        showButtonText.textContent = "Показать все";
        showButtonIcon.classList.remove("main__btn-open");
        for(let i = 0; i < hiddenItems.length; i++){
            hiddenItems[i].classList.add("main__list-items--hidden");
        }
        if (isTablet() === true) {
            for (let i = 0; i < hiddenItemsMin.length; i++) {
                hiddenItemsMin[i].classList.add("main__list-items--hidden-min");
            }
        }
    }
});

const initSwiper = function () {
    if (window.innerWidth < 768  && !swiper) {
        swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 16,

            pagination: {
                el: '.swiper-pagination',
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
