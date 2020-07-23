var person = {
    name: 'Gino',
    age: 27,
    engineer: false,
    cook: false,
    singer: true,
    dj: false,
    guitarist: false,
    surfer: false
}

function printProfessions(person){
    console.log(`${person.name} es: `)

    if(person.engineer){
        console.log('Engineer')
    }else{
        console.log('Not engineer')
    }
    if(person.cook){
        console.log('Cook')
    }
    if(person.singer){
        console.log('Singer')
    }
    if(person.dj){
        console.log('DJ')
    }
    if(person.guitarist){
        console.log('Guitarist')
    }
    if(person.surfer){
        console.log('Surfer')
    }
}


const LEGAL_AGE = 18

function printAdult(person){
    console.log(`${person.name} is `)
    if(validateAdult(person)){
        console.log('of legal age')
    }else{
        console.log('not of legal age')
    }
}
printProfessions(person)
printAdult(person)

//validate age
function validateAdult(person){
    return person.age>=LEGAL_AGE
}

var juan = {
    name: 'Juan',
    age: 10
}

printAdult(juan)