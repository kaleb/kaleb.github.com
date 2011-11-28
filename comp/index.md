---
    hierarchy: [ comp ]
    subtitle: Computer Related Posts
    description: Computers, software, and similar things are to be found here.
    layout: category
    path: /comp/index.html
    subpages:
    - databases
    - editors
    - internet
    - lang
    - mail
    - misc
    - org
    - os
    - programming
    - text
    - www

---
[![Stack Overflow profile][SO Flair]][SO Profile]

I am a computer science major at [ASU][] and a software developer at
[ESi][].

Favorites
---------

- OS: [GNU/Linux][1]
- Programming Language: [Python][]
- Data Transport Language: [YAML][]

Links
-----

- [Git vs. Mercurial][2]

{% assign posts = site.categories.comp %}
{% include category.md %}

[SO Profile]: http://stackoverflow.com/users/143739
  "Stack Overflow profile for kzh at Stack Overflow, Q&A for professional and enthusiast programmers"
[SO Flair]: http://stackoverflow.com/users/flair/143739.png
[ASU]: http://www.aug.edu "Augusta State University"
[ESi]: http://www.esi911.com
[1]: os/linux/
[Python]: lang/python/
[YAML]: http://www.yaml.org
[2]: http://gitvsmercurial.com
