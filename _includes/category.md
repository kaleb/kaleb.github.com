{% if posts %}
Posts
-----

{% for post in posts %}
- [{{ post.data.title }}]({{ post.url }}){% endfor %}
{% endif %}
