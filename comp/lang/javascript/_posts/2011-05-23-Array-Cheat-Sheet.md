---
layout: default
---

Note, all methods that are marked with an exclamation mark (!) will mutate their
object. All _italicized_ parameters are optional.

Static Methods
--------------

isArray(obj)

    {% highlight js %}
    [[], [1], 2, "3"].map(Array.isArray); // [true,true,false,false]
    {% endhighlight %}

Instance Properties
-------------------

constructor

length

Instance Methods
----------------

concat(args,)

    {% highlight js %}
    [1,2].concat(3,4)
        //-> [1,2,3,4]
    [1,2].concat([3,4],[5,6]);
        //-> [1,2,3,4,5,6]
    {% endhighlight %}

every(callback, _thisObj_)

    {% highlight js %}
    function decr(n, i, ary) { return n - 1; }
    [1,2,3].every(decr);
        //-> false
    [2,3].every(decr);
        //-> true
    {% endhighlight %}

filter(callback, _thisObj_)

    {% highlight js %}
    function decr(n, i, ary) { return n - 1; }
    [1,2,3].filter(decr);
        //-> [2,3]
    {% endhighlight %}

foreach(callback, _thisObj_)

    {% highlight js %}
    [1,2,3].forEach(alert);
        // 3 alerts
    {% endhighlight %}

indexOf(searchArg, _fromIndex_)

    {% highlight js %}
    [1,2,3].indexOf(3);
        //-> 2
    {% endhighlight %}

join( _separator_ )

    {% highlight js %}
    [1,2,3].join();
        //-> "1,2,3"
    [1,2,3].join("+");
        //-> "1+2+3"
    {% endhighlight %}

lastIndexOf(searchArg, _thisObj_)

    {% highlight js %}
    [1,2,3].indexOf(3);
        //-> 2
    {% endhighlight %}

map(callback, _thisObj_)

    {% highlight js %}
    function decr(n, i, ary) { return n - 1; }
    [1,2,3].map(decr);
        //-> [0,1,2]
    {% endhighlight %}

pop()!

    {% highlight js %}
    var a = [1,2,3];
    a.pop();
        //-> 3
    a;
        //-> [1,2]
    {% endhighlight %}

push(args,)!

    {% highlight js %}
    var a = [1,2];
    a.push(3, 4);
        //-> 4
    a;
        //-> [1,2,3,4]
    {% endhighlight %}

reduce(callBack, _initialValue_)

    {% highlight js %}
    function sub(prev, current, i, ary) { return prev - current; }
    [1,2,3].reduce(sub);
        //-> -4
    {% endhighlight %}

reduceRight()

    {% highlight js %}
    function sub(prev, current, i, ary) { return prev - current; }
    [1,2,3].reduceRight(sub);
        //-> 0
    {% endhighlight %}

reverse()!

    {% highlight js %}
    var a = [1,2,3];
    a.reverse(); a;
        //-> [3,2,1]
    {% endhighlight %}

shift()!

    {% highlight js %}
    var a = [1,2,3];
    a.shift();
        //-> 1
    a;
        //-> [2,3]
    {% endhighlight %}

slice(begin, _end_)

    {% highlight js %}
    [1,2,3].slice(1,2);
        //-> [2]
    {% endhighlight %}

some(callback, _thisObj_)

    {% highlight js %}
    [1,2,3].some(decr);
        //-> true
    {% endhighlight %}

sort( _compareFunction_ )!

    {% highlight js %}
    var a = [2,3,1];
    a.sort(); a;
        //-> [1,2,3]
    function longer(a, b) {
        return a.length > b.length? 1:
               a.length < b.length? -1: 0;
    }
    ["aardvark","beaver","cat"].sort(longer);
        //-> ["cat","beaver","aardvark"]
    {% endhighlight %}

splice(index, howMany, _args_,)!

    {% highlight js %}
    var a = [1,2,3];
    a.splice(1,2,4,5);
        //-> [2,3]
    a;
        //-> [1,4,5]
    {% endhighlight %}

unshift(args,)!

    {% highlight js %}
    var a = [1,2];
    a.unshift(3,4);
        //-> 4
    a;
        //-> [1,2,3,4]
    {% endhighlight %}