const menu = document.querySelector('.menu');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

menu.addEventListener('click', ()=> {
  navlinks.classList.toggle("open");
  links.forEach(link =>{
    link.classList.toggle("fade");
  });
});
