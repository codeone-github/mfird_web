var flag = 0;

function displayMenu() {
    
    if (flag== 0) {
        document.getElementById("l2").setAttribute("id", "l2-new");
        document.getElementById("l1").setAttribute("id", "l1-new");
        document.getElementById("l3").setAttribute("id", "l3-new");
        document.getElementsByClassName("menu")[0].setAttribute("class", "menu-displayed");
       
        flag=1;
    } else {
        document.getElementById("l2-new").setAttribute("id", "l2");
        document.getElementById("l1-new").setAttribute("id", "l1");
        document.getElementById("l3-new").setAttribute("id", "l3");
       document.getElementsByClassName("menu-displayed")[0].setAttribute("class", "menu");
       
        flag=0;
    }

}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
function hide() {
    document.getElementById("l2-new").setAttribute("id", "l2");
    document.getElementById("l1-new").setAttribute("id", "l1");
    document.getElementById("l3-new").setAttribute("id", "l3");
   document.getElementsByClassName("menu-displayed")[0].setAttribute("class", "menu");
        flag=0;
}