//displays first slide
var slideNumber = 1;
displaySlide(slideNumber);
//adds event listener and function to buttons
var prev = document.getElementsByClassName('prev');
for (var i = 0; i < prev.length; i++) {prev[i].addEventListener('click',function() {addSlide(-1)})};

var next = document.getElementsByClassName('next');
for (var i = 0; i < next.length; i++) {next[i].addEventListener('click',function() {addSlide(1)})};
//indicates the position of the slide
function addSlide(n) {
  displaySlide(slideNumber += n);
}
//displays the slide
function displaySlide(n) {
  var slides = document.getElementsByClassName('text-div');
  if (n > slides.length) {slideNumber = 1};
  if (n < 1) {slideNumber = slides.length};

  for (var i = 0; i < slides.length; i++) {slides[i].style.display = 'none'};
  slides[slideNumber-1].style.display = 'flex';
}
