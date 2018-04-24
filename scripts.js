
$('.icon-hamburger').on('click', function() {
  console.log('You clicked the hamburger!');
  $('.c-menu--slide-left').css('left', '0');
  // $('body').css('background-color', 'rgba(0,0,0,0.4)');
})

$('.backContainer-left').on('click', function() {
  console.log('You clicked the back button!');
  $('.c-menu--slide-left').css('left', '-360px');
  // $('body').css('background-color', 'white');
})

$(document).ready(function(){
  $('.slick-initialized').slick({
  accessbility: true,
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});
