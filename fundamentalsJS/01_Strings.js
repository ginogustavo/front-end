//JS is loosely typed programming language
//type of our variables are not specified.
let firstName = "Gino",
  lastName = "Ureta";
let age = 20;
age = "30 years old";

console.log("Hello " + firstName + " " + lastName);
console.log("I am " + age);

// ============== Strings
var firstInUpper = firstName.toUpperCase();
var lastInLower = lastName.toLowerCase();
var myInitial = firstName.charAt(0);
var lengthOfName = firstName.length;

//Concatenate
var fullName = firstName + " " + lastName;

//String Interpolation
var fullName2 = `${firstName} ${lastName}`;
fullName2 = `${firstName} ${lastName.toUpperCase()}`;

//Sub String
var str = firstName.charAt(1) + firstName.charAt(2);
str = firstName.substr(1, 2); //From where to start, and how many char

//Last letter of the name:
var last = firstName.charAt(firstName.length - 1);
last = firstName.substr(-1);
