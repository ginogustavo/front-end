//EcmaScript 2015
//underneath, all is prototypes

class Person {
  constructor(fname, lname, height) {
    this.fname = fname;
    this.lname = lname;
    this.height = height;
  }

  greet() {
    console.log(`Hi my name is ${this.fname} ${this.lname}`);
  }

  isTall() {
    return this.height > 1.8;
  }
}

class Developer extends Person {
  constructor(fname, lname, height) {
    super(fname, lname, height); // calling constructor of parent class
  }
  greet() {
    console.log(`I'm ${this.fname} and I am a developer`);
  }
}

//let sasuke = new Person('Sasuke','Uchiha', 1.85)
//let sakura = new Developer('Sakura', 'Haruo', 1.65)