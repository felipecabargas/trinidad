(function(window, $, undefined) {

  $.trinidad = function (config) {
    $.trinidad.config = $.extend({}, $.trinidad.config, config);

    if ($.isEmptyObject( $.trinidad.config.resolutions )) {
      throw new Error('Trinidad needs at least one resolution to heavy metal.');
      return;
    }

    if ($.trinidad.config.quiet) {
      console.log("My what a sunshine in Trinidad\nHope you're okay light years away\nMy what a heat wave in Trinidad\nHope you don't mind if I stay");
    }
  }

  $.trinidad.config = {
    quiet: false,
    resolution: {}
  }

})(window, jQuery);
