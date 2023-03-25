const swiper = new Swiper('.swiper', {
  // кількість слайдів на сторінці
  slidesPerView: 1,
  loop: true,
  // відступ між слайдами
  spaceBetween: 24,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Брейк-поінти
  breakpoints: {
    480: {
      loop: false,
      slidesPerView: 2,
    },
    768: {
      loop: false,
      slidesPerView: 4,
    },
  },
});
