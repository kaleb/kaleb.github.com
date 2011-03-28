<header>
  <hgroup>
    <h1><a href={{ page.url}}>{% if page.h1 %}{{ page.h1 }}{% else %}{{ page.title }}{% endif %}</a></h1>
    <h2>{{ page.subtitle }}</h2>
  </hgroup>
  {% if page.date %}
  <time pubdate="pubdate" datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date_to_long_string }}</time>
  {% endif %}
  {% if page.categories %} in
  <nav>
    {% for category in page.categories %}
      {% capture previous_category %}{{ previous_category }}/{{ category }}{% endcapture %}
      {% unless forloop.first %}.{% endunless %}
      <a href="{{ previous_category }}">{{ category }}</a>
    {% endfor %}
  </nav>
  {% endif %}
  {% if page.author %} by
    {% if page.author_url %}
      <a href="{{ page.author_url }}">{{ page.author }}</a>
    {% else %}
      {{ page.author }}
    {% endif %}
  {% endif %}
</header>
{% if forloop %}
{{ page.content }}
{% endif %}
