//async / await
//https://codepen.io/ginogustavo/pen/MWyYzMz?editors=0011

const URL_PEOPLE = "https://swapi.dev/api/people/:id/";
const options = { crossDomain: true };
const characterID = 1;

// Test using Promise
function getCharacterData(id) {
  return new Promise((resolve, reject) => {
    fetch(URL_PEOPLE.replace(":id", id))
      .then((response) => resolve(response.json()))
      .catch((err) => reject(err));
  });
}

(async () => {
  //   let promise = getCharacterData(characterID);
  //   promise.then((data) => console.log(data));
  //let data_in_promise = await getCharacterData(characterID); //<= we could avoid use of "Promise"
  //console.table(data_in_promise);
})();

//Test sheer Async / Await
async function processCharacter(id) {
  const characterResponse = await fetch(URL_PEOPLE.replace(":id", id));
  const characterData = await characterResponse.json();
  let planetURLs = [];

  let planets = [];

  //for each film of this character, bring the planets
  for (const filmURL of characterData.films) {
    console.log(filmURL);
    let filmResponse = await fetch(filmURL);
    console.log(filmResponse);
    let filmData = await filmResponse.json();

    //for each planet of this Film, request the planet object to print the name
    for (const planetURL of filmData.planets) {
      if (!planetURLs.includes(planetURL)) {
        planetURLs.push(planetURL);
        let planetResponse = await fetch(planetURL);
        let planetData = await planetResponse.json();
        //console.log(planetData.name);
        planets.push(planetData.name);
      }
    }
  }
  return planets;
}

//const characterPromise = processCharacter(characterID);
//characterPromise.then((data) => console.log(data));
function retrieve() {
  let text = document.getElementById("txtID");
  let cont = document.getElementById("content");

  const characterPromise = processCharacter(text.value);
  characterPromise.then((data) => {
    
    let planetsHTML = "<OL>";
    for (const planet of data) {
      planetsHTML += `<li>${planet}</li>`;
    }
    planetsHTML += "</OL>";
    cont.innerHTML = planetsHTML;
  });

  return false;
}
const validateURL = (url) => {
  if (!url.includes("https://")) {
    return url.replace("http://", "https://");
  } else {
    return url;
  }
};
