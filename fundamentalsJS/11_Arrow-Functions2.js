var hello = () => 'Hello World'
console.log(hello())
console.log( (() => 'Hello World')() )

//arrow function returning sum of array (old way)
var sum_array = array => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        let number = array[index];
        sum += number
    }
    return sum
}

// Using .reduce() method.

//You can use an auxiliary method
function sumElements(total, num){
    return total + num
}
// and call in the reduce
var sum_array2 = array => {
   return  array.reduce( sumElements )
}
// or this wa
var sum_array3 = array => array.reduce(sumElements)

// Or can use another anonymous function
var sum_array4 = array => array.reduce(  (a,b) =>a+b  )

console.log( sum_array4([1,2,3,4,5]) )