// Two types of functions:

//Declarative functions
function myFunction() {
  return 3;
}
myFunction();

//Expression functions
// or Annonimous functions, since here it is not named.
// There is only a variable(with its own name) and the value
// is a function without a name
var myVarFunction = function (a, b) {
  return a + b;
};

var a = myVarFunction(5, 3);
console.log(a);

function greetStudents(student) {
  console.log(`Hola ${student}`);
}
greetStudents("Gino");

function sum(a, b) {
  var result = a + b;
  return result;
}
console.log(`The sum is: ${sum(4, 3)}`);

/**
 * Thanks to hoisting, in JS (when coding) the declaration 
 * of functions can be after the call itself because when it compiles
 * the functions hoist to the begining.
 */
