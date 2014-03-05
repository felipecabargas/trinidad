$(function() {

  $.trinidad({
    resolutions: {
      'mobile': '<500',
      'medium': '>501',
      'large': '>768'
    }
  });

  // tested on Safari 7.0.2

  $(window).on('windowSizeGrow', function () {
    $('#whats-happening h2').text('Window is growing so fast :\')');
  });

  $(window).on('windowSizeDecrease', function () {
    $('#whats-happening h2').text('Window is going down :(');
  });

});
