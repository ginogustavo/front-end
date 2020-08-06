let promise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 3000);
});

//method 1
promise.then(
  (result) => console.log(".then() method 1 " + result),
  (error) => console.error("error")
);

//method 2 - if we are interested only in "successful" completition
// provide only one argument for .then()
let promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 4000);
});

promise2.then((msj) => {
  console.log(".then() method 2 " + msj);
});

// .catch() - if we are interested only in 'errors' we could use:
// .then(null, errorHandling) or
// .catch( errorHandlingFunction )
let promise3 = new Promise((resole, reject) => {
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 1000);
});
promise3.catch((err) => console.log("error " + err));

//.finally() - runs when promise is settle, be it resolved or rejected.
// It's useful for cleanup, stopping load indicators, etc.

//  ex. finnaly - then
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 2000);
})
  .finally(() => console.log("4. promise settled"))
  .then((msg) => console.log("4. Msg: " + msg));

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 5000);
})
  .then((msg) => console.log("5. Msg: " + msg))
  .finally(() => console.log("5. promise settled"));

//  ex. finnaly - catch
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Something happen"));
  }, 7000);
})
  .finally(() => console.log("6. finally code"))
  .catch((err) => console.log("6. " + err));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Something happen"));
  }, 7500);
})
  .catch((err) => console.log("7. " + err))
  .finally(() => console.log("7. finally code"));

// On settle promises handlers run immediatly.
let promise4 = new Promise((resolve) => resolve("done 8"));
promise4.then((msg) => console.log(msg));

//Exercise:
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script failed to load ${src}`));

    document.head.append(script);
  });
}

let promise5 = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise5.then(
  (script) => console.log(`Script ${script.src} is loaded`),
  (error) => console.log(`Problems: ${error.message}`)
);

//promise5.then( script => console.log('Another handler'))
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

delay(3000).then(() => console.log("runs after 3 seconds"));
