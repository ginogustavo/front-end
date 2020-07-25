var person = {name: 'Gino',weight: 75}

console.log(`${person.name} weight ${person.weight} at the beginin the year`)

// function increaseWeight(person){
//     return person.weight += 200
// }

const WEIGHT_CHANGE = 0.2
const DAYS_OF_YEAR = 365

const increaseWeight = person => person.weight += WEIGHT_CHANGE
const decreaseWeight = person => person.weight -= WEIGHT_CHANGE

let initial_weight = person.weight

for (let i = 1; i <= DAYS_OF_YEAR; i++) {
    let random = Math.random() // 0 - 1
    /**
     * 0.55645
     * 0.17848
     * 0.58944
     * 
     * .25 of days decrese
     * .25 of days increase
     * .50 % nothing
     * 
     */
     if(random< 0.25){  // increase weight
        increaseWeight(person)
     }else if(random<0.50){ // decrease weight
        decreaseWeight(person)
     }else{ // nothing happens

     }

}

//console.log(`${person.name} weight ${person.weight} Kg. at the end of the year`)
//73.59999999999998
console.log(`${person.name} weight ${person.weight.toFixed(1)} Kg. at the end of the year`)

let msj = 'He ' + ((initial_weight>person.weight)?'lost':'gained') + ' weight'
console.log(msj)