const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
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

getCharacter(1)
  .then((person1) => {  // following can be the same name
    console.log(`The person 1 is ${person1.name}`);

    //return another Promise
    return getCharacter(2);
  })
  .then((person2) => {
    console.log(`The person 2 is ${person2.name}`);
    return getCharacter(3);
  })
  .then((person3) => {
    console.log(`The person 3 is ${person3.name}`);
    return getCharacter(4);
  })
  .then((person4) => {
    console.log(`The person 4 is ${person4.name}`);
    return getCharacter(5);
  })
  .then((person5) => {
    console.log(`The person 5 is ${person5.name}`);
    return getCharacter(6);
  })
  .then((person6) => {
    console.log(`The person 6 is ${person6.name}`);
    return getCharacter(7);
  })
  .then((person7) => {
    console.log(`The person 7 is ${person7.name}`);
  })
  .catch(onError); // is the same for all of them.
