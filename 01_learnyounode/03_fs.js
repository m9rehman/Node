var fs = require('fs')

// var pathToFile = process.argv[2];
// console.log(pathToFile);

var FileBuffer = fs.readFileSync(process.argv[2].toString());
var subStringArray = FileBuffer.toString().split('\n');
console.log(subStringArray.length -1);