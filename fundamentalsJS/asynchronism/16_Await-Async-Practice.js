// ASYNC - before a function means that it will return a promise.
// Other values are wrapped in a resolved promise automatically
async function f() {
  return 1;
}
f().then(console.log);
// Same as a promise:
async function f2() {
  return Promise.resolve(1);
}
f2().then(console.log);

// AWAIT - only inside a async function: let value = await promise;
// JS will wait until the promise settles and returns its result
// JS engine can do other jobs in the meantime: execut other scripts, handle events, etc

async function process1Second() {
  let myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1000);
  });
  //myPromise.then(data => console.log(data) )

  let value = await myPromise; //pauses and resumes when the promise settles
  console.log(value);
}
process1Second();



// Practice
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function test() {
  let myPromise = await resolveAfter2Seconds(10);
  console.log(myPromise);
}
test(); // when is a promise

async function test2() {
  let noProm = await 20; // if value is not a Promise, it converts in a settled Promise
  console.log(noProm);
}
test2();

async function test3() {
  try {
    var newProm = await Promise.reject(30);
  } catch (error) {
    console.error(error); //30
  }
}
test3();
