const gino = { name: "Gino", lname: "Ureta" };
const gustavo = { name: "Gustavo", lname: "Ureta" };
const giordano = { name: "Giordano", lname: "Ureta" };

function greet(greeting = "Hello") {
  console.log(`${greeting}, my name is ${this.name}`);
}

// Different functions in which each one has different "this" (object) binded
const greetGino = greet.bind(gino, "hi"); //<- 1st parameter is the context reference (who is "this"), and then the other that functions needs.
const greetGustavo = greet.bind(gustavo);
greetGino()
greetGustavo()

setTimeout(greet.bind(gino, "Hey there"), 1000);

/**
 * bind() does not run the function, but it returns a new function 
 * with that changed context.
 * 
 * call() & apply() run the function in that moment.
 */

 greet.bind(gino) //<- no run
 greet.call(gino) //<- run it

 //if need parameters
 greet.call(gino, 'Hi hi XD')

//apply() - similar to call
// 1st param: the context "this", 
// 2nd param: the array or parameters
greet.apply(gino, ['Hola'])



