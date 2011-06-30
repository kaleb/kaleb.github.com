---
layout: default
---
Note, all methods that are marked with an exclamation mark (!) will mutate their
object. All _italicized_ parameters are optional.

Static Methods
--------------

<dl class="cheatsheet">
<dt id="Array.isArray"><a href="#Array.isArray">isArray(obj)</a></dt>
<dd>
{% highlight js %}
var a = [[],[1],2,"3"];
a.map(Array.isArray);
  //-> [true,true,false,false]
{% endhighlight %}
</dd>
</dl>

Instance Properties
-------------------

constructor

length

Instance Methods
----------------

<dl class="cheatsheet">
<dt id="Array.prototype.concat"><a href="#Array.prototype.concat">concat(args,)</a></dt>
<dd>
{% highlight js %}
[1,2].concat(3,4);
  //-> [1,2,3,4]
[1,2].concat([3,4],[5,6]);
  //-> [1,2,3,4,5,6]
{% endhighlight %}
</dd>
<dt id="Array.prototype.every"><a href="#Array.prototype.every">every(callback, <em>thisObj</em>)</a></dt>
<dd>
{% highlight js %}
function decr(n,i,ary) {
  return n - 1;
}
[1,2,3].every(decr);
  //-> false
[2,3].every(decr);
  //-> true
{% endhighlight %}
</dd>
<dt id="Array.prototype.filter"><a href="#Array.prototype.filter">filter(callback, <em>thisObj</em>)</a></dt>
<dd>
{% highlight js %}
function decr(n,i,ary) {
  return n - 1;
}
[1,2,3].filter(decr);
  //-> [2,3]
{% endhighlight %}
</dd>
<dt id="Array.prototype.foreach"><a href="#Array.prototype.foreach">foreach(callback, <em>thisObj</em>)</a></dt>
<dd>
{% highlight js %}
[1,2,3].forEach(alert);
  // 3 alerts
{% endhighlight %}
</dd>
<dt id="Array.prototype.indexOf"><a href="#Array.prototype.indexOf">indexOf(searchArg, <em>fromIndex</em>)</a></dt>
<dd>
{% highlight js %}
[1,2,3].indexOf(3);
  //-> 2
{% endhighlight %}
</dd>
<dt id="Array.prototype.join"><a href="#Array.prototype.join">join(<em>separator</em>)</a></dt>
<dd>
{% highlight js %}
[1,2,3].join();
  //-> "1,2,3"
[1,2,3].join("+");
  //-> "1+2+3"
{% endhighlight %}
</dd>
<dt id="Array.prototype.lastIndexOf"><a href="#Array.prototype.lastIndexOf">lastIndexOf(searchArg, <em>thisObj</em>)</a></dt>
<dd>
{% highlight js %}
[1,2,3].indexOf(3);
  //-> 2
{% endhighlight %}
</dd>
<dt id="Array.prototype.map"><a href="#Array.prototype.map">map(callback, <em>thisObj</em>)</a></dt>
<dd>
{% highlight js %}
function decr(n,i,ary) {
  return n - 1;
}
[1,2,3].map(decr);
  //-> [0,1,2]
{% endhighlight %}
</dd>
<dt id="Array.prototype.pop"><a href="#Array.prototype.pop">pop()!</a></dt>
<dd>
{% highlight js %}
var a = [1,2,3];
a.pop();
  //-> 3
a;
  //-> [1,2]
{% endhighlight %}
</dd>
<dt id="Array.prototype.push"><a href="#Array.prototype.push">push(args,)!</a></dt>
<dd>
{% highlight js %}
var a = [1,2];
a.push(3, 4);
  //-> 4
a;
  //-> [1,2,3,4]
{% endhighlight %}
</dd>
<dt id="Array.prototype.reduce"><a href="#Array.prototype.reduce">reduce(callBack, <em>initialValue</em>)</a></dt>
<dd>
{% highlight js %}
function sub(p,n,i,ary) {
  return p - n;
}
[1,2,3].reduce(sub);
  //-> -4
{% endhighlight %}
</dd>
<dt id="Array.prototype.reduceRight"><a href="#Array.prototype.reduceRight">reduceRight()</a></dt>
<dd>
{% highlight js %}
function sub(p,n,i,ary) {
  return p - n;
}
[1,2,3].reduceRight(sub);
  //-> 0
{% endhighlight %}
</dd>
<dt id="Array.prototype.reverse"><a href="#Array.prototype.reverse">reverse()!</a></dt>
<dd>
{% highlight js %}
var a = [1,2,3];
a.reverse(); a;
  //-> [3,2,1]
{% endhighlight %}
</dd>
<dt id="Array.prototype.shift"><a href="#Array.prototype.shift">shift()!</a></dt>
<dd>
{% highlight js %}
var a = [1,2,3];
a.shift();
  //-> 1
a;
  //-> [2,3]
{% endhighlight %}
</dd>
<dt id="Array.prototype.slice"><a href="#Array.prototype.slice">slice(begin, <em>end</em>)</a></dt>
<dd>
{% highlight js %}
[1,2,3].slice(1,2);
  //-> [2]
{% endhighlight %}
</dd>
<dt id="Array.prototype.some"><a href="#Array.prototype.some">some(callback, <em>thisObj</em>)</a></dt>
<dd>
{% highlight js %}
[1,2,3].some(function(n,i,ary) {
  return n - 1;
});
  //-> true
{% endhighlight %}
</dd>
<dt id="Array.prototype.sort"><a href="#Array.prototype.sort">sort(<em>compareFunction</em>)!</a></dt>
<dd>
{% highlight js %}
var a = [2,3,1];
a.sort(); a;
  //-> [1,2,3]
function longer(a,b) {
  return a.length > b.length? 1:
    a.length < b.length? -1: 0;
}
a = ["aardvark","beaver","cat"]
a.sort(longer);
  //-> ["cat","beaver","aardvark"]
{% endhighlight %}
</dd>
<dt id="Array.prototype.splice"><a href="#Array.prototype.splice">splice(index, howMany, <em>args</em>,)!</a></dt>
<dd>
{% highlight js %}
var a = [1,2,3];
a.splice(1,2,4,5);
  //-> [2,3]
a;
  //-> [1,4,5]
{% endhighlight %}
</dd>
<dt id="Array.prototype.unshift"><a href="#Array.prototype.unshift">unshift(args,)!</a></dt>
<dd>
{% highlight js %}
var a = [1,2];
a.unshift(3,4);
  //-> 4
a;
  //-> [1,2,3,4]
{% endhighlight %}
</dd>
</dl>
