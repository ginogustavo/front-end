Boolean();  //false

Boolean(0); //false
Boolean(1); //true (or greater)
// If we need to base on the number of attendees of an event

Boolean("")     // false
Boolean(null);  //false
Boolean(NaN);   //false
Boolean(undefined); //false
//a value that is not defined yet. if we have a value it will be true.


var a;
console.log(Boolean(a));
a="test"
console.log(Boolean(a));


// Some truth:
Boolean("a")    // true
Boolean(" ")    // true
Boolean([])     //true
Boolean({})     //true
Boolean(function(){})   //true
Boolean(true)   //true