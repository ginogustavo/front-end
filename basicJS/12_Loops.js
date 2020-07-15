let students = ["Juan", "Maria", "Segio", "Rosa", "Daniel"];

function greetStudents(student) {
  console.log(`Hey ${student}!`);
}

//while i is less than lenght of students array
for (let i = 0; i < students.length; i++) {
    greetStudents(students[i]);
}

// "for of" initilize a variable in singular, from an array (plural)
for(let student of students){
    greetStudents(student);
}

while(students.length>0){
    console.log(students);
    let student = students.shift();
    greetStudents(student);
}
