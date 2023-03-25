$('.slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
