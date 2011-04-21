---
yepnope:
- load: http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
  complete: >
    if (!window.jQuery)
      yepnope('local/jquery.min.js');
- load: jquery.plugin.js
  complete: >
    jQuery(function () {
      jQuery('div').plugin();
    });
---

{{ page.yepnope }}

[online yaml parser](http://yaml-online-parser.appspot.com/?yaml=yepnope%3A%0A-+load%3A+http%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.5.1%2Fjquery.min.js%0A++complete%3A+%3E%0A++++if+%28!window.jQuery%29%0A++++++yepnope%28%27local%2Fjquery.min.js%27%29%3B%0A-+load%3A+jquery.plugin.js%0A++complete%3A+%3E%0A++++jQuery%28function+%28%29+{%0A++++++jQuery%28%27div%27%29.plugin%28%29%3B%0A++++}%29%3B%0A&type=json)