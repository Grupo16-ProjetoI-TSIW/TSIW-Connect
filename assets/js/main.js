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