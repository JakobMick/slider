const buttonPrev = document.getElementById("slider-button-prev");
const buttonNext = document.getElementById("slider-button-next");

const sliderElements = document.querySelectorAll(".slider .card");

var sliderIndex = 0;

console.log(sliderElements)

function scrollToPrev() {
    let tempIndex = sliderIndex;

    if(sliderIndex <= 0) {
        sliderIndex = sliderElements.length - 1;
    } else {
        sliderIndex--;
    }

    let rect = sliderElements[sliderIndex].getBoundingClientRect();

    if( (rect.x + rect.width < 0 + rect.width || tempIndex == 0)) {
        sliderElements[sliderIndex].scrollIntoView();
    } else {
        scrollToPrev();
    }
}

function scrollToNext() {
    let tempIndex = sliderIndex;

    if(sliderIndex >= sliderElements.length - 1) {
        sliderIndex = 0;
    } else {
        sliderIndex++;
    }

    let rect = sliderElements[sliderIndex].getBoundingClientRect();

    if((window.innerWidth < rect.x + rect.width) || (tempIndex == sliderElements.length - 1)) {
        sliderElements[sliderIndex].scrollIntoView();
    } else {
        scrollToNext();
    }
}

buttonPrev.addEventListener("click", scrollToPrev);
buttonNext.addEventListener("click", scrollToNext);