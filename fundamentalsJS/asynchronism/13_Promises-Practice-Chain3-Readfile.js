//Reading a file.  Run with node file.js

const fs = require("fs");

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      data = data.split(/\r?\n/)[0];
      if (error) reject(error);
      return resolve(data);
    });
  });
}

// readFile("./mysampleFile.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Printing error " + err));

readFile("./file1.txt")
  //.then((data) => readFile(data)) //below is the same
  .then(readFile)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));


//Promise.all - receives a list of promises to run simustaneously
// if any is rejected then the entire list is rejected too
// if all are resolved, then we can get a list of all response.
