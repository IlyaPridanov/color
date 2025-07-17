$(document).ready(function() {
  const captionBtn = $('.card-text__caption-row.toggle');

  captionBtn.on('click',function(){
    $(this).toggleClass('active').next().slideToggle();
  })
});
