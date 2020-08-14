//2 cases:

//1. When start with array: 
//----------------------------
//You have to add ; at the end of the previous instruction
//console.log('text');
// [1,2,3].forEach(n=> console.log(n*2))

//or at the begining of the array instruciton
console.log('text')
;[1,2,3].forEach(n=> console.log(n*2))

//2. When start with string / literal: 
//----------------------------
const name = 'Gino';
console.log('text 2');
`${name} hey there`


// bonus - when using return the variable, object or referce  you return has to be
// in the same line, if hit enter is an error

function getdouble (n){
    return n*2
    //return            //<-not this
    //      n*2

}
