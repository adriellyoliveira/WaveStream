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


document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const items = Array.from(track.children);
    const itemWidth = items[0].getBoundingClientRect().width;
    
    let currentIndex = 0;

    function updateCarouselPosition() {
        const offset = -(currentIndex * (itemWidth + 20)); // 20px é a margem entre os itens
        track.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarouselPosition();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = Math.min(currentIndex + 1, items.length - 1);
        updateCarouselPosition();
    });
});
