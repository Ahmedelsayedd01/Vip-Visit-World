$(document).ready(function () {
  /* INITIALIZE AOS */
  AOS.init({
    duration: 900,
  });
  /* Splide Liberary */
  var splideHero = new Splide(".heroSec .splide", {
    autoplay: true,
    arrows: false,
    pagination: false,
    interval: 3000,
    speed: 3000,
    type: "loop",
    perPage: 1,
    focus: 0,
    // gap: "2em",
    omitEnd: true,
  });
  var splideReviews = new Splide(".rightReviewSec .splide", {
    autoplay: true,
    arrows: false,
    interval: 2000,
    speed: 2000,
    type: "loop",
    perPage: 3,
    breakpoints: {
      990: {
        perPage: 1,
      },
      1200: {
        perPage: 3,
      },
      // 1024: {
      //   perPage: 3,
      // },
    },
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });

  splideHero.mount();
  splideReviews.mount();

  /* Show && hide menu */
  $(".showMenu").click(function () {
    $(this).addClass("d-none");
    $(".hideMenu").removeClass("d-none");
    $(".menuMobil").css("right", "0%");
  });
  /* ######### */
  $(".hideMenu").click(function () {
    $(this).addClass("d-none");
    $(".showMenu").removeClass("d-none");
    $(".menuMobil").css("right", "100%");
  });
});
