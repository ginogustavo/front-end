let numbers = [12,5,48,23,34,15]

let greaterNum = Math.max(numbers)
console.log(greaterNum) //NaN

//.max() receives a list of arguments, not array (an object)

let greaterNum2 = Math.max(12,5,48,23,34,15)
console.log(greaterNum2)

let greaterNum3 = Math.max(...numbers)
console.log(greaterNum3)

/**
 * Spread operator - we transform the "numbers" variable (the array) into
 *  a list of arguments, that's why we can access the greater number.
 */


 var student = {
    name: 'Gustavo',
    id: 4545645,
    department: 'Computer Science',
    international: false
 }

 function getUnderGradStudent(){
    return {
        ...student
      }   
   }
 function getGradStudent(){
  return {
      ...student,
      assitantship: false,
      advisor: 'Tom Blake'
    }   
 }

 var newUnderGradStudent = getUnderGradStudent()
 console.log(newUnderGradStudent)

 var newGradStudent = getGradStudent()
 console.log(newGradStudent)
 
