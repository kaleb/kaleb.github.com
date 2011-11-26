---
    title: Form Labels
    layout: post
---

When authoring HTML, if you find yourself writing an [`<input>` element][1],
chances are that you are going to need to label it.  The proper way to label an
`<input>` element is by using a [`<label>`][2] element.  I don't know how many
times I've seen web developers omit this tag.  Start using it.  It aids in the
accessibility of your site.

The main component of the `<label>` element is its `for` attribute.  The value of
the `for` attribute is the `id` of a form element. Form elements can be one of
`<input>`, `<select>`, `<textarea>`, or `<button>`.  The `for` attribute can be
omitted if the `<label>` element surrounds the form element.  The only issue that
I have with omitting the `for` attribute is in Internet Explorer 6 in which
clicking the label will not activate the form element.  I don't have too many
customers that still use IE6, so I omit the attribute depending on my customer.

See below for an example.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/kaleb/YvPHN/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

 [1]: http://dev.w3.org/html5/markup/input.html
 [2]: http://dev.w3.org/html5/markup/label.html