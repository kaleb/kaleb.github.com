---
layout: default
title: Root
---

{{title}} / {{url}}

{% for post in site.posts limit:5 %}
<article>
  <h1 id="{{post.title}}"><a href="{{ post.url }}">{{ post.title }}</a></h1>
  {{ post.content }}
  <em>Posted on {{ post.date | date_to_long_string }}.</em>
  {{ post.categories }}
</article>
{% endfor %}
