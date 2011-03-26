---
title: comp.lang
path: /comp/lang/index.md
layout: default

---

{% for post in site.categories.lang %}
{% if post.categories[0] == 'comp' %}
- [{{ post.title }}]({{ post.url }})
{% endif %}
{% endfor %}

