$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 1
  });

  jQuery(document).ready(function(){
    var $container = $('#container');
    $container.imagesLoaded(function(){
        $container.masonry({
        itemsSelector: '.thumbnail',
        isFitWidth: true
        }).resize();
    }); 
    })