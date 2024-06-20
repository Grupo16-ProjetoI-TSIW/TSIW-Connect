let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("video-card");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length / 2) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length / 2
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[(slideIndex - 1) * 2].style.display = "block";
    slides[(slideIndex - 1) * 2 + 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    const keywords = document.querySelectorAll('.keyword');
    let currentIndex = 0;
    
    function showKeyword(index) {
        keywords.forEach((keyword, i) => {
            keyword.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextKeyword() {
        currentIndex = (currentIndex + 1) % keywords.length;
        showKeyword(currentIndex);
    }

    showKeyword(currentIndex);
    setInterval(nextKeyword, 2000);
});