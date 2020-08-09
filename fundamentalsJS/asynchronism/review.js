let mypromise = new Promise((resolve, reject) => {
  let first_result = 1 + 2;
  console.log(`first_result: ${first_result}`);
  resolve(first_result);
});

mypromise
  .then((firstParam) => {
    console.log("Processo A, received: " + firstParam);
    console.log("Process A, starting...");
    let a = firstParam + 2;
    console.log("Process A, finished. sending value to next phase: " + a);
    return a;
  })
  .then((secondParam) => {
    console.log("Processo B, received: " + secondParam);
    console.log("Process B, starting...");
    let c = secondParam + 2;
    console.log("Process B, finished. sending value to next phase: " + c);
    return c;
  })
  .then((lastParam) => {
    console.log(`Final process, we got: ${lastParam} process final`);
    console.log(`final value: ${lastParam * 2}`);
  });

// syntactic sugar
let prom2 = new Promise((resolve, reject) => {
  resolve(1);
});
prom2
  .then((firstParam) => firstParam + 2)
  .then((secondParam) => secondParam + 2)
  .then((lastParam) => console.log(lastParam * 2))
  .catch((err) => console.log(err));

// try catch
const syncDoSomething = (a) => {};
const syncDoSomethingElse = (b) => {};
const syncDoThirdThing = (c) => {};
const failureCallback = (e) => {};
try {
  const result1 = syncDoSomething();
  const result2 = syncDoSomethingElse(result1);
  const result3 = syncDoThirdThing(result2);
  console.log(result3);
} catch (error) {
  failureCallback(error);
}

//async / await
async function process() {
  try {
    const result1 = await syncDoSomething();
    const result2 = await syncDoSomethingElse(result1);
    const result3 = await syncDoThirdThing(result2);
    console.log(result3);
  } catch (error) {
    failureCallback(error);
  }
}
