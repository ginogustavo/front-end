const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

const onResponsePeople = (person) =>{
    console.log(`Hey there I'm ${person.name}`)
}
function getCharacter(id){
    let url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, onResponsePeople)
}


//Asyncronism of JS:
//We don't know in what order we get the responses

getCharacter(1)
getCharacter(2)
getCharacter(3)
