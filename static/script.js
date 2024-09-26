// Carrusel de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
        slide.style.transform = i === index ? 'translateX(0)' : 'translateX(-100%)';
        slide.style.zIndex = i === index ? '1' : '0'; // Asegura que la imagen activa esté encima
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Iniciar carrusel
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Cambia cada 3 segundos

