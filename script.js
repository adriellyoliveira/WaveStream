const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');

let index = 0;
const itemWidth = items[0].getBoundingClientRect().width;
const visibleItems = Math.floor(track.parentNode.clientWidth / itemWidth);

function updateCarousel() {
    const offset = index * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
}

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (index < items.length - visibleItems) {
        index++;
    }
    updateCarousel();
});

// Função para detectar se o dispositivo é móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Ocultar botões em dispositivos móveis
if (isMobile()) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
}

