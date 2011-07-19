---
    title: ChromeOS Split Windows
    subtitle: Kiling SSH and More
    path: /comp/os/chrome/_posts/2011-07-11.md
    publish: no
---

[ChromeOS][1] recently updated and added some new features.  One of them was an
unexpected addition, and the other was something that I've been waiting for
since the defect was marked as resolved.

Split Windows
-------------

When ChromeOS first released, the only way to view a web page was to view it
maximized.  This was somewhat problematic if one wanted to view two pages side
by side, e.g. writing a paper in [Google Docs][2] and viewing a work to cite at
the same time.  [Panelize][3] is a Chrome extension that made this process a
bit more bearable.  It has an option that the user to open the current tab as
a docked mini page.  The problem with this is that mini pages always obscured
at least part of the underlying page.

Despite what may be evident at first, ChromeOS is not just a web browser.  It
has another useful application as well: a [terminal][4].  To open the terminal,
all the user has to do is hit the familiar <kbd>ctrl</kbd> + <kbd>alt</kbd> +
<kbd>t</kbd>. This terminal does
not have many features, as it is not a fully functional shell.  The most useful
tool that it does have is SSH, and I use it often.  The terminal has some of
the same multi-tasking hinderences as the browser: the inability to view
multiple windows at once; the terminal is always full screen.

The latest update that I recieved as of this writing fixed this issue.
Windows can now be split vertically.  Now when a new browser is created or when
a terminal is opened, the new windows are no longer full screen by default.
The user can now drag to the left or right the width of the window allowing two
windows--whether it be a browser or terminal--to be viewed at the same time.
It's a boon to productivity.  In the upper right hand corner of the browser
windows there is now a _maximize_ button so that the user may quickly maximize
a window. Another change made was the functionality of one of the function
keys.  What used to be a button dedicated to switching windows--exactly the
same functionality of <kbd>alt</alt> + <kbd>tab</kbd>--is now used to maximize
windows from the keyboard.  If you want to be able to resize your windows with
the keyboard, there's keyboard shortcuts for that. 

Keyboard Shortcuts
------------------

<a href="https://picasaweb.google.com/lh/photo/Pj_A9KSL73sQ7kYsUd69mg?feat=embedwebsite"><img src="https://lh4.googleusercontent.com/-uYbEbPcZIbI/TiTElYaaOkI/AAAAAAAADzc/KC83i4B1dt8/s400/ChromeOS-Resized-Windows.png" height="250" width="400" /></a>

If the user hits <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd> < </kbd> or
<kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd> > </kbd>, the window will resize to
the left or to the right respectively.  Chrome has many other useful keyboard
shortcuts such as taking screenshots or changing input language.  By hitting
<kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>/</kbd> the user can view all the
keyboard shortcuts in ChromeOS.

Killing SSH Sessions
--------------------

One of the biggest issues that I had with ChromeOS was the inability to depart
a hung SSH session.  When logged into an SSH session and the connection drops,
the terminal would stay open with no method of closing it.  ChromeOS disables
the standard the standard tilde commands for security reasons, so that route
does not work to kill or reconnect the session.  The only recourse that I had
was to either open a new terminal window and ignore the hung window or if I
really wanted the hung sessions gone, I would have to log out and log back in.
Now, it is a simple <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>w</kbd>, just
like in [gnome-terminal][6].

[1]: http://en.wikipedia.org/wiki/Google_Chrome_OS (ChromeOS)
[2]: http://en.wikipedia.org/wiki/Google_Docs (Google Docs)
[3]: https://chrome.google.com/webstore/detail/illfnfpoggnlapniilhkplbofldeimie (Panelize Chrome Extension)
[4]: http://en.wikipedia.org/wiki/Linux_terminal (Linux Terminal)
[6]: http://en.wikipedia.org/wiki/GNOME_Terminal (GNOME Terminal)
