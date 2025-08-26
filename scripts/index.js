// Slider logic
const slides = document.getElementById('slides');
const slideElements = slides.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderDots = document.getElementById('sliderDots');
let currentIndex = 0;
const totalSlides = slideElements.length;
let autoSlideInterval;

function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updateDots();
}

function updateDots() {
    sliderDots.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot' + (i === currentIndex ? ' active' : '');
        dot.onclick = () => {
            showSlide(i);
            resetAutoSlide();
        };
        sliderDots.appendChild(dot);
    }
}

function nextSlide() {
    showSlide(currentIndex + 1);
    resetAutoSlide();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetAutoSlide();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => showSlide(currentIndex + 1), 4000);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Initialize
showSlide(0);
resetAutoSlide();
