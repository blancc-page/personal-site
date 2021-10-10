// title section
const nav = document.querySelector(".nav");
const arrow_down = document.querySelector(".chevron");
const title_section = document.querySelector(".title-section");


window.addEventListener("scroll", fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

arrow_down.addEventListener("click", pageDown);


function pageDown(){
    document.documentElement.scrollTop = window.innerHeight + window.scrollY;
    
}

// slider section
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slideLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
    changeSlide("up");
});
downBtn.addEventListener("click", () => {
    changeSlide("down");
});

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === "up"){
        activeSlideIndex++;
        if(activeSlideIndex > slideLength - 1){
            activeSlideIndex = 0;
        }
    } else if(direction === "down"){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(+${activeSlideIndex * sliderHeight}px)`
}