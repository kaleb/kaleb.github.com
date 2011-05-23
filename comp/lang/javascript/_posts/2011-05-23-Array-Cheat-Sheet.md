Static Methods
--------------

isArray()

    [[], [1], 2, "3"].map(Array.isArray); // [true,true,false,false]

Instance Properties
-------------------

constructor

length

Instance Methods
----------------

concat(args,)

    [1,2].concat(3,4)          // [1,2,3,4]
    [1,2].concat([3,4],[5,6]); // [1,2,3,4,5,6]

every(callback, _thisObj_)

    function decr(n, i, ary) { return n - 1; }
    [1,2,3].every(decr); // false
    [2,3].every(decr);   // true

filter(callback, _thisObj_)

    function decr(n, i, ary) { return n - 1; }
    [1,2,3].filter(decr); // [2,3]

foreach()

    [1,2,3].forEach(alert); // 3 alerts

indexOf(searchArg, _fromIndex_)

    [1,2,3].indexOf(3); // 2

join(_separator_)

    [1,2,3].join();    // "1,2,3"
    [1,2,3].join("+"); // "1+2+3"

lastIndexOf(searchArg, _thisObj_)

    [1,2,3].indexOf(3); // 2

map(callback, _thisObj_)

    function decr(n, i, ary) { return n - 1; }
    [1,2,3].map(decr); // [0,1,2]

pop()!

    var a = [1,2,3];
    a.pop(); // 3
    a;       // [1,2]

push(args,)!

    var a = [1,2];
    a.push(3, 4); // 4
    a;            // [1,2,3,4]

reduce(callBack, _initialValue_)

    function sub(prev, current, i, ary) { return prev - current; }
    [1,2,3].reduce(sub); // -4

reduceRight()

    function sub(prev, current, i, ary) { return prev - current; }
    [1,2,3].reduceRight(sub); // 0

reverse()!

    var a = [1,2,3];
    a.reverse(); a; // [3,2,1]

shift()!

    var a = [1,2,3];
    a.shift(); // 1
    a;         // [2,3]

slice(begin, _end_)

    [1,2,3].slice(1,2); // [2]

some(callback, _thisObj_)

    [1,2,3].some(decr); // true

sort(_compareFunction_)!

    var a = [2,3,1];
    a.sort(); a;                             // [1,2,3]
    function longer(a, b) {
        return a.length > b.length? 1:
               a.length < b.length? -1: 0;
    }
    ["aardvark","beaver","cat"].sort(longer); // ["cat","beaver","aardvark"]

splice(index, howMany, _args_,)!

    var a = [1,2,3];
    a.splice(1,2,4,5); // [2,3]
    a;                 // [1,4,5]

unshift(args,)!

    var a = [1,2];
    a.unshift(3,4); // 4
    a;              // [1,2,3,4]
