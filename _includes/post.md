<header>
  <hgroup>
    {% if forloop %}<h1><a href={{ page.url }}>{{ page.title }}</a></h1>{% else %}<h1>{% if page.h1 %}{{ page.h1 }}{% else %}{{ page.title }}{% endif %}</h1>{% if page.subtitle %}
  <h2>{{ page.subtitle }}</h2>{% endif %}{% endif %}
  </hgroup>
  <div class=info>
  {% if page.date %}<time pubdate=pubdate datetime={{ page.date | date_to_xmlschema }}>{{ page.date | date_to_long_string }}</time>{% endif %}{% if page.categories and page.categories != empty %} in
  <span>{% for category in page.categories %}{% capture previous_category %}{{ previous_category }}/{{ category }}{% endcapture %}{% unless forloop.first %}.{% endunless %}<a href="{{ previous_category }}" rel=tag>{{ category }}</a>{% endfor %}</span>{% endif %}{% if page.author %} by
  {% if page.author_url %} <a href="{{ page.author_url }}" rel=author>{{ page.author }}</a>{% else %}{{ page.author }}{% endif %}{% endif %}
  </div>
</header>
{% if forloop %}<div>{{ page.content }}</div>{% endif %}