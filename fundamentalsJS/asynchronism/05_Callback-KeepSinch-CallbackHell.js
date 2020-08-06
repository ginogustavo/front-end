const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

function getCharacter(id, callback){
    let url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, (person) =>{
        console.log(`Hey there I'm ${person.name} id: ${id}`)

        if(callback){
            callback()
        }
    })
}

// if we want to keep the order of call with response, let's use callbacks
//WE LOSE the parellism of the request.
//we have to make a request and then in the callback another req, in another callack another request, and so on.

// CALLBACK HELL 
getCharacter(1 , function(){
    getCharacter(2, function(){
        getCharacter(3, function(){
            getCharacter(4, function(){
                getCharacter(5, function(){
                    getCharacter(6, function(){
                        getCharacter(7)
                    })
                })
            })
        })
    })
})

//IF WE CALL getCharacter(1 , getCharacter(2) ) -> it will call #2 inmediatly




