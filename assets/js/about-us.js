var footfall = 0;

function countfootfall () {
  if (footfall < 7000) {
    footfall += 20;
  }
  document.getElementById ('counterfootfall').innerHTML = footfall + '+';
  setTimeout (countfootfall, 3);
}

var colleges = 0;

function countcolleges () {
  if (colleges < 1000) {
    colleges += 5;
  }
  document.getElementById ('countercolleges').innerHTML = colleges + '+';
  setTimeout (countcolleges, 7);
}

var events = 0;

function countevents () {
  if (events < 30) {
    events += 1;
  }
  document.getElementById ('counterevents').innerHTML = events + '+';
  setTimeout (countevents, 70);
}

function elementInViewport (el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
}

var flag = 0;
var aboutus = function () {
  if (elementInViewport (document.querySelector ('.so'))) {
    countcolleges ();
    countevents ();
    countfootfall ();
  }
  setTimeout (aboutus, 500);
};
aboutus ();
