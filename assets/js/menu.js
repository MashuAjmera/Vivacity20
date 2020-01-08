const menu = document.querySelector ('.menu');
const navlinks = document.querySelector ('.nav-links');
const links = document.querySelectorAll ('.nav-links li');
const navlinkstop = document.querySelector ('.nav-links-top');
const linkstop = document.querySelectorAll ('.nav-links-top li');
const navlinksbottom = document.querySelector ('.nav-links-bottom');
const linksbottom = document.querySelectorAll ('.nav-links-bottom li');
const navlinkstopmid = document.querySelector ('.nav-links-top-mid');
const navlinksbottommid = document.querySelector ('.nav-links-bottom-mid');
// const mainBody = document.querySelector('.mainBody');
const bar3 = document.querySelector ('.bar3');

for (var o = 1; o <= 10; o++) {
  var t = 'menuAfterClick' + o;
  document.querySelector ('.' + t).addEventListener ('click', menuToggle);
  menu.addEventListener ('mouseenter', () => {
    bar3.classList.add ('hvr');
  });
  menu.addEventListener ('mouseleave', () => {
    bar3.classList.remove ('hvr');
  });
}

function menuToggle () {
  //mainBody.classList.toggle("blur");
  navlinks.classList.toggle ('open');
  links.forEach (link => {
    link.classList.toggle ('fade');
  });
  navlinkstop.classList.toggle ('open');
  linkstop.forEach (link => {
    link.classList.toggle ('fade');
  });
  navlinksbottom.classList.toggle ('open');
  linksbottom.forEach (link => {
    link.classList.toggle ('fade');
  });
  navlinkstopmid.classList.toggle ('open');
  navlinksbottommid.classList.toggle ('open');
}

menu.addEventListener ('click', menuToggle);

menu.addEventListener ('mouseenter', () => {
  bar3.classList.add ('hvr');
});
menu.addEventListener ('mouseleave', () => {
  bar3.classList.remove ('hvr');
});
