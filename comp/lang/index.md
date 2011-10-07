---
    path: /comp/lang/index.md
    layout: category
    subpages: [c, c++, csharp, haskell, javascript, go, python]
    hierarchy: [ comp, lang ]
    subtitle: Computer Languages
---


{% for post in site.categories.lang %}
{% if post.categories[0] == 'comp' %}
- [{{ post.title }}]({{ post.url }}) {{post.categories[1]}}
{% endif %}
{% endfor %}

