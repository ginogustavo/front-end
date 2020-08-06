/**
 * Promises - Most browsers support them. They behave like other objects in JS.
 * For compatibility check we can use a polifield (detect in the browser) creates the promises class for us.
 *
 * Promises represent values that we don't know yet, the "promise" that there will be a value
 * when an asynchronous action happens. 3 states:
 *
 * 1. Pending - when we create a promise ( every new promise )
 *
 *    (if the promise is RESOLVED successfully)
 *
 * 2. Fullfilled : To get the value of the resolution of the promise
 *                 .then( val => ... ) a function with the parameter (val) that we expect.
 *
 *      (if the promise got error is REJECTED)
 *
 * 3. Rejected : .catch(err => ...) Provide a function where we get the error as parameter
 *
 * | Pending |  --->  | Fulfilled | ->  .then(val => ...)
 *              |
 *              +-->  | Rejected  | ->  .catch(err=> ...)
 * 
 * Promises not only can resolve asynchronously but also synchronously.
 */

new Promise(function (resolve, reject) {
  //...
});
//To this new object, we provide a function with two parameters "resolve" & "reject" (functions)
// that we call depending on whether the promise is resolved successfully or erro happened, passing
// the respective parameter (val or err)

new Promise(function (resolve, reject) {
  //...
})
  .then((value) => {
    //...
  })
  .catch((err) => {
    //... erro message, log, etc
  });

//After "fulfill" state, we can return another promise within .then() so we can chain them in 
//successive asynchronous actions.

// | Pending |  ->  | Fulfilled |  -> | Promise (pending) | -> | Fulfilled| 
// Each one can be rejected or resolved.


// My sample:

const myPromise = new Promise( (resolve, reject) => {
  const serverConnection = false

  if(serverConnection){
    resolve('Message from server: sucessfull connection')
  }else{
    reject('Message from server: connection refused')
  }

})

myPromise.then( (message) => {
  console.log("Client notifies: "+message)
}).catch( (message) => {
  console.error("Client notifies: "+message)
})
//https://www.youtube.com/watch?v=OXpZfyVXeI8