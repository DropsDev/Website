$(document).ready(function () {
  $('.modal-button').click(function () {
    $('#modal-container').removeAttr('class').addClass("one");
    $('body').addClass('modal-active');
  })

  $('#modal-container .close').click(function () {
    $("#modal-container").addClass('out');
    $('body').removeClass('modal-active');
  });

  /*$(window).on("scroll", function () {
    if ($(document).scrollTop() > 600) 
    {
      $("header").removeClass("sticked-top");
      $("header").addClass("sticked");
    }
    else
    {
      $("header").removeClass("sticked");
      $("header").addClass("sticked-top");
    }
  });*/
})
