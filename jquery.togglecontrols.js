(function($) {
  // Example of togglecontrols:
  // $('.js-toggle').togglecontrols();
  // <a href="#" class="js-toggle" data-togglecontrols='{"toggleClass":"is-hidden hidden-xs", "selector":".panel"}'>

  $.fn.togglecontrols = function(options) {

    var $el = $(this);
    var defaults = $.extend({
      toggleClass: 'is-open',
      targetActiveClass: 'is-active',
      eventName:'click'
    }, options);

    $($el).on(defaults.eventName, function(e){
      var controls = $(e.target).data('togglecontrols');

      if(controls.toggleClass) {
        $(controls.selector).toggleClass(controls.toggleClass);
      } else {
        $(controls.selector).toggleClass(defaults.toggleClass);
      }

      if(controls.targetActiveClass) {
        $(e.target).toggleClass(controls.targetActiveClass);
      } else {
        $(e.target).toggleClass(defaults.targetActiveClass);
      }

    });
  };
}(jQuery));
