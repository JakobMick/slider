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

    sliderElements[sliderIndex].scrollIntoView();
}

function scrollToNext() {
    console.log("next");

    if(sliderIndex >= sliderElements.length - 1) {
        sliderIndex = 0;
    } else {
        sliderIndex++;
    }

    console.log(sliderIndex);
    sliderElements[sliderIndex].scrollIntoView();
}

buttonPrev.addEventListener("click", scrollToPrev);
buttonNext.addEventListener("click", scrollToNext);
