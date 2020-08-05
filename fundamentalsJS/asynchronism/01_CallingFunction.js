class Person {
  constructor(fname, lname, height) {
    this.fname = fname;
    this.lname = lname;
    this.height = height;
  }
  greet(fn) {
    console.log(`Hi my name is ${this.fname} ${this.lname}`);
    if (fn) {
      fn(this.fname, this.lname); //fn(fname,lname,false) but since the funciones reply is already validating, it works.
    }
    /**
     * Validation values for your parameters
     *
     *  null    = false
     *  0       = false
     *  {} Object even empty = true
     *  [] Array even empty = true
     *  String if empty '' = false else = true
     *  function that exist = true  otherwise is
     *  undefined = false
     *  Nan = false
     */
  }
  isTall() {
    return this.height > 1.8;
  }
}

class Developer extends Person {
  constructor(fname, lname, height) {
    super(fname, lname, height);
  }
  greet(fn) {
    //   let lname = this.lname
    //   let fnane = this.fname
    let { lname, fname } = this; // lname and fname are got from " this"

    console.log(`I'm ${fname} and I am a developer`);
    if (fn) {
      fn(fname, lname, true);
    }
  }
}

function replyGreet(fname, lname, isDev) {
  console.log(`Buen dia ${fname} ${lname}`);
  if (isDev) {
    console.log("Pretty cool you are a Developer");
  }
}

let sasuke = new Person("Sasuke", "Uchiha", 1.85);
let sakura = new Developer("Sakura", "Haruo", 1.65);

sasuke.greet();

//Passing "replyGreet" function as parameter to "greet" function.
sasuke.greet(replyGreet);
sakura.greet(replyGreet);
