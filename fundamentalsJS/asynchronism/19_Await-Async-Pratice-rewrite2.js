// async function fetchAvatarURL(id) {
//   let response = await fetch(`https://catappapi.herokuapp.com/users/${id}`);
//   let data = await response.json();
//   return data.imageUrl; // returns a promise that resolve to image url
// }
//console.table(fetchAvatarURL(123));

// First with Promise
// load in paralell - more faster

function fetchAvatars(userID) {
  return fetch(`https://catappapi.herokuapp.com/users/${userID}`)
    .then((response) => response.json())
    .then((user) => {
      let promises = user.cats.map((catID) =>
        fetch(`https://catappapi.herokuapp.com/cats/${catID}`)
          .then((response) => response.json())
          .then((catObj) => catObj.imageUrl)
      );
      return Promise.all(promises);
    });
}
const result = fetchAvatars(123);
console.log(result);

//Now to async await - only work for single promises(not multiple)
// load in sequence -

async function fetchAvatars2(userID) {
  const response = await fetch(
    `https://catappapi.herokuapp.com/users/${userID}`
  );
  const user = await response.json();

  let catsURLS = [];
  for (const catID of user.cats) {
    const response = await fetch(
      `https://catappapi.herokuapp.com/cats/${catID}`
    );
    const cat = await response.json();
    catsURLS.push(cat.imageUrl);
  }

  return catsURLS;
}
const result2 = fetchAvatars2(123);
console.log(result2);
