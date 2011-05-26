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
<dd>concat(args,)</dd>
<dt>
{% highlight js %}
[1,2].concat(3,4);
  //-> [1,2,3,4]
[1,2].concat([3,4],[5,6]);
  //-> [1,2,3,4,5,6]
{% endhighlight %}
</dt>
<dd>every(callback, <em>thisObj</em>)</dd>
<dt>
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
<dd>filter(callback, <em>thisObj</em>)</dd>
<dt>
{% highlight js %}
function decr(n,i,ary) {
  return n - 1;
}
[1,2,3].filter(decr);
  //-> [2,3]
{% endhighlight %}
</dt>
<dd>foreach(callback, <em>thisObj</em>)</dd>
<dt>
{% highlight js %}
[1,2,3].forEach(alert);
  // 3 alerts
{% endhighlight %}
</dt>
<dd>indexOf(searchArg, <em>fromIndex</em>)</dd>
<dt>
{% highlight js %}
[1,2,3].indexOf(3);
  //-> 2
{% endhighlight %}
</dt>
<dd>join(<em>separator</em>)</dd>
<dt>
{% highlight js %}
[1,2,3].join();
  //-> "1,2,3"
[1,2,3].join("+");
  //-> "1+2+3"
{% endhighlight %}
</dt>
<dd>lastIndexOf(searchArg, <em>thisObj</em>)</dd>
<dt>
{% highlight js %}
[1,2,3].indexOf(3);
  //-> 2
{% endhighlight %}
</dt>
<dd>map(callback, <em>thisObj</em>)</dd>
<dt>
{% highlight js %}
function decr(n,i,ary) {
  return n - 1;
}
[1,2,3].map(decr);
  //-> [0,1,2]
{% endhighlight %}
</dt>
<dd>pop()!</dd>
<dt>
{% highlight js %}
var a = [1,2,3];
a.pop();
  //-> 3
a;
  //-> [1,2]
{% endhighlight %}
</dt>
<dd>push(args,)!</dd>
<dt>
{% highlight js %}
var a = [1,2];
a.push(3, 4);
  //-> 4
a;
  //-> [1,2,3,4]
{% endhighlight %}
</dt>
<dd>reduce(callBack, <em>initialValue</em>)</dd>
<dt>
{% highlight js %}
function sub(p,n,i,ary) {
  return p - n;
}
[1,2,3].reduce(sub);
  //-> -4
{% endhighlight %}
</dt>
<dd>reduceRight()</dd>
<dt>
{% highlight js %}
function sub(p,n,i,ary) {
  return p - n;
}
[1,2,3].reduceRight(sub);
  //-> 0
{% endhighlight %}
</dt>
<dd>reverse()!</dd>
<dt>
{% highlight js %}
var a = [1,2,3];
a.reverse(); a;
  //-> [3,2,1]
{% endhighlight %}
</dt>
<dd>shift()!</dd>
<dt>
{% highlight js %}
var a = [1,2,3];
a.shift();
  //-> 1
a;
  //-> [2,3]
{% endhighlight %}
</dt>
<dd>slice(begin, <em>end</em>)</dd>
<dt>
{% highlight js %}
[1,2,3].slice(1,2);
  //-> [2]
{% endhighlight %}
</dt>
<dd>some(callback, <em>thisObj</em>)</dd>
<dt>
{% highlight js %}
[1,2,3].some(function(n,i,ary) {
  return n - 1;
});
  //-> true
{% endhighlight %}
</dt>
<dd>sort(<em>compareFunction</em>)!</dd>
<dt>
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
<dd>splice(index, howMany, <em>args</em>,)!</dd>
<dt>
{% highlight js %}
var a = [1,2,3];
a.splice(1,2,4,5);
  //-> [2,3]
a;
  //-> [1,4,5]
{% endhighlight %}
</dt>
<dd>unshift(args,)!</dd>
<dt>
{% highlight js %}
var a = [1,2];
a.unshift(3,4);
  //-> 4
a;
  //-> [1,2,3,4]
{% endhighlight %}
</dt>
</dl>