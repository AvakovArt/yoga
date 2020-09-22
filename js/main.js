$(document).ready(function () {
  var slider = new Swiper(".slider__container", {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    autoHover: true,

    // Navigation arrows
    navigation: {
      nextEl: ".slider__content-button--next",
      prevEl: ".slider__content-button--prev",
    },
    // breakpoints: {
    //   320: { slidesPerView: 1 },
    //   500: { slidesPerView: 2 },
    //   576: { slidesPerView: 2 },
    //   768: { slidesPerView: 2 },
    //   992: { slidesPerView: 2 },
    //   // 1140: {},
    //   1500: {},
    // },
  });
  // $(".navbar__burger").click(function (event) {
  //   $(".navbar__burger,.navbar__links").toggleClass("open");
  //   $("body").toggleClass("lock");
  // });
});
