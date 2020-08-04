/**
 * Objects in JS, are Prototypes (instead of classes)
 * Newer JS versions, there are classes, but no Inheritance like other languages
 * 
 * Classes are functions that sintaxis has 2 components
 * - Expresssions
 * - Declarations
 */

function Person(){
    console.log('person prototype executed') // sort of constructor
}
let gino = new Person() 
// "new" + [Prototype] -> create new object
// Implicitly returns the newly created objects

function Student(fname, lname, height, weight){
    //we can refer this object (in memory) using "this" keyword
    this.fname = fname
    this.lname = lname
    this.height = height
    this.weight = weight
    // implicitly the prototype returns "this" when we call the function with "new"
}
let gustavo = new Student('Gino', 'Ureta')
 
// Tell the prototpye about the functions (for the object)
// Within the student Prototype there is going to be a attribute greet that is going to be a function.

Student.prototype.greet = function (){
    console.log(`Hi my name is ${this.fname} ${this.lname}`)
}
gustavo.greet()

let naruto = new Student('Naruto', 'Uzumaki')
let luffy = new Student('Luffy', 'Monkey')
naruto.greet()
luffy.greet()


Student.prototype.stateHeight = function(){
    console.log(`${(this.height>1.8)?`I'm tall`:`I'm not tall`}`)
}
Student.prototype.showWeight = function(){
   return this.weight
}
//if it's going to be an arrow function. it wouldn't work.
//Student.prototype.showWeight = () => this.weight
/**
 * In arrow functions: "this" is the reference to the outer 
 * global object, in the browser is the "Window" object
 * 
 * also lambdas lack or reference this
 */

let sasuke = new Student('Sasuke','Uchiha', 1.85)
sasuke.greet()
sasuke.stateHeight()

let sakura = new Student('Sakura', 'Haruo', 1.65)
sakura.greet()
sakura.stateHeight()

let chouyi = new Student('Chouyi','Akimichi', 1.70, 90)
chouyi.greet()
chouyi.stateHeight()
chouyi.showWeight()

//Prototype is one more object of JS, if we modify it, it is changed onwards
