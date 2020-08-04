/**
 * Check required parameters
 */

const checkRequired = (paramName) => {
  throw new Error(`${paramName} is required`);
};

const doSomething = (requiredParam = checkRequired("requiredParameter")) => {
  console.log(`Do something with ${requiredParam}`);
};

doSomething("foo");
try {
  //doSomething();
} catch (error) {
  console.log(error);
}

/**
 * Use parameters on the to build a default parameter
 */

const giveMeADeveloper = (
  name,
  age,
  helloText = `${name} is ${age} years old`
) => ({ name, age, helloText });

const aDeveloper = giveMeADeveloper("Gino", 30);
console.log(aDeveloper);

//High order function
// ------------------
// return a function

const generateMultiplier = (a) => {
    return function(b){
        return a*b
    }
}
const multiplier = generateMultiplier(5)
const number = multiplier(10); // 50
console.log(number)

// Using arrow functions
const generateMultiplier2 = a => b => a*b
const multiplier2 = generateMultiplier2(5)
console.log(multiplier2(10)); // 50

//Desctructing with default

const printAge = ({age} = {age:20}) => console.log(age)

printAge({name:'Gino', age:30})
printAge() 