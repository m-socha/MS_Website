define(['jquery'], function($) {
  function setupAnimation($selector, finalState, animateTime,
    initialState, deanimateTime, subSelectorStr) {
    $selector.mouseenter(function() {
      var $selectorToAnimate = subSelectorStr ? $(this).find(subSelectorStr) : $(this);
      $selectorToAnimate.stop();
      $selectorToAnimate.animate(finalState, animateTime);
    });
    $selector.mouseleave(function() {
      var $selectorToAnimate = subSelectorStr ? $(this).find(subSelectorStr) : $(this);
      $selectorToAnimate.stop();
      $selectorToAnimate.animate(initialState, deanimateTime);
    });
  }

  return {setupAnimation: setupAnimation};
});
