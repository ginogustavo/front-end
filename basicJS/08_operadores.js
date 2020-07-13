//Binary operator:  3+4    x * y
// == does not take the type but considers the value (inside)
3 == "3" // true

// === The type and the value should be the same. Ex. Number === String
3 === "3" // false

//Strict not equal 
a!==b

//Unary operator:
!true
x++ 
++x

//Unary negation: if x is 3, then -x returns -3.
let p = 3;
console.log(-p); // -3


//Unary plus (+) : Attempts to convert the operand to a number, if it is not already.
+"3" //returns 3.
+true //returns 1.

//Exponentiation operator (**)	
// Calculates the base to the exponent power, that is, baseexponent
2 ** 3      // returns 8.
10 ** -1    // returns 0.1.

a && b
a || b

var age = 10;
age++;      //10
age += 2    //13

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 */