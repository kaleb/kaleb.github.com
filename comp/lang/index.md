---
path: /comp/lang/index.md
layout: default
subpages: [c, c++, csharp, haskell, javascript, go, python]
h1: '<a href="..">comp</a>.lang'
title: comp.lang

---


{% assign posts = site.categories.comp %}
{% for post in site.categories.lang %}
{% if post.categories[0] == 'comp' %}
- [{{ post.title }}]({{ post.url }}) {{post.categories[1]}}
{% endif %}
{% endfor %}

