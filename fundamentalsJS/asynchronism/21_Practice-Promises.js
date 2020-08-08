//practice in promise then catch --promise.all  .catch()

const URL_PEOPLE = "https://swapi.dev/api/people/:id/";
const options = { crossDomain: true };
const characterID = 1;

let characterPromise = new Promise((resolve, reject) => {
  fetch(URL_PEOPLE.replace(":id", characterID))
    .then((response) => response.json())
    .then((data) => {
      console.log(`Character #${characterID} found: ${data.name}`);
      console.log(`In ${data.films.length} films in total`);
      resolve(data.films);
    })
    .catch((err) => {
      reject(err);
    });
});

characterPromise
  .then((films) => {
    let planetsArray = [];
    const promises = films.map((filmURL) => processFilm(filmURL, planetsArray));

    Promise.all(promises)
      .then(() => {
        planetsArray.forEach((planet) => {
          processPlanet(planet);
        });
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

  //return promise for processing Film
function processFilm(filmURL, planetsArray) {
  return new Promise((resolve, reject) => {
    fetch(filmURL)
      .then((response) => response.json())
      .then((filmData) => {
        for (const planetURL of filmData.planets) {
          if (!planetsArray.includes(planetURL)) {
            planetsArray.push(planetURL);
          }
        }
        return resolve();
      })
      .catch((err) => reject);
  });
}

//Return promise to process the Planet
function processPlanet(planetURL) {
  return new Promise((resolve, reject) => {
    fetch(planetURL)
      .then((response) => response.json())
      .then((dataPlanet) => {
        console.log(dataPlanet.name);
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
