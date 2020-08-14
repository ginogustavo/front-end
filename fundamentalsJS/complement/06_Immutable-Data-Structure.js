/**
 * Immutable Data Structure allows us to get rid of
 * side effect in data which brings bugs.
 */
const gino = {
  name: "Gino",
  age: 29,
};
const birthday = (person) => person.age++;
console.log(gino);

console.log(birthday(gino));
console.log(birthday(gino));

console.log(gino); // the object is modified - (side effect)

//TO AVOID  side effects.

const birthdayImmutable = (person) => ({
  //<- we are creating a new object in memory
  ...person, // <- when breaking down
  age: person.age + 1, //     and overwrite properties
});

const gustavo = {
  name: "Gustavo",
  age: 29,
};
console.log(birthdayImmutable(gustavo));
console.log(gustavo); //<- this was not changed

// We'd need a new variable to store the new object
const gustavo30 = birthdayImmutable(gustavo);
const gustavo31 = birthdayImmutable(gustavo30);
console.log(gustavo30);
console.log(gustavo31);
console.log(gustavo);

//copying using spead operator. Modified structure without affeting original reference(immutable structure)
let array = [1, 2, 3];
let myOtherArray = [...array];

//summary of spread operator to create clones
const gino2 = {
  height: {
    value: 170,
    unit: "cm",
  },
  name: "Gino",
};

const gino2Clon = {
  ...gino2,
};

gino2Clon.height.value = 180;

console.log(gino2Clon);
console.log(gino2); //< - Both are changes since you have nested objects.

//A trick to copy objects and make them immutables, no matter if there are nested objects
const makeClone = (person) => {
  person = JSON.parse(JSON.stringify(person)); //<- Trick
  return {
    ...person,
  };
};

gino3Clon = makeClone(gino2);
gino3Clon.height.value = 190;

console.log(gino2);
console.log(gino3Clon); //<- does not alter the original
