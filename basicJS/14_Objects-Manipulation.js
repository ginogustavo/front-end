//Accessiong with brackets and the value of a variable
var person = {
  lastName: "Ureta",
  firstName: "Gino",
};
function getName(prefix) {
  return prefix + "Name";
}
var prop = getName("first");
console.log(person[prop]);

prop = getName("last");
console.log(person[prop]);

// Adding
person.middleName = "Gustavo";
console.log(person);

//Deleting
delete person.middleName;
console.log(person);

//Testing object for properties (validate)
person.hasOwnProperty("firstName"); //true
person.hasOwnProperty("middleName"); //false
