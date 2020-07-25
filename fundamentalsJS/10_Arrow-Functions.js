const LEGAL_AGE = 18;
var person = { name: "Gino", age: 27 };
var myBrother = { name: "Tony", age: 14 };
/**
 * Arrow functions
 * ---------------
 * Assign a function to a variable - Not all programming languages allows it
 */

// function validateAdult(person) {
//   return person.age >= LEGAL_AGE;
// }

// Method 1: Anonymous function
const validateAdult = function (person) {
  return person.age >= LEGAL_AGE;
};
//assigned to a variable with its name

//Method 2: Arrow function
const validateAdul2 = (person) => {
  return person.age >= LEGAL_AGE;
};

//When only one parameter, we can ommit the parenthesis
const validateAdult3 = person => {
  return person.age >= LEGAL_AGE;
};

//if only returns something, we can:
//ommit the return keyword and delete the curly braces
const validateAdult4 = (person) => person.age >= LEGAL_AGE;

//We could destructure(break down) the parameter, but we need ({})
//since we only care about the age
const validateAdult5 = ({ age }) => age >= LEGAL_AGE;
//  the function expect the attribute age of the object passed


function allowAccess(person){
    if(!validateAdult5(person)){
        console.log('Access denied')
    }
}

//escribir la funcion es menor de edad
//como arrow function y que retorne la gengacion a 
//la llamada es mayor edad

//const younger = person => !validateAdult5(person)
const younger = ({age}) => !validateAdult5({age})

console.log(`${person.name} younger? ` + younger(person))
console.log(`${myBrother.name} younger? ${younger(myBrother)}` )




function printAdult(person) {
  console.log(`${person.name} is `);
  if (validateAdult3(person)) {
    console.log("of legal age");
  } else {
    console.log("not of legal age");
  }
}

printAdult(person);
