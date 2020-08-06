const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const options = { crossDomain: true };

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    let url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, options, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

let onError = (id) => console.log(`Error just happend ${id}`);

let ids = [1, 2, 3, 4, 5, 6, 7];

//Generate a new array with multiple promises

//array.map() nees a function which receives each element of an array (ex. "id" in this case)
//and return a new element for the given one -> return a modified array
// let promises = ids.map(function (id) {
//   return getCharacter(id);
// });

let promises = ids.map((id) => getCharacter(id));

//Call Promise.all

Promise.all(promises)
.then( characteres=> console.table(characteres)) // we got an array with each of the values of the promies
.catch( onError ) // ran if any of the promises in the array failed

// thus we have in order the responses of each promises  (in order they were added in the array)
// PROMISES have more potential over callbacks, we can chain them in paralell


Promise.all(promises)
.then( characteres => {
    characteres.forEach( character=> {
        console.log(`Hi again I am the character ${character.name}`)
    })
})
.catch( onError)