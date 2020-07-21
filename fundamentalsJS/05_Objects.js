//Objects
var gino = {
  firstName: 'Gino',
  lastName: 'Ureta',
  age: 28
}
var dario = {
  firstName: 'Dario',
  lastName: 'Sunisky',
  age: 25
}
//Method 1: Simple string as parameter
function printName1(firstName){
  firstName = firstName.toUpperCase()
  console.log(firstName)
}
//Method 2: object as parameter and extract the property name
function printName2(persona){
  console.log(persona.firstName.toUpperCase())
}
//Method 3: Within curly braces(that simbolize an object)just set the needed
// properties. We get the attribute "firstName" of the Object that comes.
function printName( {firstName} ){
  console.log(firstName.toUpperCase())
}

printName(gino)
printName(dario)
printName( {firstName: 'Luffy' } ) // we can define an object on the fly

// printName()  // Without parameter.
// ERROR, since JS will try to access the attribute "firstName" from
// Something that ends up being "undefined". same for

//printName( {lastName: 'Moneky' } ) // Since in the function we are asking
//for the property firstname

var employee = {
  first_name: 'Luffy',
  last_name: 'Monkey',
  experience_company: 2,
  experience_other: 5,
  //total_experience: this.experience_other + this.experience_company,
  manager_role: false ,
  //full_name: this.first_name.toUpperCase() + " " + this.last_name.toUpperCase(),
  salary: 20000
  // bonus: function(){
  //   if(manager_role){
  //     return salary * 1.5
  //   }else{
  //     if(total_experience > 10){
  //       return salary * 1.3
  //     }else{
  //       return salary * 1.1
  //     }
  //   }
  // }
}

var employeeKing = {
  first_name: 'Luffy',
  last_name: 'Monkey',
  experience_company: 2,
  experience_other: 5,
  manager_role: false ,
}

function employeeDetails(employee){
  var full_name = employee.first_name.toUpperCase()+ ' '+employee.last_name.toUpperCase()
  var total_experience = employee.experience_company + employee.experience_other
  console.log(`${full_name} has ${total_experience} years of experience`)
}

employeeDetails(employeeKing)
employeeDetails({ first_name: 'Roger',
    last_name: 'Gold',
    experience_company: 10,
    experience_other: 10 })



// ========== Desctruct Objects

function printEmployee(employee){
  //var first_name = employee.first_name
  var {first_name}  = employee  // avoid duplicated.
  // declaring first_name variable that comes from employee.first_name
  console.log( first_name)
}

printEmployee(employeeKing)

//Challenge:
function printStudent(student){
  var {firstName} = student
  var {age} = student
  //console.log(`Hi my name is ${student.firstName} and I'm ${student.age} years old`)
  console.log(`Hi my name is ${firstName} and I'm ${age} years old`)
}
printStudent(gino);
printStudent(dario);
printStudent({ firstName:'Zoro', age: 19 });




// More Examples
var casa = { habitaciones: 3, bannios: 1, jardin: true }

var { jardin } = casa
console.log (jardin) // true

var { habitaciones: alcobas } = casa
console.log (alcobas) // 3
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment#Desestructuraci%C3%B3n_de_objetos
