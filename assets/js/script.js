const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = document.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-2-line");
});

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open');

    menuBtnIcon.setAttribute("class", "ri-menu-2-line");
});


const navSearch = document.getElementById('nav-search');

navSearch.addEventListener('click', (e) => {
    navSearch.classList.toggle('open');
});

// Scroll reveal
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".deals__card",{
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".about__image img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about__card",{
    duration: 1000,
    interval: 500,
    delay: 500,
});

// Vehicles slider
let swiperCards = new Swiper('.card__content', {

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
