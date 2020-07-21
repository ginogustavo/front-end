//Scope of Functions

var firstName = 'Gino' // Global variable
// Depending where we are running the code, these variables are
// assigned to the Global object.
// Ex. in a server, in Node.js,there exist a global object.
// In a browser, the Global Object is Window:  window.firstName

function printNameInUpperCase(firstName){
  // JS allows use the same name of variable: "name" exists as Global
  // and Local(in function) scope, with another value.

  // here we could not longer access the global variable "name"
  // since we got the same name within the function. Unless we use:
  window.firstName

  firstName = firstName.toUpperCase()
  console.log(firstName)
}

printNameInUpperCase(firstName) // GINO

firstName // Gino
