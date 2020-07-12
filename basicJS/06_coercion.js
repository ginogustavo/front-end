/**
 * Implicit coercion
 * -----------------
 *JS helps us to change the value type to another. Ex.  
 */

4+"7" // "47" -> concatenation because of +
4*"7" // 28 -> * is number operation. JS assumes we didn't want "7" string but a number 7

var a = 20;
var b = a + "";

var array1 = [1,2];
var array2 = [3,4];
var d  = array1 + array2;
// by concatenation both arrays are made in strings to join later
console.log(typeof d);


/** 
 * Explicit coercion
 * -----------------
 * We make the the type of a value to change to another type as needed.
*/
var c = String(a);
typeof c // "string"

var d = Number(c);
typeof d //"number"

var e = a.toString();

//Unary operator + (explicity it transfor to a number)
var f = "100";
var g = +f;
console.log(typeof g);

var h = "3.14";
var i = 5+ h;
console.log(typeof i);

/**
 * Number + Number = Number
 * Number + Number = String
 * String + Number = String
 * String + String = String
 * 
 * Every properties of value are strings
 */