(function(window, $, undefined) {

  // private
  var sunshine = {
    bright: function () {
      this.previousAndActualSize = [];
      this.decreasingSizes = [];
      this.growingSizes = [];
      this.standardSizes = [];

      $(window).on('resize', this.checkIfGrowingOrDecreasing);
    },

    checkIfGrowingOrDecreasing: function (e) {
      sunshine.previousAndActualSize[0] = e.target.innerWidth;

      if (sunshine.previousAndActualSize[1]) {
        if (sunshine.previousAndActualSize[0] > sunshine.previousAndActualSize[1]) {
          // screen size is growing
          $(window).trigger('windowSizeGrow');
        }else{
          // screen size is decreasing
          $(window).trigger('windowSizeDecrease');
        }
      }

      sunshine.previousAndActualSize[1] = sunshine.previousAndActualSize[0];
    }
  }; // sunset

  // public
  $.trinidad = function (config) {
    $.trinidad.config = $.extend({}, $.trinidad.config, config);

    if ($.isEmptyObject( $.trinidad.config.resolutions )) {
      throw new Error('Trinidad needs at least one resolution to heavy metal.');
      return;
    }

    if ($.trinidad.config.quiet) {
      console.log("My what a sunshine in Trinidad\nHope you're okay light years away\nMy what a heat wave in Trinidad\nHope you don't mind if I stay");
    }

    sunshine.bright(); // make Trinidad bright
  }

  $.trinidad.config = {
    quiet: true,
    resolution: {}
  };

})(window, jQuery);
