var slideIndexA = 1;
var slideIndexB = 1;
var slideIndexC = 1;

showSlidesA(slideIndexA);
showSlidesB(slideIndexB);
showSlidesC(slideIndexC);

function plusSlidesA(n) {
  showSlidesA((slideIndexA += n));
}

function currentSlideA(n) {
  showSlidesA((slideIndexA = n));
}
function plusSlidesB(n) {
  showSlidesB((slideIndexB += n));
}

function currentSlideB(n) {
  showSlidesB((slideIndexB = n));
}
function plusSlidesC(n) {
  showSlidesC((slideIndexC += n));
}

function currentSlideC(n) {
  showSlidesC((slideIndexC = n));
}

function showSlidesB(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides-B');
  var contents = document.getElementsByClassName('content-B');
  var contents1 = document.getElementsByClassName('content1-B');
  var dots = document.getElementsByClassName('dot-B');
  var dots1 = document.getElementsByClassName('dot1-B');

  if (n > slides.length) {
    slideIndexB = 1;
  }
  if (n < 1) {
    slideIndexB = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(' active', '');
  }
  for (i = 0; i < slides.length; i++) {
    contents[i].style.display = 'none';
  }
  for (i = 0; i < slides.length; i++) {
    contents1[i].style.display = 'none';
  }
  slides[slideIndexB - 1].style.display = 'block';
  dots[slideIndexB - 1].className += ' active';
  dots1[slideIndexB - 1].className += ' active';
  contents[slideIndexB - 1].style.display = 'block';
  contents1[slideIndexB - 1].style.display = 'block';
}


function showSlidesA(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides-A');
  var contents = document.getElementsByClassName('content-A');
  var contents1 = document.getElementsByClassName('content1-A');
  var dots = document.getElementsByClassName('dot-A');
  var dots1 = document.getElementsByClassName('dot1-A');

  if (n > slides.length) {
    slideIndexA = 1;
  }
  if (n < 1) {
    slideIndexA = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(' active', '');
  }
  for (i = 0; i < slides.length; i++) {
    contents[i].style.display = 'none';
  }
  for (i = 0; i < slides.length; i++) {
    contents1[i].style.display = 'none';
  }
  slides[slideIndexA - 1].style.display = 'block';
  dots[slideIndexA - 1].className += ' active';
  dots1[slideIndexA - 1].className += ' active';
  contents[slideIndexA - 1].style.display = 'block';
  contents1[slideIndexA - 1].style.display = 'block';
}

function showSlidesC(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides-C');
  var contents = document.getElementsByClassName('content-C');
  var contents1 = document.getElementsByClassName('content1-C');
  var dots = document.getElementsByClassName('dot-C');
  var dots1 = document.getElementsByClassName('dot1-C');

  if (n > slides.length) {
    slideIndexC = 1;
  }
  if (n < 1) {
    slideIndexC = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(' active', '');
  }
  for (i = 0; i < slides.length; i++) {
    contents[i].style.display = 'none';
  }
  for (i = 0; i < slides.length; i++) {
    contents1[i].style.display = 'none';
  }
  slides[slideIndexC - 1].style.display = 'block';
  dots[slideIndexC - 1].className += ' active';
  dots1[slideIndexC - 1].className += ' active';
  contents[slideIndexC - 1].style.display = 'block';
  contents1[slideIndexC - 1].style.display = 'block';
}

