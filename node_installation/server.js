//console(terminal)

console.log('Hello world');

//global object(builtin functions) instead of window object
console.log(global);

//common modules  instead of ES6 Modules

const path = require('path')     
const os = require ('os')
const {add,remainder, divide} = require('./example') //deconstructing objects for modules that are not inbuilt

console.log(add(5,6))

console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.parse(__filename)) //converting it into a more structured format

