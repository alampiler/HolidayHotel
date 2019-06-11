$('.slider_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav',

});
$('.slider_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider_main',
  centerMode: false,
  variableWidth: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [

  ]
});