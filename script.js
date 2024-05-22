const buttonPrev = document.getElementById("slider-button-prev");
const buttonNext = document.getElementById("slider-button-next");

const sliderElements = document.querySelectorAll(".slider .card");

var sliderIndex = 0;

console.log(sliderElements)

function scrollToPrev() {
    console.log("prev");

    if(sliderIndex <= 0) {
        sliderIndex = sliderElements.length - 1;
    } else {
        sliderIndex--;
    }

    if(!isVisible(sliderElements[sliderIndex].getBoundingClientRect())) {
        sliderElements[sliderIndex].scrollIntoView();
    } else {
        scrollToPrev();
    }

    console.log(sliderIndex)
}

function scrollToNext() {
    console.log("next");

    if(sliderIndex >= sliderElements.length - 1) {
        sliderIndex = 0;
    } else {
        sliderIndex++;
    }

    if(!isVisible(sliderElements[sliderIndex].getBoundingClientRect())) {
        sliderElements[sliderIndex].scrollIntoView();
    } else {
        scrollToNext();
    }

    console.log(sliderIndex)
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