const arrow = document.querySelectorAll(".arrow");
const prev = document.querySelectorAll(".prev");
const s1 = document.querySelector(".s1");
const i1 = document.querySelector(".i1");
var img = prev.length - 4;
var click = 0;
let k = 2;
let p;
let q;
let i = 2;
let previmg = 2;
let curimg = 2;
let margin = [];
prev[2].classList.add("cur");
function setImg(i){
  return function(){
    s1.style.marginLeft =  margin[i]+"%";
    prev[k].classList.remove("cur");
    prev[curimg].classList.remove("cur");
    previmg = i;
    curimg = i;
    if(i<2){
      k = i+img;
      q = -75*(img-(2-i));
      prev[k].classList.add("cur");
    }
    else if(i>9){
      k = i%img;
      q = -75*(i-img-2);
      prev[k].classList.add("cur");
    }
    else{
      k = i;
      q = -75*(i-2);
      prev[k].classList.add("cur");
    }
    i1.style.marginLeft =  q+"px";

  }
}
function nextImg(){
  return function(){
    p = -1*Number(s1.style.marginLeft.slice(1,-1)) - 100/img;
    if(Number(s1.style.marginLeft.slice(1,-1))>=99*(img-1)/img){
      p = 0;
    }
    s1.style.marginLeft =  p+"%";
    q = -1*Number(i1.style.marginLeft.slice(1,-2)) - 75;
    if(Number(i1.style.marginLeft.slice(1,-2))>=75*(img-1)){
      q = 0;
    }
    i1.style.marginLeft =  q+"px";
    prev[curimg].classList.remove("cur");
    curimg = 2+((curimg-1)%img);
    prev[curimg].classList.add("cur");
  }
}
function prevImg(){
  return function(){
    p = -1*Number(s1.style.marginLeft.slice(1,-1)) + 100/img;
    if(Number(s1.style.marginLeft.slice(1,-1))<=99/img){
      p = -100*(img-1)/img;
    }
    s1.style.marginLeft =  p+"%";
    q = -1*Number(i1.style.marginLeft.slice(1,-2)) + 75;
    if(Number(i1.style.marginLeft.slice(1,-2))<=0){
      q = -75*(img-1);
    }
    i1.style.marginLeft =  q+"px";
    prev[curimg].classList.remove("cur");
    curimg = 2+((curimg-3+img)%img);
    console.log(curimg);
    prev[curimg].classList.add("cur");
  }
}
arrow[0].addEventListener("click", prevImg());
arrow[1].addEventListener("click", nextImg());
document.addEventListener("keydown", function(event){
  if(event.key === "ArrowRight"){
    p = -1*Number(s1.style.marginLeft.slice(1,-1)) - 100/img;
    if(Number(s1.style.marginLeft.slice(1,-1))>=99*(img-1)/img){
      p = 0;
    }
    s1.style.marginLeft =  p+"%";
    q = -1*Number(i1.style.marginLeft.slice(1,-2)) - 75;
    if(Number(i1.style.marginLeft.slice(1,-2))>=75*(img-1)){
      q = 0;
    }
    i1.style.marginLeft =  q+"px";
    prev[curimg].classList.remove("cur");
    curimg = 2+((curimg-1)%img);
    prev[curimg].classList.add("cur");
  }
  if(event.key === "ArrowLeft"){
    p = -1*Number(s1.style.marginLeft.slice(1,-1)) + 100/img;
    if(Number(s1.style.marginLeft.slice(1,-1))<=99/img){
      p = -100*(img-1)/img;
    }
    console.log(Number(s1.style.marginLeft.slice(1,-1)));
    s1.style.marginLeft =  p+"%";
    q = -1*Number(i1.style.marginLeft.slice(1,-2)) + 75;
    if(Number(i1.style.marginLeft.slice(1,-2))<=0){
      q = -75*(img-1);
    }
    i1.style.marginLeft =  q+"px";
    prev[curimg].classList.remove("cur");
    curimg = 2+((curimg-3+img)%img);
    console.log(curimg);
    prev[curimg].classList.add("cur");
  }
});

for(i=0;i<img+4;i++){

  margin.push(-1*Math.abs((i-2+img)%img)*100/img);
  prev[i].addEventListener("click", setImg(i));
  // console.log(margin[i]);
}

// for swipe

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches;
}
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            p = -1*Number(s1.style.marginLeft.slice(1,-1)) - 100/img;
            if(Number(s1.style.marginLeft.slice(1,-1))>=99*(img-1)/img){
              p = 0;
            }
            s1.style.marginLeft =  p+"%";
            q = -1*Number(i1.style.marginLeft.slice(1,-2)) - 75;
            if(Number(i1.style.marginLeft.slice(1,-2))>=75*(img-1)){
              q = 0;
            }
            i1.style.marginLeft =  q+"px";
            prev[curimg].classList.remove("cur");
            curimg = 2+((curimg-1)%img);
            prev[curimg].classList.add("cur");
        } else {
            /* right swipe */
            p = -1*Number(s1.style.marginLeft.slice(1,-1)) + 100/img;
            if(Number(s1.style.marginLeft.slice(1,-1))<=99/img){
              p = -100*(img-1)/img;
            }
            console.log(Number(s1.style.marginLeft.slice(1,-1)));
            s1.style.marginLeft =  p+"%";
            q = -1*Number(i1.style.marginLeft.slice(1,-2)) + 75;
            if(Number(i1.style.marginLeft.slice(1,-2))<=0){
              q = -75*(img-1);
            }
            i1.style.marginLeft =  q+"px";
            prev[curimg].classList.remove("cur");
            curimg = 2+((curimg-3+img)%img);
            console.log(curimg);
            prev[curimg].classList.add("cur");
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}
