const URL_PEOPLE = "https://swapi.dev/api/people/:id/";
const options = { crossDomain: true };
const characterID = 8;

//1. ------ Callbacks --------
const processPeople = (character) => {
  console.log(character.name);
};

// if using jquery: $.get(url, options, onResponseFn)
fetch(URL_PEOPLE.replace(":id", characterID))
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw Error(`Error when looking up character ${characterID}`);
    }
  })
  .then((characterData) => {
    //=> processPeople(personData)

    console.log(`Found Character #${characterID}: ${characterData.name}`);
    console.log(
      `He/She appears in ${characterData.films.length} films in total`
    );
    // const filmSet = new Set();
    // for (const film of characterData.films) {
    //   filmSet.add(film);
    // }
    // for (const film of filmSet) {
    //     console.log(film);
    // }
    let planetArray = [];
    for (const film of characterData.films) {
      processFilm(film, planetArray);
    }
  })
  .catch((err) => {
    console.log(err);
  });

function processFilm(filmURL, planetArray) {
  fetch(filmURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error(`Looking up film ${filmURL}`);
      }
    })
    .then((filmData) => {
      console.log(`Film: "${filmData.title}"`);
      console.table(filmData.planets);
      for (const planetURL of filmData.planets) {
        if (!planetArray.includes(planetURL)) {
          planetArray.push(planetURL);
          processPlanet(planetURL);
        }
      }
    })
    .catch((err) => {
      console.error(`Error on process film: ${err}`);
    });
}

function processPlanet(planetURL) {
  fetch(planetURL)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error(`Looking up planet ${planetURL}`);
      }
    })
    .then((planetData) => {
      console.log(planetData.name);
    })
    .catch((err) => {
      console.error(`Error on process film: ${err}`);
    });
}
