---
arr: [1, 2, 3]
str: a, b, c
layout: nil
yepnope:
- load: "'http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'"
  complete: |
    function() {
        if (!window.jQuery)
          yepnope('local/jquery.min.js');
    }
- load: "'jquery.plugin.js'"
  complete: >
    function() {
        jQuery(function () {
            jQuery('div').plugin();
        });
    }
---

{% if page.arr[0] %}{{ page.arr[0] }}{% else %}no arr{% endif %}
{% if page.str[0] %}{{ page.str[0] }}{% else %}no str{% endif %}

{% if page.yepnope %}
<pre>
yepnope([{ {% for a in page.yepnope %}
    0: 0{% if a.test %},
    test: {{ a.test }}{% endif %}{% if a.yep %},
    yep: {% if a.yep[0] %}[{% for b in a.yep %}{{ b }}{% unless b.last %},{% endfor %}]{% else %}"{{ a.yep }}"{% endif %}{% if a.nope %},
    nope: {% if a.nope[0] %}[{% for b in a.nope %}{{ b }}{% unless b.last %},{% endfor %}]{% else %}"{{ a.nope }}"{% endif %}{% if a.both  %},
    both: {% if a.both[0] %}[{% for b in a.both %}{{ b }}{% unless b.last %},{% endfor %}]{% else %}"{{ a.both }}"{% endif %}{% if a.load  %},
    load: {% if a.load[0] %}[{% for b in a.load %}{{ b }}{% unless b.last %},{% endfor %}]{% else %}"{{ a.load }}"{% endif %}{% if a.callback  %},
    callback: {{ a.callback }}{% endif %}{% if a.complete  %},
    complete: {{ a.complete }}{% endif %}{% if forloop.last %}
}{% else %}
}, { {% endif %}{% endfor %}
}]);
</pre>
{% endif %}

{{ site.time }}