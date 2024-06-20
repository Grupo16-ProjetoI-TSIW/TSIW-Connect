document.addEventListener('DOMContentLoaded', () => {

    const carouselContent = document.querySelector('.carousel-content');
    let index = 0;

    const updateCarousel = () => {
        index = (index + 1) % 5;
        carouselContent.style.transform = `translateX(${-index * 20}%)`;
    };

    setInterval(updateCarousel, 5000);
});