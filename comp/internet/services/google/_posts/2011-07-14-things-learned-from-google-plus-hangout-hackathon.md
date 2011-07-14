---
    layout: post
    published: false
---

Last night, I was invited to a a [Google+ Hangout][1] to participate in a
[Chrome extension hackathon][2].  I was not able to participate much due to
bloat that I've allowed to accumulate in my [Ubuntu][] along with the slowness
of my DSL internet connection.  It is really too bad, because I felt that I
could have learned much from the other individuals involved.

The project that we were working on is a [chrome extension that allows users to
play a game of pong while using Hangouts][3].  This adds a whole new
dynamic to what users can do in Hangouts.

To be able to pull off creating this extension, we had to delve into the source
code of Hangouts.  While doing this, we noticed some interesting things.
[Mohamed Mansour][4] noticed a couple of interesting things.

Google+ Hangouts Uses Google Wave
---------------------------------

One of the tasks needed to get the extension to work is that we needed to find
a way to easily and programmatically access the list of all users currently in
the Hangout.  Mansour discovered a hidden `<iframe>` that contained much of the
logic and data.  

Google+ Hangouts Uses jQuery
----------------------------

[1]: http://youtu.be/Tku1vJeuzH4 (Google Plus Hangouts)
[2]: https://plus.google.com/116805285176805120365/posts/SH653h7fjYP (Social Pong for Google+ Hangout Chrome Extension)
[Ubuntu]: http://ubuntu.com/ (Linux for human beings)
[3]: https://github.com/hangout/circle-pong-extension (Social Pong for Google+ Hangout Chrome Extension)
[4]: https://plus.google.com/116805285176805120365 (Mohamed Mansour)
