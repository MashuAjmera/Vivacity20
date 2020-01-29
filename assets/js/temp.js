window.addEventListener ('beforeinstallprompt', e => {
  // Stash the event so it can be triggered later.
  e.preventDefault ();
  deferredPrompt = e;
  showInstallPromotion ();
  deferredPrompt.userChoice.then (choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log ('User accepted the A2HS prompt');
    } else {
      console.log ('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
  window.addEventListener ('appinstalled', evt => {
    console.log ('a2hs installed');
  });
});

var container = document.querySelectorAll ('.container');
var current = 0;

function hideAddressBar () {
  if (!window.location.hash) {
    if (document.height < window.outerHeight) {
      document.body.style.height = window.outerHeight + 50 + 'px';
    }

    setTimeout (function () {
      window.scrollTo (0, 1);
    }, 50);
  }
}

window.addEventListener ('load', function () {
  if (!window.pageYOffset) {
    hideAddressBar ();
  }
});

var browser = (function () {
  var test = function (regexp) {
    return regexp.test (window.navigator.userAgent);
  };
  switch (true) {
    case test (/edge/i):
      return 'edge';
    case test (/opr/i) && (!!window.opr || !!window.opera):
      return 'opera';
    case test (/chrome/i) && !!window.chrome:
      return 'chrome';
    case test (/trident/i):
      return 'ie';
    case test (/firefox/i):
      return 'firefox';
    case test (/safari/i):
      return 'safari';
    default:
      return 'other';
  }
}) ();
var triggerdelta = 60;

if (browser == 'firefox') {
  triggerdelta = 0.5;
}

var delayInAddRemove = 700; //do not touch

function currentYPosition () {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

//elm is element, query is selected already

function elmYPosition (elm) {
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function smoothScroll (eID) {
  var startY = currentYPosition ();
  var stopY = elmYPosition (eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  // if (distance < 100) {
  //   scrollTo (0, stopY);
  //   return;
  // }
  var speed = Math.round (distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round (distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout ('window.scrollTo(0, ' + leapY + ')', timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    // window.addEventListener('wheel', scroll);
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout ('window.scrollTo(0, ' + leapY + ')', timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
  // window.addEventListener('wheel', scroll);
  return false;
}

var enablekeyboard = true;

window.onkeydown = checkKey;

function checkKey (e) {
  // document.body.requestFullscreen();

  e = e || window.event;

  if (enablekeyboard) {
    enablekeyboard = false;
    setTimeout (function () {
      this.enablekeyboard = true;
    }, delayInAddRemove);
    if (e.keyCode == '38') {
      if (current != 0) {
        current--;
        smoothScroll (container[current]);
      }
    } else if (e.keyCode == '40') {
      // snapScroll();
      if (current == container.length - 1) {
        current = 0;
      } else {
        current++;
      }

      smoothScroll (container[current]);
    }
  }
}

//not required vars

function scroll (event) {
  // document.body.requestFullscreen();

  if (event.deltaY < -1 * triggerdelta) {
    // event.preventDefault();
    // snapScroll();

    window.removeEventListener ('wheel', scroll);
    setTimeout (addlistener, delayInAddRemove);

    if (current != 0) {
      current--;
      smoothScroll (container[current]);
    }
  } else if (event.deltaY > triggerdelta) {
    // event.preventDefault();
    window.removeEventListener ('wheel', scroll);
    setTimeout (addlistener, delayInAddRemove);

    // snapScroll();
    if (current == container.length - 1) {
      current = 0;
    } else {
      current++;
    }

    smoothScroll (container[current]);
  }
}

window.addEventListener ('wheel', scroll);

function addlistener () {
  window.addEventListener ('wheel', scroll);
}

function touch (event) {
  console.log (event.touches[0].screenX);
  // document.body.requestFullscreen();
}

// document.addEventListener('touchstart', handleTouchStart, false);

var startX, startY, startTime, endTime;

document.addEventListener ('touchstart', touchstart);

function touchstart (event) {
  startTime = new Date ().getTime ();

  var touches = event.touches;
  if (touches && touches.length) {
    startY = touches[0].pageY;
    document.addEventListener ('touchmove', touchmove);
  }
}

// var touchdeltatrigger = 150;

function touchmove (event) {
  endTime = new Date ().getTime ();

  var touches = event.touches;
  if (touches && touches.length) {
    event.preventDefault ();
    // var deltaX = startX - touches[0].pageX;
    var deltaY = startY - touches[0].pageY;
    var speed = deltaY / (endTime - startTime);
    console.log (speed);

    if (speed >= 0.5) {
      if (current == container.length - 1) {
        current = 0;
      } else {
        current++;
      }

      smoothScroll (container[current]);
    }
    if (speed <= -0.5) {
      if (current != 0) {
        current--;
        smoothScroll (container[current]);
      }
    }
  }
}

// add line 494 to 496 to wheel event
