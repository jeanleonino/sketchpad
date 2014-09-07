// Sketchpad as a global variable, so it becomes browser accessible
var sketchpad = null;
$(document).ready(function() {
  sketchpad = new Sketchpad({
    element: '#sketchpad',
    width: window.innerWidth,
    height: window.innerHeight,
  });
});

$(window).on('resize', function() {
  sketchpad.reset();
});
