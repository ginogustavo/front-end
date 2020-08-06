const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

function getCharacter(id, callback){
    let url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(url, options, callback)
    .fail(()=>{
        console.log('Error has happened, we could not get the character '+id)
    })

    //fail() is executed if an error has ocurred.
}

getCharacter(1 , function(person){
    console.log(`Hey there I'm ${person.name}`)

    getCharacter(2, function(person){
        console.log(`Hey there I'm ${person.name}`)

        getCharacter(3, function(person){
            console.log(`Hey there I'm ${person.name}`)

            getCharacter(4, function(person){
                console.log(`Hey there I'm ${person.name}`)

                getCharacter(5, function(person){
                    console.log(`Hey there I'm ${person.name}`)

                    getCharacter(6, function(person){
                        console.log(`Hey there I'm ${person.name}`)

                        getCharacter(7, function(person){
                            console.log(`Hey there I'm ${person.name}`)
                        })
                    })
                })
            })
        })
    })
})