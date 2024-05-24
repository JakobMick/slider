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

    console.log(window.innerWidth)
    console.log(rect.x)
    console.log(rect.width)
    console.log(0 < rect.x + rect.width)
    console.log(rect.x < window.innerWidth || tempIndex == 0)

    if( (rect.x + rect.width < 0 || tempIndex == 0)) {
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

    if((window.innerWidth < rect.x + rect.width) || (rect.x > 0 || tempIndex == sliderElements.length - 1)) {
        sliderElements[sliderIndex].scrollIntoView();
    } else {
        scrollToNext();
    }
}

function isVisible(rect) {

    if(rect.x >= 0 && window.innerWidth > rect.x + rect.width) {
        console.log("isVisible");
    } else {
        console.log("notVisible")
    }

    return rect.x >= 0 && window.innerWidth > rect.x + rect.width;
}

buttonPrev.addEventListener("click", scrollToPrev);
buttonNext.addEventListener("click", scrollToNext);