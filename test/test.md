---
layout: nil
yepnope:
- load: http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
  complete: |
      if (!window.jQuery)
                  yepnope('local/jquery.min.js');
- load: jquery.plugin.js
  complete: >
    jQuery(function () {
                jQuery('div').plugin();
            });
---

{% if page.yepnope %}
<pre>
yepnope([{ {% for a in page.yepnope %}
    0: 0{% if a.test %},
    test: {{ a.test }}{% endif %}{% if a.yep %},
    yep: {{ a.yep }}{% endif %}{% if a.nope %},
    nope: {{ a.nope }}{% endif %}{% if a.both  %},
    both: {{ a.both }}{% endif %}{% if a.load  %},
    load: "{{ a.load }}"{% endif %}{% if a.callback  %},
    callback: {{ a.callback }}{% endif %}{% if a.complete  %},
    complete: function() { {{ a.complete }} }{% endif %}{% if forloop.last %}
}{% else %}
}, { {% endif %}{% endfor %}
}]);
</pre>
{% endif %}

{{ site.time }}