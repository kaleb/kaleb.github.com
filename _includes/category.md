{% if posts %}
Posts
---------

{% for post in posts %}
- [{{ post.title }}]({{ post.url }}){% endfor %}
{% endif %}
{% if page.subpages %}
Subpages
--------------

<nav markdown="1">
{% for subpage in page.subpages%}
- [{{subpage}}]({{subpage}}){% endfor %}
{% endif %}
</nav>
