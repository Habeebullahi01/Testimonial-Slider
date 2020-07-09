// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("text-div");
//   // var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


          // Start of My own Code
var slideNumber = 1;
displaySlide(slideNumber);

var prev = document.getElementsByClassName('prev');
for (var i = 0; i < prev.length; i++) {prev[i].addEventListener('click',function() {addSlide(-1)})};

var next = document.getElementsByClassName('next');
for (var i = 0; i < next.length; i++) {next[i].addEventListener('click',function() {addSlide(1)})};

function addSlide(n) {
  displaySlide(slideNumber += n);
}

function displaySlide(n) {
  var slides = document.getElementsByClassName('text-div');
  if (n > slides.length) {slideNumber = 1};
  if (n < 1) {slideNumber = slides.length};

  for (var i = 0; i < slides.length; i++) {slides[i].style.display = 'none'};
  slides[slideNumber-1].style.display = 'flex';
}
