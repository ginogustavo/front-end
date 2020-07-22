//Comparing primitives
var x = 4,
  y = "4";
x == y; // true , it take 2 values and compare

// same value and same type
x === y; //false -> * Whenever we can use triple =

//Comparing Objects
var gino = {
  name: "Gino",
};
var other = {
  name: "Gino",
};
gino == other; //false
gino === other; //false

//JS asks for reference of the variable that we are using

// It's true when we use a reference to the same object.
var gustavo = gino; //--> the same position in RAM

gino == gustavo; // true
gino === gustavo; // true

gustavo.name = "Pepe"; // since both point the same, also 'gino' object changes

// Break down the object with spread operator
var another = {
  ...gino,
};
gino == another; //false, since "another" is a new object
