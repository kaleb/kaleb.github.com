---
template:default
title: comp.lang.javascript
---
<a href='https://developer.mozilla.org/en/JavaScript/Guide' title='JavaScript Guide'><img src='http://static.jsconf.us/promotejsh.gif' height='150' width='180' alt='JavaScript Guide'/></a>
<table width="100%"><tr valign="top"><td width="150px"><table><tr><th align="left">Navigation</th></tr><tr><td><small><a href="../../../comp/index.html">comp</a></small></td></tr><tr><td><small><a href="../../../rec/index.html">rec</a></small></td></tr><tr><td><small><a href="../../../root/index.html">root</a></small></td></tr><tr><td><small><a href="../../../sci/index.html">sci</a></small></td></tr><tr><td><small><a href="../../../soc/index.html">soc</a></small></td></tr><tr><td><small><a href="../../../talk/index.html">talk</a></small></td></tr></table></td><td>&#160;</td><td><div class="hentry webpage" id="https://sites.google.com/feeds/content/hornsby.ws/kaleb/5091723936853166124"><div><a href="../../index.html">comp</a> &gt; <a href="../index.html">lang</a> &gt; </div><h3><span class="entry-title">javascript</span></h3><div><div class="entry-content"><div xmlns='http://www.w3.org/1999/xhtml'><table class='sites-layout-name-one-column sites-layout-hbox' cellspacing='0'><tbody><tr><td class='sites-layout-tile sites-tile-name-content-1'><div dir='ltr'>Commandments of JavaScript:<br/>
<ol><li>For each function that is written, there must be a corresponding comment describing in brief the function.</li><li>The innerHTML property is not standard.<br/></li><li>Thou shalt not declare a new object if said object has a literal form.</li>
<li>Thou shalt not have consecutive "if" conditionals testing for the same equality.</li><li>Do not type 'a = a? a: b' when one can type 'a = a || b'.<br/></li>
</ol>
<h3><a name='TOC-Literals'/>Literals</h3>
One does not always request a 'new String("")' in other languages, but simply a string literal. Give all other literals the same respect.<br/>
<ul><li>Array</li>
<li>Object</li>
<li>RegExp</li><li>Function<br/></li></ul>Why should you write the literal form? Legibility and speed. I hate seeing 'new Array()' and 'new Object' especially. 'new Function()' should almost never ever be used.<br/>
<h3><a name='TOC-Consecutive-Conditionals-of-Equal-E'/>Consecutive Conditionals of Equal Equalities</h3>
Do not do the following:<br/>
<pre style='background-color:rgb(243, 243, 243)'>var v;<br/>if (q == a) {<br/>    v = a;<br/>}<br/>else if (q == b) {<br/>    v = b;<br/>}<br/>else if (q == c) {<br/>    v = c;<br/>}<br/></pre>
This is better:<br/>
<pre style='background-color:rgb(243, 243, 243)'>var v;<br/>switch (q) {<br/>case a: v = a;<br/>    break;<br/>case b: v = b;<br/>    break;<br/>case b: v = b;<br/>    break;<br/>}<br/></pre>

But this is best:<br/>
<pre style='background-color:rgb(243, 243, 243)'>var v = {<br/>    a:a,<br/>    b:b,<br/>    c:c<br/>}[q];<br/></pre>
<br/>
Why? It is both faster to write and run, more concise and easier to maintain and update if requirements require more values.<br/></div></td></tr></tbody></table></div></div><br /><small>Updated on <abbr class="updated" title="2010-11-10T18:59:44.114Z">Nov 10, 2010</abbr> by <span class="author"><span class="vcard"><a class="fn" href="mailto:kaleb@hornsby.ws">Kaleb Hornsby</a></span></span> (Version <span class="sites:revision">9</span>)</small><br /><br /></div></div></td></tr></table>