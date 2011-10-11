---
    layout: post
    title: Maruku and Kramdown Compared
    subtitle: Github Pages and Jekyll
    published: false

---
My site is powered by [Github Pages][].  Github Pages, itself is a static web
hosting service, but it does some content processing and generation one time
per commit using [Jekyll][].  One great feature of Jekyll is that it will
convert [Markdown][] documents to HTML pages.

Jekyll comes with support for three different Markdown parsers:

- [Maruku][]

  Maruku is the default Markdown engine for Jekyll.  It is a superset of
  Markdown, having extra features such as tables, attribute definitions, syntax
  highlighting, and table of contents creation.

- [RDiscount][]

  RDiscount is the fastest and purest Markdown engine of the three.  It will not
  be discussed here since it is the extra features beyond plain vanilla Markdown
  that I am interested in exploring.

- [Kramdown][]

  Kramdown is the other Markdown engine.  It supports many of the extra features
  that Maruku does.

This article is a very basic overview of some of the features and differences of
Maruku and Kramdown.  Any omissions or inaccuracies?  Let me know in the
comments, because I am not going very in-depth with these tools.

* Table of Contents
{:toc #toc-2011-10-10 .toc}

Speed
-----

I ran `time jekyll` on my site to see how long it takes to build for
each Markdown engine.  My tests were not very rigorous, but we can see that
Kramdown was faster for my site.  The following are the speed results for both
Maruku and Kramdown.

### Maruku ###

user
: 9.57

system
: 1.63

elapsed
: 0:12.6

CPU
: 88%

### Kramdown

user
: 7.58

system
: 1.43

elapsed
: 0:11.3

CPU
: 88%

Table of Contents
-----------------

Table of contents generation is a nice feature to have, especially on a long
article like this one.  Both Maruku and Kramdown support this feature.

### Maruku ###

A [long unresolved Maruku _table of contents_ ticket][2] describes the following
necessities to get the `toc` extension working on Maruku:

> requires the page to have 4 elements in order to create a contents block
> 
>  1. an h1 header on the page
>  2. {:toc} tag
>  3. list before the {:toc}
>  4. h2 with {#h2name} tag
{: cite="http://webiva.lighthouseapp.com/projects/38599/tickets/5-maruku-table-of-contents-not-generating-without-extra-h1-tag"}

That is something like the following:

    Page Name
    =========

    * Table of Contents
    {:toc}

    First Section  {#first-section}
    -------------

    First section content.

    Second Section  {#second-section}
    --------------

    Second section content.
{: lang="markdown"}

### Kramdown ###

Kramdown does not require all the things that Maruku does for generation of a
table of contents.

    * Table of Contents
    {:toc}

    First Section
    -------------

    First section content.

    Second Section
    --------------

    Second section content.
{: lang="markdown"}

In Kramdown, the `h1` requirement is gone.  The section id requiremnt is also
gone due to Kramdown's auto-id feature.  That's a couple less things that
Kramdown forces you to worry about when wanting a table of contents.

Syntax Highlighting
-------------------

Jekyll itself does have a syntax of its own for outputting syntax highlighted
code, but I will explain in another article why I have decided to use the
attribute lists instead.  Both Maruku and Kramdown support syntax highlighting
for code blocks.  The syntax for enabling syntax highlighting in both engines is
almost the same.

    Example Syntax Highlighting

        function add(a, b){
            return a + b;
        }
    {: lang="javascript"}
{:lang="markdown"}

To specify a language, define the `lang` attribute for the code block like in
the example.  Maruku requires the additional attribute of `html_use_syntax=true`
for the highlighting.  These two Markdown engines use two different syntax
highlighters.  Maruku uses the [Syntax library][Syntax] and Kramdown uses
[CodeRay][]. Below are example outputs for the JavaScript example above.

### Maruku ###

The biggest thing to notice about Maruku's syntax highlighting is that it does
not support the [JavaScript][] language right out of the box.  In fact, it's
web site says that it only supports Ruby and XML.  This is a nonstarter for me
since running Jekyll on Github Pages does not allow me a way to change this.
Another issue that I have with the output is the `lang="javascript"` attributes.That will not validate since _javascript_ is not an acceptable value for the
`lang` attribute in HTML.

    <pre lang='javascript'><code class='javascript' lang='javascript'>function add(a, b){
        return a + p;
    }</code></pre>
{:html}

### Kramdown ###

Excluding its lack of syntax highlighting for JavaScript, the Maruku code is
definitely cleaner than Kramdownn's superfluous `<div>` elements.  Maruku's
output also uses the `<code>` element which is more syntactically correct.
Kramdown will actually syntactically highlight the code block, however.

    <div><div class="CodeRay">
      <div class="code"><pre><span class="keyword">function</span> <span class="function">add</span>(a, b){
        <span class="keyword">return</span> a + p;
    }
    </pre></div>
    </div>
    </div>
{:html}

Conclusion
----------

I have decided to use Kramdown for parsing my Markdown content.  The speed
difference was not a factor in my decision making since all of the processng
for my site is done on the Github servers.  The other two sections covered in
this article are what influenced my choice.  The prerequisites for successful
table of contents generation in Maruku is painful, and the lack of syntax
highlighting language options by default killed its chances.

The complaint that I have about both of these engines is that they both require
strict XHTML syntax for HTML inclusion and will break on perfectly valid HTML
syntax that is not well formed XML.  Another issue that I have with Kramdown
specifically is that with its attribute definitions, it requires quotation marks
around attribute values where Maruku does not.  That is a small gripe, but it is
still annoying.

[Github Pages]: http://pages.github.com
[Jekyll]: https://github.com/mojombo/jekyll
[Markdown]: /comp/text/markdown
[Maruku]: http://maruku.rubyforge.org/maruku.html
[RDiscount]: https://github.com/rtomayko/rdiscount
[Kramdown]: http://kramdown.rubyforge.org
[Syntax]: http://syntax.rubyforge.org
[CodeRay]: http://coderay.rubychan.de
[JavaScript]: /comp/lang/javascript/
[2]: http://webiva.lighthouseapp.com/projects/38599/tickets/5-maruku-table-of-contents-not-generating-without-extra-h1-tag

{:html: lang="html"}
