var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var contents = document.getElementsByClassName('content');
  var contents1 = document.getElementsByClassName('content1');
  var dots = document.getElementsByClassName('dot');
  var dots1 = document.getElementsByClassName('dot1');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
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
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  dots1[slideIndex - 1].className += ' active';
  contents[slideIndex - 1].style.display = 'block';
  contents1[slideIndex - 1].style.display = 'block';
}
