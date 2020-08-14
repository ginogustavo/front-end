/**
 * Closures: a function that remembers the state of things when it was invoked.
 *
 *
 */

//Create greetings-> a function that creates other
function createGreeting(endOfPhrase) {
  // anonymous function, each one is remembering which one was the variable 
  // that was sent when function createGreeting was called.
  return function (name) {
      console.log(`Hola ${name} ${endOfPhrase}`)
  };
}

const argentinianGreet = createGreeting("Che");
const mexicanGreet = createGreeting("guey");
const colombianGreet = createGreeting("amigo");

argentinianGreet("Sacha"); // Hola sacha che
mexicanGreet("Sacha"); // Hola Sacha guey
colombianGreet("Sacha"); // Hola Sacha amigo
