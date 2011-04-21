---
layout: nil
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

yepnope([{
{% for a in page.yepnope %}
    load: "{{ a.load }}",
    complete: "{{ a.complete }}"
}, {
}]);
{% endfor %}

{{ site.time }}