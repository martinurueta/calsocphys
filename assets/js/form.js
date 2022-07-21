$('.input').on("focus blur", function() {
    if ($(this).val().length > 0 || $('.input').is(':focus')) {
      $(this).siblings().addClass('active');
      $(this).parent().addClass('active');
  
    } else {
      $(this).siblings().removeClass('active').addClass('not');
      $(this).parent().removeClass('active').addClass('not');
    }
  
    if ($(this).val().length < 2 && $('.input').is(':focus') != true && $(this).is(':invalid') || $(this).is(':invalid') && $('.input').is(':focus') != true) {
      $(this).parent().addClass('invalid');
      $(this).siblings().addClass('invalid');
    } else {
      $(this).parent().removeClass('invalid');
      $(this).siblings().removeClass('invalid');
    }
  
    if ($(this).val().length > 0 && $(this).is(':valid') && $('.input').is(':focus') != true) {
      $(this).parent().addClass('valid');
      $(this).siblings().addClass('valid');
    } else {
      $(this).parent().removeClass('valid');
      $(this).siblings().removeClass('valid');
    }
  
  });
  
  $('.input').blur(enableBtn);
  
  function enableBtn() {
    if ($('#b').val().length < 2 || $('#c').val().length < 2 || $('#a').val().length < 2 || $('.input').parent('.input-wrap').hasClass('invalid') == true )
        {
      $("#confirm").prop("disabled", true);
    } else {
      $("#confirm").prop("disabled", false);
    }
  }
  enableBtn();
  
//   $('#confirm').click(function() {
//     $('form').submit(function(event) {
//       $('.card').addClass('end');
//       $('.ending').addClass('showed');
//       event.preventDefault();
//     });
//   });