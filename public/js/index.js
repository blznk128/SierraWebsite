$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 4
  });