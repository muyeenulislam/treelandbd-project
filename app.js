// *************set date************
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

// *************nav toggle**********
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

// ***********nav fixed***********
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

// *******************smooth scroll**********
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.classList.remove('show-links');
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // position
    let position;
    if (navbar.classList.contains('fixed')) {
      position = element.offsetTop - 62;
    } else {
      position = element.offsetTop - 124;
    }
    if (window.innerWidth < 992) {
      if (navbar.classList.contains('fixed')) {
        position = element.offsetTop - 62;
      } else {
        position = element.offsetTop - 352 - 62;
      }
    }
    //window scroll to
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});

//menu fade animation

const nav = document.querySelector('.navbar');

const handleHover = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.navbar').querySelectorAll('.nav-link');
    const logo = link.closest('.navbar').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    // logo.style.opacity = this;
  }
};

// passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.3));
nav.addEventListener('mouseout', handleHover.bind(1));

//footer
const footer = document.querySelector('.footer');

//footer link fade animation
const footerLinkHover = function (e) {
  if (e.target.classList.contains('footer-link')) {
    const link = e.target;
    const siblings = link.closest('.footer').querySelectorAll('.footer-link');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// passing "argument" into handler
footer.addEventListener('mouseover', footerLinkHover.bind(0.3));
footer.addEventListener('mouseout', footerLinkHover.bind(1));

// preloader
const loader = document.querySelector('.preloader');
window.addEventListener('load', () => {
  loader.style.display = 'none';
});
