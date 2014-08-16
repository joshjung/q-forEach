q-forEach
=========

This module adds a function to [Q](https://www.npmjs.org/package/q) called `forEach` that sequentially runs a promise-returning function N times for each item in an array or object.

All results are 
Requrements
===========

q version 1.0.1

Install
=======

npm install q-forEach

Example
=======

  var Q = require('q');
  require('q-forEach')(Q);

  var array = [5,4,3,2,1];

  Q.forEach(array, function (value) {
    var defer = Q.defer();
    setTimeout(function () {
      defer.resolve(value);
    },100);
    return defer.promise;
  }).then(function (resolutions)
  {
    console.log('All 5 items completed!',resolutions); // Will output the order in which items were done... [5,4,3,2,1]
  });

License
=======

The MIT License (MIT)

Copyright (c) 2014 Joshua Jung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.