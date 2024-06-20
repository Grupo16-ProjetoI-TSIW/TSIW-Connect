document.addEventListener('DOMContentLoaded', () => {

    const carouselContent = document.querySelector('.carousel-content');
    let index = 0;

    const updateCarousel = () => {
        index = (index + 1) % 5;
        carouselContent.style.transform = `translateX(${-index * 20}%)`;
    };

    setInterval(updateCarousel, 5000);


    const videos = document.querySelectorAll('.event-card video');
    
    videos.forEach(video => {
        video.addEventListener('mouseover', () => {
           video.play();
        });
    
        video.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});