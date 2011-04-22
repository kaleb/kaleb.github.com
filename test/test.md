---
arr: [1, 2, 3]
str: a, b, c
hsh: {a: 1, b: 2}
layout: nil
yepnope:
- load: http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
  complete: |
    function() {
        if (!window.jQuery)
          yepnope('local/jquery.min.js');
    }
- test: a === 'aaa'
  yep:
  - foo.js
  - bar.js
  load: "'jquery.plugin.js'"
  complete: >
    function() {
        jQuery(function () {
            jQuery('div').plugin();
        });
    }
---

{{ site.posts }}

---

{{ page.str.quantity }}

---

{{ page.hsh.quantity }}

---

<pre>{{ page.hsh }}</pre>

<hr>

{% if page.yepnope %}
<pre>
yepnope([{ {% for a in page.yepnope %}
    0: 0{% if a.test %},
    test: {{ a.test }}{% endif %}{% if a.yep %},
    yep: {% if a.yep[0] %}["{{ a.yep | join: '", "' }}"]{% else %}"{{ a.yep }}"{% endif %}{% endif %}{% if a.nope %},
    nope: {% if a.nope[0] %}["{{ a.nope | join '", "' }}"]{% else %}"{{ a.nope }}"{% endif %}{% endif %}{% if a.both  %},
    both: {% if a.both[0] %}["{{ a.both | join '", "' }}"]{% else %}"{{ a.both }}"{% endif %}{% endif %}{% if a.load  %},
    load: {% if a.load[0] %}["{{ a.load | join '", "' }}"]{% else %}"{{ a.load }}"{% endif %}{% endif %}{% if a.callback  %},
    callback: {{ a.callback }}{% endif %}{% if a.complete  %},
    complete: {{ a.complete }}{% endif %}{% if forloop.last %}
}{% else %}
}, { {% endif %}{% endfor %}
}]);
</pre>
{% endif %}

{{ site.time }}