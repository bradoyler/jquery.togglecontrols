(function($) {
  // Example of togglecontrols:
  // $('.js-toggle').togglecontrols();
  // <a href="#" class="js-toggle" data-togglecontrols='{"toggleClass":"is-hidden hidden-xs", "selector":".panel"}'>

  $.fn.togglecontrols = function(options) {

    var $el = $(this);
    var defaults = $.extend({
      toggleClass: 'is-open',
      targetActiveClass: 'is-active',
      eventName:'click',
      selector:'.js-toggle'
    }, options);

    $($el).on(defaults.eventName, function(e){
      var controls = $(e.target).data('togglecontrols');
      var vals = $.extend({}, defaults, controls);
      $(vals.selector).toggleClass(vals.toggleClass);
      $(e.target).toggleClass(vals.targetActiveClass);
    });
  };
}(jQuery));
