---
    layout: category
    hierarchy: [comp, lang, text, markdown]
    subtitle: The Markdown Markup Language

---
[Markdown][] is a text to HTML markup specification.  In fact, this
entire website is built with markdown.  Other sites such as
[StackOverflow][] and [Github][] use markdown extensively for content
generation.

{% assign posts = site.categories.markdown %}
{% include category.md %}

[Markdown]: http://daringfireball.net/projects/markdown/
[StackOverflow]: http://stackoverflow.com
[Github]: http://github.com
