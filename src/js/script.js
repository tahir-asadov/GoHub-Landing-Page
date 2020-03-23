console.log('script');
var b;
$(document).ready(function() {
  $('.image-popup').magnificPopup({type:'image'});
  AOS.init();
  $( '.hamburger' ).click( function(){
    $( '.hamburger-menu' ).slideToggle();
  } );
});