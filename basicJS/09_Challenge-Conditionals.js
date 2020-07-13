//Challenge of conditionals
/*
    0 = rock
    1 = paper
    2 = scissor
*/
let options = ["rock", "paper", "scissor"];

/**
 * Rock-Paper-Scissor game, which it returns the result of between 
 * user's choose and random machine choose.
 * @param  user 
 */
function game(user) {
  let bot = Math.floor(Math.random() * 3);
  console.log(
    `User chose: "${options[user]}" and Bot chose: "${options[bot]}"`
  );

  if (user == bot) {
    return "It's a tie";
  }
  if (user == 0) {
    return bot == 1 ? "You lose" : "You win";
  } else if (user == 1) {
    return bot == 0 ? "You win" : "You lose";
  } else {
    return bot == 1 ? "You win" : "You lose";
  }
}

//Test
let user = options.indexOf("scissor");
let result = game(user);
console.log(result);
