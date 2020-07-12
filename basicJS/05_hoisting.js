// with var

console.log(myName);
var myName = "Gino";

/**
 * What was hoisted was the declaration var myname (without any assigment)
 * thus, when console log -> undefined. It is like:
 * 
 * var nyName;
 * console.log(myName);
 * myName = "Gino";
 */


 /**
  * Functions are declared before variables
  */
 dowork();
 function dowork(){
    console.log("hi there, "+ myName);
 }

 var myName = "Gino" //--> hi there undefined.


 /**
  * For expression func: 
  *     var afunc = function(){}
  * The hoisting makes the declaration of variable goes to top.
  * If call the function -> afunc is not a function (it has undefined value)
  *     var afunc;
  *     afunc = function(){}
  * 
  * For Declarative func:
  * it can be called first and then declared.
  */
sayHello();
function sayHello(){
	console.log("Test");
}

/**
 * Class can be used only after being declared
 * error: Persona is not defined */
var persona = new persona();
class Persona{
}

