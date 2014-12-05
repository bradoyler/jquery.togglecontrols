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
      selector:'.tc-dialog',
      activeTarget:false
    }, options);

    $($el).on(defaults.eventName, function(e){
      var data = $(e.target).data('togglecontrols');
      var targetEl = e.target;
      if(!data) {
        data = $(e.target.parentNode).data('togglecontrols');
        targetEl = e.target.parentNode;
        if(!data) {
          data = $(e.target.parentNode.parentNode).data('togglecontrols');
          targetEl = e.target.parentNode.parentNode;
          if(!data){
            data={};
            targetEl = e.target;
          }
        }
      }
      var controls = $.extend({}, defaults, data);
      $(controls.selector).toggleClass(controls.toggleClass);

      if(controls.activeTarget) {
        $(targetEl).toggleClass(controls.targetActiveClass);
      }
    });
  };
}(jQuery));
