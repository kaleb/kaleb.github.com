---
arr: [1, 2, 3]
str: a, b, c
hsh: {a: 1, b: 2}
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

{{ page.arr | first }}

{{ page.str | first }}

{{ page.hsh | first }}

<pre>{{ page.hsh }}</pre>

<hr>

{% if page.yepnope %}
<pre>
yepnope([{ {% for a in page.yepnope %}
    0: 0{% if a.test %},
    test: {{ a.test }}{% endif %}{% if a.yep %},
    yep: {% if a.yep and a.yep[0] %}[{% for b in a.yep %}{{ b }}{% unless b.last %},{% endunless %}{% endfor %}]{% else %}"{{ a.yep }}"{% endif %}{% endif %}{% if a.nope %},
    nope: {% if a.nope and a.nope[0] %}[{% for b in a.nope %}{{ b }}{% unless b.last %},{% endunless %}{% endfor %}]{% else %}"{{ a.nope }}"{% endif %}{% endif %}{% if a.both  %},
    both: {% if a.both and a.both[0] %}[{% for b in a.both %}{{ b }}{% unless b.last %},{% endunless %}{% endfor %}]{% else %}"{{ a.both }}"{% endif %}{% endif %}{% if a.load  %},
    load: {% if a.load and a.load[0] %}[{% for b in a.load %}{{ b }}{% unless b.last %},{% endunless %}{% endfor %}]{% else %}"{{ a.load }}"{% endif %}{% endif %}{% if a.callback  %},
    callback: {{ a.callback }}{% endif %}{% if a.complete  %},
    complete: {{ a.complete }}{% endif %}{% if forloop.last %}
}{% else %}
}, { {% endif %}{% endfor %}
}]);
</pre>
{% endif %}

{{ site.time }}