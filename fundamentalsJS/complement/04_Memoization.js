/**
 * Another example of recursivity:
 *
 * 6! =  6 * 5 * 4 * 3 * 2 * 1 = 720
 * base case : 1
 *
 * 12! = 12 * 11 * 10 .... * 1 =
 * 12! = 12 * 11 * 10 * 9 * 8 *7 * 6! =
 */

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
  // 6 * factorial(5)
  // 6 * 5 * factorial(4)
  // ...
  //  6 * 5 * 4 * 3 * 2 * 1
}
console.log(factorial(6))

// Usando Memoization

function factorialM(n) {
    //Ask if there is a cache?
    if(!this.cache){
        this.cache = {}
    }

    //First ask if result was calculated. if so, return it
    if(this.cache[n]){
        return this.cache[n]
    }

    if (n === 1) {
      return 1;
    }
    //save into cache
    this.cache[n] = n * factorial(n - 1)
    

    return this.cache[n];
  }