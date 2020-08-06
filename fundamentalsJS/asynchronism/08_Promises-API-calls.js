const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

// Instead of receiving a callback as paramter, return a promise

function getCharacter(id){
    //return new Promise(function (resolve, reject){})  migrate to arrow function
    return new Promise((resolve, reject)=>{
        // here make the asynchronouse call
        let url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        
        $.get(url, options, function(data){
            resolve(data)
        })
        .fail( ()=> reject(id))
    })

}

let onError = id=> console.log(`Error just happend ${id}`)

getCharacter(1)
    .then( function(person){
        console.log(`The person 1 is ${person.name}`)
    })
    // .catch( function(id){
    //     onError(id)
    // })
    .catch( onError )

