(function($) {
  // Example of togglecontrols:
  // $('.js-toggle').togglecontrols();
  // <a href="#" class="js-toggle" data-togglecontrols='{"toggleClass":"is-hidden hidden-xs", "selector":".panel"}'>

  $.fn.togglecontrols = function(options) {

    var $el = $(this);
    var defaults = $.extend({
      toggleClass: 'is-hidden',
      targetActiveClass: 'is-active',
      eventName:'click',
      selector:'.dialog'
    }, options);

    $($el).on(defaults.eventName, function(e){
      var controls = $(e.target).data('togglecontrols');
      var targetEl = e.target;
      if(!controls) {
        controls = $(e.target.parentNode).data('togglecontrols');
        targetEl = e.target.parentNode;
        if(!controls) {
          controls = $(e.target.parentNode.parentNode).data('togglecontrols');
          targetEl = e.target.parentNode.parentNode;
        }
      }
      var vals = $.extend({}, defaults, controls);
      $(vals.selector).toggleClass(vals.toggleClass);
      $(targetEl).toggleClass(vals.targetActiveClass);
    });
  };
}(jQuery));
