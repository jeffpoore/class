#!/usr/bin/env node
var fs = require('fs'); var outf = "hellostartup.txt" 
var outtxt = "A startup is a business built to grow rapidly.\n"; 
fs.writeFileSync(outf, outtxt); 
console.log("Script: " + __filename + "\nWrote: " + outtxt + "To: " + outf);
