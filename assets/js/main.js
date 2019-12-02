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

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,

    responsive: [{
  
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
  
      }, {
  
        breakpoint: 820,
        settings: {
          slidesToShow: 1
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick"
  
      }]
  });
});