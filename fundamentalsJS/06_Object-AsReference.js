var hugo = {
  name: 'Hugo',
  age: 50
}

// passed as reference -> Alter the object
function birthday(person){
  person.age += 1
}

// Passed as value, it is working over local parameter
function birthday2(age){
  age += 1
}

//JS behaves diferently with objects - As parameters they are passed as
//reference. If we modify within the function, it will be reflected outside too.

//Return the person, but change the age
function birthday3(person){
  return {      // return a new object by copying original properties and values
    ...person , // ... break down "person" within this new object.
    age: person.age + 1  // but we can overwrite some of its attributes
  }
}
//This returns a new object that will have 1 year more that the previous one
