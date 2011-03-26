---
layout: default
title: Root
path: /index.md

---

{% for post in site.posts limit:5 %}
<article>
  <header>
    <h1>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h1>
    <aside>
      Posted on
      <time pubdate="pubdate" datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date_to_long_string }}
      </time>.
    </aside>
  {{ post.id }}
  </header>
  {{ post.content }}
  <nav>
    {% for category in post.categories %}
    {% capture previous_category %}{{ previous_category }}/{{ category }}{% endcapture %}
    <a href="{{ previous_category }}">{{ category }}</a> .
    {% endfor %}
  </nav>
</article>
{% endfor %}