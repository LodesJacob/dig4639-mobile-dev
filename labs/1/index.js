// include adder.js
const Adder = require( './adder.js' );

// create props object
var props = {
    a: 5,
    b: 10
}
// create object from class with props
var sum = new Adder(props);

// render and write render to console
console.log(sum.render());