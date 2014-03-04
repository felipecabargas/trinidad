(function(window, $, undefined) {

  var sunshine = {
    bright: function () {
      sunshine.previousAndActualSize = [];

      $(window).on('resize', this.checkIfGrowingOrDecreasing);
    },

    checkIfGrowingOrDecreasing: function (e) {
      sunshine.previousAndActualSize[0] = e.target.innerWidth;

      if (sunshine.previousAndActualSize[1]) {
        if (sunshine.previousAndActualSize[0] > sunshine.previousAndActualSize[1]) {
          console.log('window size is growing');
        }else{
          console.log('window size is decreasing');
        }
      }

      sunshine.previousAndActualSize[1] = sunshine.previousAndActualSize[0];
    }
  } // sunset

  $.trinidad = function (config) {
    $.trinidad.config = $.extend({}, $.trinidad.config, config);

    if ($.isEmptyObject( $.trinidad.config.resolutions )) {
      throw new Error('Trinidad needs at least one resolution to heavy metal.');
      return;
    }

    if ($.trinidad.config.quiet) {
      console.log("My what a sunshine in Trinidad\nHope you're okay light years away\nMy what a heat wave in Trinidad\nHope you don't mind if I stay");
    }

    sunshine.bright();
  }

  $.trinidad.config = {
    quiet: false,
    resolution: {}
  }

})(window, jQuery);
