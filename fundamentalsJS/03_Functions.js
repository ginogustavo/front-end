var name = 'Gino', age = 28
function printAge(n, a){
  console.log(`${n} is ${a} years old`)
}
printAge(name, age)
printAge('Vicky', 25)
printAge('Ernesto', 24)

printAge( 23, 'Carlos')
printAge('Juan')
printAge()

// As loosely typed, JS does not wait for variables to be
// defined and it will try to execute it anyway.

// JS reads and runs the code as long as we instruct
// what to execute. If no param is passed, JS will run
// it witouth requiring used variables.
