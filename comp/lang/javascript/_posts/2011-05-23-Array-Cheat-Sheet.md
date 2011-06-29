---
layout: default
---

Note, all methods that are marked with an exclamation mark (!) will mutate their
object. All _italicized_ parameters are optional.

Static Methods
--------------

isArray(obj)

{% highlight js %}
var a = [[],[1],2,"3"];
a.map(Array.isArray);
  //-> [true,true,false,false]
{% endhighlight %}

Instance Properties
-------------------

constructor

length

Instance Methods
----------------

<dl>
<dd><a href="#Array.prototype.concat">concat(args,)</a></dd>
<dt id="Array.prototype.concat">
{% highlight js %}
[1,2].concat(3,4);
  //-> [1,2,3,4]
[1,2].concat([3,4],[5,6]);
  //-> [1,2,3,4,5,6]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.every">every(callback, <em>thisObj</em>)</a></dd>
<dt id="Array.prototype.every">
{% highlight js %}
function decr(n,i,ary) {
  return n - 1;
}
[1,2,3].every(decr);
  //-> false
[2,3].every(decr);
  //-> true
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.filter">filter(callback, <em>thisObj</em>)</a></dd>
<dt id="Array.prototype.filter">
{% highlight js %}
function decr(n,i,ary) {
  return n - 1;
}
[1,2,3].filter(decr);
  //-> [2,3]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.foreach">foreach(callback, <em>thisObj</em>)</a></dd>
<dt id="Array.prototype.foreach">
{% highlight js %}
[1,2,3].forEach(alert);
  // 3 alerts
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.indexOf">indexOf(searchArg, <em>fromIndex</em>)</a></dd>
<dt id="Array.prototype.indexOf">
{% highlight js %}
[1,2,3].indexOf(3);
  //-> 2
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.join">join(<em>separator</em>)</a></dd>
<dt id="Array.prototype.join">
{% highlight js %}
[1,2,3].join();
  //-> "1,2,3"
[1,2,3].join("+");
  //-> "1+2+3"
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.lastIndexOf">lastIndexOf(searchArg, <em>thisObj</em>)</a></dd>
<dt id="Array.prototype.lastIndexOf">
{% highlight js %}
[1,2,3].indexOf(3);
  //-> 2
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.map">map(callback, <em>thisObj</em>)</a></dd>
<dt id="Array.prototype.map">
{% highlight js %}
function decr(n,i,ary) {
  return n - 1;
}
[1,2,3].map(decr);
  //-> [0,1,2]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.pop">pop()!</a></dd>
<dt id="Array.prototype.pop">
{% highlight js %}
var a = [1,2,3];
a.pop();
  //-> 3
a;
  //-> [1,2]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.push">push(args,)!</a></dd>
<dt id="Array.prototype.push">
{% highlight js %}
var a = [1,2];
a.push(3, 4);
  //-> 4
a;
  //-> [1,2,3,4]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.reduce">reduce(callBack, <em>initialValue</em>)</a></dd>
<dt id="Array.prototype.reduce">
{% highlight js %}
function sub(p,n,i,ary) {
  return p - n;
}
[1,2,3].reduce(sub);
  //-> -4
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.reduceRight">reduceRight()</a></dd>
<dt id="Array.prototype.reduceRight">
{% highlight js %}
function sub(p,n,i,ary) {
  return p - n;
}
[1,2,3].reduceRight(sub);
  //-> 0
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.reverse">reverse()!</a></dd>
<dt id="Array.prototype.reverse">
{% highlight js %}
var a = [1,2,3];
a.reverse(); a;
  //-> [3,2,1]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.shift">shift()!</a></dd>
<dt id="Array.prototype.shift">
{% highlight js %}
var a = [1,2,3];
a.shift();
  //-> 1
a;
  //-> [2,3]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.slice">slice(begin, <em>end</em>)</a></dd>
<dt id="Array.prototype.slice">
{% highlight js %}
[1,2,3].slice(1,2);
  //-> [2]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.some">some(callback, <em>thisObj</em>)</a></dd>
<dt id="Array.prototype.some">
{% highlight js %}
[1,2,3].some(function(n,i,ary) {
  return n - 1;
});
  //-> true
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.sort">sort(<em>compareFunction</em>)!</a></dd>
<dt id="Array.prototype.sort">
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
</dt>
<dd><a href="#Array.prototype.splice">splice(index, howMany, <em>args</em>,)!</a></dd>
<dt id="Array.prototype.splice">
{% highlight js %}
var a = [1,2,3];
a.splice(1,2,4,5);
  //-> [2,3]
a;
  //-> [1,4,5]
{% endhighlight %}
</dt>
<dd><a href="#Array.prototype.unshift">unshift(args,)!</a></dd>
<dt id="Array.prototype.unshift">
{% highlight js %}
var a = [1,2];
a.unshift(3,4);
  //-> 4
a;
  //-> [1,2,3,4]
{% endhighlight %}
</dt>
</dl>
