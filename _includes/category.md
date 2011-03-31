{% if posts %}
Posts
---------

{% for post in posts %}
- [{{ post.title }}]({{ post.url }}){% endfor %}
{% endif %}

{% if page.subpages %}
Subpages
--------------

<nav><ul>
{% for subpage in page.subpages%}
<li markdown="1">[{{subpage}}]({{subpage}})</li>{% endfor %}
</ul></nav>
{% endif %}
