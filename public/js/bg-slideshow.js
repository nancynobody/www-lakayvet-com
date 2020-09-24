/*
* Create a slideshow with the background images
*/
! function (t) {

  "use strict";

  var a = t("[data-slides]"),
    ni = 0,
    s = a.data("slides"),
    e = s.length,
    n = function() {
      // if (ni >= a.length) {
      if (ni >= s.length-1) {
        ni = 0
      } else {
        ni++;
      };
      a.css("background-image", 'url("' + s[ni] + '")').show(0, function() {
        setTimeout(n, 5e3)
      })
    };
  n()
}(jQuery);
