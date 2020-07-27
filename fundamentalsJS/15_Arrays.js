let luffy = { fname: "Luffy", lname: "Monkey", height: 1.6 };
let zoro = { fname: "Zoro", lname: "Ronoroa", height: 1.7 };
let sanji = { fname: "Sanji", lname: "Vismoke", height: 1.75 };
let robin = { fname: "Robin", lname: "Nico", height: 1.8 };
let people = [luffy, zoro, sanji, robin];

people[2];
people[0].fname;
people[0]["height"];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(`${person.fname} is ${person.height} mt. tall.`);
}

// filter()
//==========

const isTall = (person) => person.height >= 1.75;
let tall_people = people.filter(isTall); // this condition has to be a function
let tall_people2 = people.filter(function (person) {
  return person.height >= 1.75;
});
let tall_people3 = people.filter((person) => {
  return person.height >= 1.75;
});
let tall_people4 = people.filter((person) => person.height >= 1.75);
let tall_people5 = people.filter(({ height }) => height >= 1.75);
let short_people = people.filter(({ height }) => height < 1.75);

//Number sample
let numbers = [9, 5, 8, 4, 6, 7, 1, 3, 0];
let small_numbers_filter = (num) => num < 5;
let small_numbers = numbers.filter(small_numbers_filter);
console.log(small_numbers);
console.table(luffy);

//.map() - return new array modifying each elmenents we pass from original array.
//===================
// transm height from mt to cm.  (x100)

const transformToCm = (person) => {
  // person.height = person.height * 100
  person.height *= 100;
  return person;
};

//let transformed = people.map( transformToCm )
// run the function for each person and return the person
// It generates a new array with people with this characteristic

//console.table(transformed)
//console.table(people)  // it's modified -> we should return a new object

//Transforming in a new object
const transformToCm2 = (person) => {
  return {
    ...person,
    height: person.height * 100,
  };
};

let transformed2 = people.map(transformToCm2);
console.table(transformed2); // new array
console.table(people); // original not modified

//Transforming in a new object #2 with parenthesis
const transformToCm3 = (person) => ({
  ...person,
  height: person.height * 100,
});
//to ommit the "return" keyword, use parenthesis wrapping the arrow function
let transformed3 = people.map(transformToCm3);
console.table(transformed3); // new array
console.table(people); // original not modified

//Ex. add a value property based on another property.
const tall_transformer = (person) => ({
  ...person,
  isTall: isTall(person),
});
let new_people = people.map(tall_transformer);

console.table(new_people); // new array
console.table(people); // original not modified

// reduce()
//==========

let nami = { fname: "Nami", books: 50 };
let brook = { fname: "Brook", books: 20 };
let franky = { fname: "Franky", books: 35 };
let chopper = { fname: "Chopper", books: 120 };
let readers = [nami, brook, franky, chopper];

// counter of books :
// this function receives accumulator and each of the objects
const book_counter = (accumulator, reader) => {
  // modify the value of the accumulator
  return accumulator + reader.books;
};
const book_counter2 = (accumulator, { books }) => accumulator + books;

let count = readers.reduce(book_counter2, 0); // reduce to a total number (of books)
// we need 1. a function and 2. the initial value

console.log(`The total number of books is ${count} `);

// Ex. sum of numbers in an array:
//const summing = (total, number) => total + number
//let sum_num = numbers.reduce(summing, 0);
let sum_num = numbers.reduce((total, number) => total + number, 0);
console.log(sum_num);
