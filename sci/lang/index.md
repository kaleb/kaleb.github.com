---
title: sci.lang
path: /sci/lang/index.md
layout: default

---
<a rel='nofollow' href='http://english.stackexchange.com/users/2329/kzh'>
<img width='208' src='http://english.stackexchange.com/users/flair/2329.png' height='58' alt='profile for kzh at English Language and Usage, Q&amp;A for linguists, etymologists, and serious English language enthusiasts'/>
</a>
I am interested in both <a href='http://en.wikipedia.org/wiki/Natural_language'>natural</a> and <a href='http://en.wikipedia.org/wiki/Constructed_language'>constructed</a> human language, linguistics, and <a href='http://en.wikipedia.org/wiki/Philology'>philology</a>.

Posts
-----

{% for post in site.categories.lang %}
{% if post.categories[0] == 'sci' %}
- [{{ post.title }}]({{ post.url }})
{% endif %}
{% endfor %}
