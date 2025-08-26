const images = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg'
];

let currentIndex = 0;

function showImage(index) {
    const slider = document.getElementById('slider');
    slider.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Initialize slider on page load
window.onload = function() {
    // Create slider elements if not present
    if (!document.getElementById('slider')) {
        const img = document.createElement('img');
        img.id = 'slider';
        img.style.width = '100%';
        document.body.appendChild(img);

        const prevBtn = document.createElement('button');
        prevBtn.innerText = 'Prev';
        prevBtn.onclick = prevImage;
        document.body.appendChild(prevBtn);

        const nextBtn = document.createElement('button');
        nextBtn.innerText = 'Next';
        nextBtn.onclick = nextImage;
        document.body.appendChild(nextBtn);
    }
    showImage(currentIndex);
};