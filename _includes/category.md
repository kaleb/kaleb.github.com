{% if posts %}
Posts
---------

{% for post in posts %}
- [{{ post.title }}]({{ post.url }}){% endfor %}
{% endif %}
{% if page.subpages %}
Subpages
--------------

<nav markdown>
{% for subpage in page.subpages%}
- [{{subpage}}]({{subpage}}){% endfor %}
{% endif %}
</nav>
