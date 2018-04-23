 $(() => {
   slickInit();
   hamburgerClick();
 })
function slickInit() {
   $('.slick-track').slick({
     accessbility: true,
     arrows: true,
  });
}
function hamburgerClick() {
  $('icon-hamburger').click({
    openLeftNav();
  })
}
function openLeftNav() {
   console.log("Heard!");
   $('c-menu--slide-left').css('width', '250px');
};
