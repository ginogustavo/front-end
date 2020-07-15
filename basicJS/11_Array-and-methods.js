let fruits = ["Apple", "Banana", "Cherry", "Strawberry"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

//Methods - That help to change the content of the array (add or remote elements)
//=============

//.push(element) - Adds zero or more elements to the end of the array
let more_fruits = fruits.push("Grapes");  // returns the new size.
console.log(fruits);

//.pop() - removes the last element from an array and returns that element
let last = fruits.pop();
console.log(last)
console.log(fruits)

//.unshift(element) Adds one or more elements at the begining of the array
var newLenght = fruits.unshift("Grapes", "Pineapple"); // returns the new size
console.log(fruits);

//.shift(element) - Removes the first element of the array and returns it. undefined if the array is empty.
fruits.shift();
console.log(fruits);

//indexOf()
let position = fruits.indexOf("Banana");
console.log(position);

//.splice() - changes the contents of an array by removing or 
// replacing existing elements and/or adding new elements in place.
let months = ['Jan', 'Mar', 'Apr','Jun'];
months.splice(1,0,'Feb');
console.log(months);    //[ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun' ]

months.splice(4,1,'May')
console.log(months);    //[ 'Jan', 'Feb', 'Mar', 'Apr', 'May' ]