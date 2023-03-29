new Swiper('.swiper', {
  // кількість слайдів на сторінці
  slidesPerView: 1,

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
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.swiper-modal', {
  slidesPerView: 1,
  spaceBetween: 24,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination-modal',
    clickable: true,
  },

  breakpoints: {
    400: {
      slidesPerView: 2,
    },

    600: {
      slidesPerView: 3,
    },
  },
});
