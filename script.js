//starting at the first picture to display
var slideIndex = 1;
showSlides(slideIndex);

//Next/prev controls
//n is declared in html
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//n is declared in HTML
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("image");
    console.log(slides.length)
    var dots = document.getElementsByClassName("dot");
    //if on the fourth slide and next gets pushed go back to first slide
    if(n > slides.length){
        slideIndex = 1
    }
    //if on the first slide and prev gets pushed go to last slide
    if(n < 1){
        slideIndex = slideIndex.length;
    }

    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    for(i = 0 ; i < dots.length ; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}