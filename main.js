const menuBtn = document.querySelector('.hamburger');
const mobilemenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener("click", function (){
    menuBtn.classList.toggle('is-active');
    mobilemenu.classList.toggle('is-active');
});

var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        
        520: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        1000: {
            slidesPerView: 4,
        },
    },
  });