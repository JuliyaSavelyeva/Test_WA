$(document).ready(function () {
  $('.navbar-hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.navbar-list').
      stop(true, true).
      slideToggle(500);
  });
});