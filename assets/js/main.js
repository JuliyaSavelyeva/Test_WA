$(document).ready(function () {
  $('.navbar-hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.navbar-list').
      stop(true, true).
      slideToggle(500);
  });

  $('.fade').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });
});