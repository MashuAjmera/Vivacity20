var container = document.querySelectorAll(".container");
var current = 0;



var browser = (function () {
    var test = function (regexp) {
        return regexp.test(window.navigator.userAgent);
    }
    switch (true) {
        case test(/edge/i):
            return "edge";
        case test(/opr/i) && (!!window.opr || !!window.opera):
            return "opera";
        case test(/chrome/i) && !!window.chrome:
            return "chrome";
        case test(/trident/i):
            return "ie";
        case test(/firefox/i):
            return "firefox";
        case test(/safari/i):
            return "safari";
        default:
            return "other";
    }
})();
var triggerdelta = 60;

if (browser == "firefox") {
    triggerdelta = 0.5;
};



var delayInAddRemove = 800; //do not touch
// window.onload() = function () {
//     var container = document.querySelectorAll(".container");

// }



// function snapScroll() {
//     // get scrollheight
//     var wndwHeight = window.innerHeight;
//     var crntScrl = window.pageYOffset || document.documentElement.scrollTop;
//     var scrlAmnt = (crntScrl % wndwHeight) / wndwHeight; // gives the percentage of scroll within the window
//     var crntScrn = Math.floor(crntScrl / wndwHeight); // Gives the number of the current screen

//     if (scrlAmnt <= snapTop) {
//         var scrlTo = wndwHeight * crntScrn;
//         smoothScroll(scrlTo);
//     } else if (scrlAmnt >= snapBtm) {
//         var scrlTo = wndwHeight * (crntScrn + 1);
//         smoothScroll(1300);
//     }
// }


// function currentYPosition() {
//     // Firefox, Chrome, Opera, Safari
//     if (self.pageYOffset) return self.pageYOffset;
//     // Internet Explorer 6 - standards mode
//     if (document.documentElement && document.documentElement.scrollTop)
//         return document.documentElement.scrollTop;
//     // Internet Explorer 6, 7 and 8
//     if (document.body.scrollTop) return document.body.scrollTop;
//     return 0;
// }

// function elmYPosition(eID) {
//     var elm = document.getElementById(eID);
//     var y = elm.offsetTop;
//     var node = elm;
//     while (node.offsetParent && node.offsetParent != document.body) {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     }
//     return y;
// }

// function smoothScroll(eID) {
//     var startY = currentYPosition();
//     var stopY = elmYPosition(eID);
//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//         scrollTo(0, stopY);
//         return;
//     }
//     var speed = Math.round(distance / 100);
//     if (speed >= 20) speed = 20;
//     var step = Math.round(distance / 25);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     if (stopY > startY) {
//         for (var i = startY; i < stopY; i += step) {
//             setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//             leapY += step;
//             if (leapY > stopY) leapY = stopY;
//             timer++;
//         }
//         return;
//     }
//     for (var i = startY; i > stopY; i -= step) {
//         setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//         leapY -= step;
//         if (leapY < stopY) leapY = stopY;
//         timer++;
//     }
//     return false;
// }




function currentYPosition() {
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

function elmYPosition(elm) {

    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        // window.addEventListener('wheel', scroll);
        return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
    // window.addEventListener('wheel', scroll);
    return false;
}







// function smoothScroll(stopY) {
//     var startY = window.pageYOffset || document.documentElement.scrollTop;


//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 10) {
//         scrollTo(0, stopY);
//         return;
//     }
//     var speed = Math.round(distance / 70);
//     if (speed >= 30) speed = 20;
//     var step = Math.round(distance / 25);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     if (stopY > startY) {
//         for (var i = startY; i < stopY; i += step) {
//             setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//             leapY += step;
//             if (leapY > stopY) leapY = stopY;
//             timer += 0.7;
//         }
//         return;
//     }
//     for (var i = startY; i > stopY; i -= step) {
//         setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
//         leapY -= step;
//         if (leapY < stopY) leapY = stopY;
//         timer += 0.7;
//     }
// }



// document.querySelector("#swipezone").addEventListener("touchstart", startTouch, false);
// document.querySelector("#swipezone").addEventListener("touchmove", moveTouch, false);

// // Swipe Up / Down / Left / Right
// var initialX = null;
// var initialY = null;

// function startTouch(e) {
//     initialX = e.touches[0].clientX;
//     initialY = e.touches[0].clientY;
//     mobile = true;
// };

// function moveTouch(e) {
//     if (initialX === null) {
//         return;
//     }

//     if (initialY === null) {
//         return;
//     }

//     var currentX = e.touches[0].clientX;
//     var currentY = e.touches[0].clientY;

//     var diffX = initialX - currentX;
//     var diffY = initialY - currentY;

//     var wndwHeight = window.innerHeight;
//     var crntScrl = window.pageYOffset || document.documentElement.scrollTop;
//     var scrlAmnt = (crntScrl % wndwHeight) / wndwHeight; // gives the percentage of scroll within the window
//     var crntScrn = Math.floor(crntScrl / wndwHeight); // Gives the number of the current screen


//     if (Math.abs(diffX) > Math.abs(diffY)) {
//         // sliding horizontally
//         if (diffX > 0) {
//             // swdocument.querySelector("#swipezone") 
//             console.log("swiped left");
//         } else {
//             // swiped right
//             console.log("swiped right");
//         }
//     } else {
//         // sliding vertically
//         if (diffY > 0) {
//             // swiped up
//             var scrlTo = wndwHeight * (crntScrn + 1);
//             // console.log("scrollto " + scrlTo);
//             smoothScroll(scrlTo);
//         } else {
//             // swiped down
//             var scrlTo = wndwHeight * (crntScrn - 1);
//             // console.log("scrollto " + scrlTo);
//             smoothScroll(scrlTo);
//         }
//     }

//     initialX = null;
//     initialY = null;

//     e.preventDefault();
// };

var enablekeyboard = true;

window.onkeydown = checkKey;


function checkKey(e) {
    // document.body.requestFullscreen();



    e = e || window.event;


    if (enablekeyboard) {
        enablekeyboard = false;
        setTimeout(function () {
            this.enablekeyboard = true;
        }, delayInAddRemove);
        if (e.keyCode == '38') {



            if (current != 0) {
                current--;
                smoothScroll(container[current]);
            }
        } else if (e.keyCode == '40') {


            // snapScroll();
            if (current == container.length) {
                current = 0;
            } else {
                current++;
            }

            smoothScroll(container[current]);
        }
    }

}






//not required vars
// var timeout;
// var snapTop = 0.7;
// var snapBtm = 0.7;

// var enable = true;
// if (enable) {




function scroll(event) {
    // document.body.requestFullscreen();





    if (event.deltaY < -1 * triggerdelta) {
        // event.preventDefault();
        // snapScroll();

        window.removeEventListener('wheel', scroll);
        setTimeout(addlistener, delayInAddRemove);


        if (current != 0) {
            current--;
            smoothScroll(container[current]);
        }


    } else if (event.deltaY > triggerdelta) {
        // event.preventDefault();
        window.removeEventListener('wheel', scroll);
        setTimeout(addlistener, delayInAddRemove);

        // snapScroll();
        if (current == container.length) {
            current = 0;
        } else {
            current++;
        }

        smoothScroll(container[current]);
    }

}


window.addEventListener('wheel', scroll);



function addlistener() {
    console.log("added");
    window.addEventListener('wheel', scroll);
}

function touch(event) {
    console.log(event.touches[0].screenX);
    // document.body.requestFullscreen();
}

// window.addEventListener('touchmove', touch);



document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);


var yDown = null;

function getTouches(evt) {
    return evt.touches ||
        evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];

    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!yDown) {
        return;
    }


    var yUp = evt.touches[0].clientY;


    var yDiff = yDown - yUp;


    if (yDiff > 0) {
        /* up swipe */
        console.log("up");
        if (current == container.length) {
            current = 0;
        } else {
            current++;
        }

        smoothScroll(container[current]);



    } else {
        /* down swipe */
        console.log("down");
        if (current != 0) {
            current--;
            smoothScroll(container[current]);
        }
    }



    yDown = null;
};

// }
