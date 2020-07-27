//filter() sample - Numbers
//-----------------
let numbers = [9, 5, 8, 4, 6, 7, 1, 3, 0];
let small_numbers_filter = (num) => num < 5;
let small_numbers = numbers.filter(small_numbers_filter);

console.log(small_numbers);

//map() sample - add a value property based on another property.
//-------------------
let luffy = { fname: "Luffy", lname: "Monkey", height: 1.6 };
let zoro = { fname: "Zoro", lname: "Ronoroa", height: 1.7 };
let sanji = { fname: "Sanji", lname: "Vismoke", height: 1.75 };
let robin = { fname: "Robin", lname: "Nico", height: 1.8 };
let people = [luffy, zoro, sanji, robin];
const isTall = (person) => person.height >= 1.75;

const tall_transformer = (person) => ({
  ...person,
  isTall: isTall(person),
});
let new_people = people.map(tall_transformer);

console.table(new_people); // new array
console.table(people); // original not modified

// reduce() sample - sum of numbers in an array:
//-----------------
//const summing = (total, number) => total + number
//let sum_num = numbers.reduce(summing, 0);

let sum_num = numbers.reduce((total, number) => total + number, 0);
console.log(sum_num);

// some exercises:
const users = [
  {
    id: 1,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
  },
  {
    id: 2,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
  },
];

//Adding new elements:
const newUser = {
  id: 4,
  name: "Denomer Crazy",
  username: "crazy.1",
  email: "deno@crazy.com",
  phone: "",
  website: "crazy.app",
  password: "crazed_checker",
};

// spread operator used to concat two arrays
const newUsers1 = [...users, newUser]; // add element at the end
const newUsers2 = [newUser, ...users]; // add element at first
const newUsers3 = users.concat(newUser); //the old way

// spread operator ... used to modify shape of object
const hobbies = ["surfing", "reading"];
const newUsers4 = users.map((u) => ({ ...u, hobbies })); //add hobbies to users array and return as new array

//get email, address and website from users
const user_emails = users.map(({ email, website, phone }) => ({
  email,
  website,
  phone,
}));

// find and replace value for key objects
// this will return newUsers with all user having name 'te'
const user2changed = (u) => (u.id == 2 ? { ...u, name: "New Name" } : u);
let userChanged = users.map(user2changed);

const deleteWebsite = ({ id, email, name, username, phone, password }) => ({
  id,
  email,
  name,
  username,
  phone,
  password,
});
const usersNoWebiste = users.map(deleteWebsite);

//Above code seems to be practically difficult to code for big objects.
const newUsers = users.map((u) =>
  Object.keys(u).reduce(
    (newObj, key) => (key != "website" ? { ...newObj, [key]: u[key] } : newObj),
    {}
  )
);
