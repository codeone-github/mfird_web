// For button one
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// For button two
const slides2 = document.querySelectorAll(".slide2");
const next2 = document.querySelector("#next2");
const prev2 = document.querySelector("#prev2");

// Cboth
const auto = true;
const auto2 = true;
const intervalTime = 5000;
let slideInterval;
let slideInterval2;

// button one
const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
    } else {
        slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};
const prevSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    } else {
        slides[slides.length - 1].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

// button two
const next2Slide = () => {
    const first = document.querySelector(".first");
    first.classList.remove("first");
    if (first.nextElementSibling) {
        first.nextElementSibling.classList.add("first");
    } else {
        slides2[0].classList.add("first");
    }
    setTimeout(() => first.classList.remove("first"));
};

const prev2Slide = () => {
    const first = document.querySelector(".first");
    first.classList.remove("first");
    if (first.previousElementSibling) {
        first.previousElementSibling.classList.add("first");
    } else {
        slides2[slides2.length - 1].classList.add("first");
    }
    setTimeout(() => first.classList.remove("first"));
};

next.addEventListener("click", e => {
    nextSlide();
});

next2.addEventListener("click", e => {
    next2Slide();
});

prev.addEventListener("click", e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev2.addEventListener("click", e => {
    prev2Slide();
    if (auto2) {
        clearInterval(slideInterval2);
        slideInterval2 = setInterval(next2Slide, intervalTime);
    }
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}

if (auto2) {
    slideInterval2 = setInterval(next2Slide, intervalTime);
}
