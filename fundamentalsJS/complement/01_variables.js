var gino = {
  name: "Gino",
  age: 25,
};

/**
var scope is like global
Let scope is in the block of code
const similart to let but not allow to updated. cannot be re-assigned but modify.
ex. array
const array = [1,2]
array = [1,3]  X this cannot be done
array.push(5)  This is allowed

*/
const LEGAL_AGE = 18;
function isLegalAge(person) {
  if (person.age >= LEGAL_AGE) {
    var msj = "is Adult";
  } else {
    var msj = "Is Juvenile";
  }
  console.log(msj);
}

// isLegalAge(gino)

for (var i = 0; i < 10; i++) {
  console.log("within iteration: " + i);
}
// using let, wont be possible, since let is only for context
console.log("final result " + i);
