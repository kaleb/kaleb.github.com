---
layout: default
title: Root
path: /index.md

---

{% for post in site.posts limit:5 %}
<article>
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  {{ post.content }}
  <aside>Posted on <time pubdate datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_long_string }}</time>.</aside>
  {{ post.categories }}
</article>
{% endfor %}
