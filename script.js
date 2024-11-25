const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = slides.length;
const visibleSlides = 3; // 3 images visibles
const maxIndex = totalSlides - visibleSlides; // Max index avant de sortir des images visibles

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;

    // Mise à jour des dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Ajouter des événements sur les points (dots)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Fonction pour avancer d'une image (en option, si vous souhaitez des boutons de contrôle)
function nextSlide() {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0; // Revenir au début si on est à la dernière image
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex; // Revenir à la fin si on est à la première image
    }
    updateSlider();
}