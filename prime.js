#!/usr/bin/env node

var fs = require('fs');

var checkprime = function(k, m) {
    for (n=k; cnt < m+1; n++) {
        loop(n);
    } 
};

var loop = function(n) {
   for (k = 2; k <= Math.floor(Math.sqrt(n)); k++) {
       if (n%k == 0) { 
          return ;
       } 
    } 
    arr.push(n);
    cnt++;
};
       
var fmt = function(arr) {
    return arr.join(",");
};

var p = 2;
var cnt = 0;
var max = 100;
var arr = [];
var outfile = "primes.txt"
var outstring = " "
console.log("Prime nums:(" + p + " to " + max +")");
checkprime(p, max);
var outstring = fmt(arr);
fs.writeFileSync(outfile,outstring);
console.log(outstring);
 
