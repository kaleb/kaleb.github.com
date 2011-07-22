---
    layout: category
    title: comp.os.chrome
    subtitle: Chrome OS, Chromium OS, Cr-48, and Chromebooks
    h1: <a href="../..">comp</a>.<a href="..">os</a>.chrome
---

Posts
-----

<ul>
{% for post in site.categories.chrome %}
{% if post.categories[1] == 'os' %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
</ul>