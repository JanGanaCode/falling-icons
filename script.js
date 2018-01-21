var icons = $('.fa');  
    siteHeight = $('body').height();

icons.css({
  position: 'relative'
})

icons.on('mouseenter', function(){
  $('.hoverMe').fadeOut(1500);
  $(this).animate({ top: 1500}, 2000);
})