---
    title: WebPutty and Respond.js
    layout: post

---

A couple of months ago, [Fog Creek][] came out with [WebPutty][], a "simple CSS
editing and hosting service."  It is a fantastic tool which hosts CSS files for
me.  This feature in itself is not that special, but what does make this
service awesome is that it lets me write my styles in [SCSS][] and it also has
a pretty slick interface for letting me see style changes on the fly.  I was
loving it, but then I ran into a stumbling block, which I'll get to in a bit.

Respond.js
----------

I've been experimenting with [responsive web design][] for a little bit now.  To
aid me in accomplishing this with older deficient Internet Explorer browsers, I
turned to [Respond.js][].  Respond.js will parse all of a web page's CSS styles
and emulate the supported [media queries][] it finds with [JavaScript][] to the
best of its abilities.

To be able to retrieve the external CSS files, Respond.js performs an [Ajax][]
request.  Since Ajax has a [same origin policy][], Respond.js cannot access
stylesheets that are stored externally on a separate domain, such as
[webputty.net][WebPutty].  Respond.js does have a solution for this: a proxy
HTML file that must be on the external site hosting the CSS.  I asked the guys
at Fog Creek to implement this, and they have so kindly obliged.

WebPutty Responds
-----------------

> From: "Dane Bertram"  
> Date: Oct 5, 2011 4:05 PM  
> Subject: Re: (Case FC2120156) \[webputty\] Respond.js  
> To: "Kaleb Hornsby"
> 
> Hi Kaleb,
> 
> I just wanted to touch base quickly to let you know that we've added the
> Respond.js proxy to WebPutty and that you're welcome to start using it now.
>
> We're still working on adding documentation, but for the time being, you can
> use the following to get Respond.js working with WebPutty (provided you've
> already got respond.proxy.gif and respond.proxy.js already on your own
> server): 
> 
>     <link id="respond-proxy" rel="respond-proxy"
>       href="http://www.webputty.net/respond-proxy.html" />
>     <link id="respond-redirect" rel="respond-redirect"
>       href="respond.proxy.gif" />
>     <script src="respond.proxy.js"></script>
>
> We don't have the proxy working in the editor just yet though, so if you're
> trying to test your media queries in older versions of IE, you'll have to
> visit your website directly (rather than via the preview pane in WebPutty's
> editor).
> 
> Let me know if I can be of further assistance, if indeed this was helpful, or
> if this raises any other questions.
>
> All the best,  
> Dane

[Fog Creek]: http://www.fogcreek.com "Fog Creek Software"
[WebPutty]: http://www.webputty.net
[SCSS]: http://sass-lang.com/ "Sassy CSS"
[responsive web design]: /htes5/respond
[Respond.js]: https://github.com/scottjehl/Respond "CSS Media Query Shim"
[media queries]: https://developer.mozilla.org/en/CSS/Media_queries
[JavaScript]: /comp/lang/javascript/
[Ajax]: http://softwareas.com/ajax-not-ajax-a-user-centered-definition
[same origin policy]: http://en.wikipedia.org/wiki/XMLHttpRequest#Cross-domain_requests
