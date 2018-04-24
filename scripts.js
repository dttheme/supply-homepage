 $(() => {
   slickInit();
 })


function slickInit() {
   $('.slick-track').slick({
     accessbility: true,
     arrows: true,
  });
}

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
