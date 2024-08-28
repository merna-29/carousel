
let currentIndex = 0;
function changeSlide(direction) {
    showSlide(currentIndex += direction);
}

function currentSlide(index) {
    showSlide(currentIndex = index - 1);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
        dots[i].classList.toggle('active', i === currentIndex);
    });
}

showSlide(currentIndex);
