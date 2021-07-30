//滑動
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//LIGHTBOX
lightbox.option({
resizeDuration: 200,
wrapAround: true,
});
