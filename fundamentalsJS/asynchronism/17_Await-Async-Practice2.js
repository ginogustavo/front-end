//const fetch = require("node-fetch");

async function showAvatar() {
  //read our JSON
  let response = await fetch(
    "https://javascript.info/article/promise-chaining/user.json"
  ); // fetch has always returned a promise
  let user = await response.json();
  console.table(user);

  //Read Git Hub User
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();
  console.table(githubUser);

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  document.body.append(img);

  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  img.remove();
  return githubUser;
}

showAvatar();

// in top-level code (not in function) we could use it only if wrapped
// in an anonymous async function

(async () => {
  let response = await fetch(
    "https://javascript.info/article/promise-chaining/user.json"
  );
  let user = await response.json();
})();
