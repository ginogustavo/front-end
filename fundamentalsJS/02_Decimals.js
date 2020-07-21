var age = 27;
// age = age +1
age += 1;

var weight = 75;
// weight = weight -2
weight -= 2;

var sandwich = 1;
// weight = weight + sandwich
weight += sandwich;

var playSoccer = 3;
// weight = weight - playSoccer
weight -= playSoccer;

//========= Decimals

var winePrice = 200.3;
var total = winePrice * 3; //600.9000000000001
// way to store decimals is not precise.
// assign certain amout of bytes in RAM to point to a decimal

//Workaround
total = (winePrice * 100 * 3) / 100;
/**
 * (* 100) -> becomes an integer
 * (* 3)   -> the original factor we want to multiply
 * (/ 100) -> back to the amount we were looking for
 *
 * Note: this way because we know is only one decimal:  .3
 * if not sure, we need a more complex calculation
 */
total = Math.round(winePrice * 100 * 3) / 100; 

var totalStr = total.toFixed(2)
//consider 2 decimals after the comma

var total2 = parseFloat(totalStr)
//Transform from String to decimal


//Division
var pizza = 8, people = 2
var portionsQuantity = pizza / people


