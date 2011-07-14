---
    layout: post
    published: false
    title: Google+ Hangout Hackathon
    subtitle: Google+ Hangouts Uses Google Wave and jQuery
---

Last night, I was invited to a [Google+ Hangout][1] to participate in a
[Chrome extension hackathon][2].  I was not able to participate much due to
bloat that I've allowed to accumulate in my [Ubuntu][] based desktop
combined with the slowness of my DSL internet connection.  It is really
too bad, because I felt that I could have learned much from the other
coders involved.

The project that we were working on is a [chrome extension that allows users to
play a game of pong while using Hangouts][3].  This adds a whole new
dynamic to how users can participate in Hangouts. Kudos to whomever first
thought of the idea.

To be able to pull off creating this extension, we had to delve into the source
code of Hangouts.  While doing this, we noticed a couple of interesting
things after being pointed out by [Mohamed Mansour][4].

Google+ Hangouts Uses Google Wave
---------------------------------

One of the tasks needed to get the extension to work is that we needed to find
a way to easily and programmatically access the list of all users currently in
the Hangout.  Mansour discovered a hidden `<iframe>` that contained much of its
logic and data.  

<div class="centered">
<a href="https://picasaweb.google.com/lh/photo/XpQ8ldm8H5mZRFzsX1Nw_Q?feat=embedwebsite">
<img src="https://lh3.googleusercontent.com/-OIL3stpOehc/Th8XA5_cwhI/AAAAAAAADtU/2RSjslEQmpQ/s400/screenshot-20110714-121716.png" height="250" width="400" />
</a>
</div>

Deep inside this maze, Mansour noticed that Hangouts made some calls to
[Google Wave][5] services. This was pretty interesting considering the fact
that [Google wave was retired][6] almost 3 years ago. Well, not that interesting
in that they did state they stated that they will
<q cite="http://googleblog.blogspot.com/2010/08/update-on-google-wave.html">
extend the technology for use in other Google projects.</q> I really liked Wave
none the less, and I wish it had caught on. That was not the only interesting 
discovery made during our code spelunking, though.

Google+ Hangouts Uses jQuery
----------------------------

Mansour had also discovered that Hangouts uses [jQuery][7]. Hangouts is powered
by jQuery all throughout. This seemed like an odd finding for a couple reasons.
The first strange thing about this choice of JavaScript library, is that I have
not seen its usage in any other Google product.  The second oddity is that none
of the JavaScript was not compiled with [Google Closure][8].  Is Google getting
real JavaScript web developer so work on these new projects and shying away from
the Java Google Web Toolkit programmers from previous products?  I don't mean to
sound harsh by saying that, but I think that JavaScript needs a little more
respect than the <abbr title="Google Web Toolkit">GWT</abbr> project gives it.

All and all, for the brief time that I was participating in the hackathon, I was
enjoying myself immensely. I would love to do one again, but before I do, I need
to tune my desktop and switch to Comcast.

[1]: http://youtu.be/Tku1vJeuzH4 (Google Plus Hangouts)
[2]: https://plus.google.com/116805285176805120365/posts/SH653h7fjYP (Circle Pong Google+ Hangout Chrome Extension Announcement)
[Ubuntu]: http://ubuntu.com/ (Linux for human beings)
[3]: https://github.com/hangout/circle-pong-extension (Circle Pong Google+ Hangout Chrome Extension on Github)
[4]: https://plus.google.com/116805285176805120365 (Mohamed Mansour's Profile)
[5]: http://wave.google.com/ (Google Wave)
[6]: http://googleblog.blogspot.com/2010/08/update-on-google-wave.html (Offical Google Update on Wave)
[7]: http://jquery.com/ (jQuery JavaScript Library)