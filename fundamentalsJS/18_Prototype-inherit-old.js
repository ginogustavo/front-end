//Prototypal inheritance
//-----------------------
//if not found method check parent prototype

function Student(fname, lname, height, weight) {
  this.fname = fname;
  this.lname = lname;
  this.height = height;
}
Student.prototype.greet = function () {
  console.log(`Hi I am ${this.fname} ${this.lname}`);
};
Student.prototype.isTall = function () {
  return this.height > 1.8;
};

function GraduateStudent(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

//inherit from the Parent
inheritFrom(GraduateStudent, Student);

//overwrite the prototype method
GraduateStudent.prototype.greet = function () {
  console.log(`I'm ${this.fname} and I am a graduate student`);
};

//To inherit, we create a function (Note: every function has the attribute "prototype")

function inheritFrom(childPrototype, parentPrototype) {
  //Assign a "child" prototype its "parent" prototype

  var fn = function () {};
  fn.prototype = parentPrototype.prototype;
  childPrototype.prototype = new fn();
  childPrototype.prototype.constructor = childPrototype;
}

//Student
//function we are using to create Student objects

//Student.prototype
//object which returns methods, constructor and attributes
//attribute: __proto__ points to the prototype of this object: Object

//GraduateStudent.prototype.
//is type Student, for Grad we changed the constructor a new greet method.
//proto: is object that has parent methods.
//if method is called, first check in its own prototype has it, then continue to the chain of proto (inheritance)
