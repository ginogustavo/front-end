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

async function getCharacters() {
  let ids = [1, 2, 3, 4, 5, 6, 7];
  let promises = ids.map((id) => getCharacter(id));

  // We want to save the data (characteres) in a variable which
  // we assign the value of an asynchronous task
  // When all promises are resolved, save it in "characters"

  try {
    let characteres = await Promise.all(promises); //will be executed asynchronously
    console.table(characteres);
  } catch (id) {
    onError(id);
  }

  //The execution of this function will stop here until all promises
  // are settled, then tha value will be save in "character" variable

  // To use "await" the function needs to be "async" and all part asyn in
  // try catch block
}

getCharacters();
