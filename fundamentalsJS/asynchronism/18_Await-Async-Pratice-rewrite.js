// ==== Re write below code with async/await
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}
loadJson("no-such-user.json").catch(alert); // Error: 404
// ==== Rewrote code
async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}
loadJson("no-such-user.json").catch(console.log);

// ==== Re write below code with async/await
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();

// rewriting code
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    return response.json();
  } else {
    return new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  let user;
  while (true) {
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // no error , exit the loop
    } catch (error) {
      if (error instanceof HttpError && error.response.status == 404) {
        console.log("No such user, please re-enter");
      } else {
        throw error;
      }
    }
  }
  console.log(`Full name: ${user.name}`);
  return user;
}

demoGithubUser();


//--------------
// How to call wait() in f()
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}
function f() {
  wait().then((data) => console.log(data)); // code here
}
f();
