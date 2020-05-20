
// script for header part 
var flag=1;
function hit() {
    flag=flag+1;
    if(flag%2==0){
        document.getElementsByClassName("menu-icon")[0].setAttribute("class","menu-icon-new");
        
        document.getElementsByClassName("menu")[0].setAttribute("class","menu-new");
    }
    else{
        document.getElementsByClassName("menu-icon-new")[0].setAttribute("class","menu-icon");
        document.getElementsByClassName("menu-new")[0].setAttribute("class","menu");
    }
}

   var focus_flag=0;
   function focus_hit() {
        focus_flag=1;
        document.getElementsByClassName("menu-icon")[0].setAttribute("class","menu-icon-focussed");
    
   if(focus_flag==1){
               setTimeout(revert,1000);
    }

    function revert() {
        document.getElementsByClassName("menu-icon-focussed")[0].setAttribute("class","menu-icon");
        focus_flag=0;
    }
   }
// Script for header parts ends
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
