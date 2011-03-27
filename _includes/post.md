<header>
  <hgroup>
    <h1><a href={{ page.url}}>{% if page.h1 %}{{ page.h1 }}{% else %}{{ page.title }}{% endif %}</a></h1>
    <h2>{{ page.subtitle }}</h2>
  </hgroup>
  Posted
  <time pubdate="pubdate" datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date_to_long_string }}</time>
  in
  <nav>
    {% for category in page.categories %}
      {% capture previous_category %}{{ previous_category }}/{{ category }}{% endcapture %}
      {% unless forloop.first %}.{% endunless %}
      <a href="{{ previous_category }}">{{ category }}</a>
    {% endfor %}
  </nav>
  by
  {% if page.author %}
    {% if page.author_url %}<a href="{{ page.author_url }}">{{ page.author }}</a>
    {% else %}{{ page.author }}{% endif %}
  {% else %}{{ site.author }}{% endif %}
</header>
{{ page.content }}
