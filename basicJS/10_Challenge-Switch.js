/** If break is not used: By the moment any of the cases is
 * validated to true(without a break), it will continue with the rest.
 * break -> untie the continuity
 */

/**
 * Challenge: Rock-Paper-Scissor game with switch:
 *
 * Rock-Paper-Scissor game, which it returns the result of between
 * user's choose and random machine choose.
 * @param  user
 */

function game(user) {
  let options = ["rock", "paper", "scissor"];
  let bot_number = Math.floor(Math.random() * options.length);
  bot = options[bot_number]; // bot name
  console.log(`User chose: "${user}" and Bot chose: "${bot}"`);

  switch (user) {
    case "rock":
      switch (bot) {
        case "paper":
          return "You lose";
          break;
        case "scissor":
          return "You win";
          break;
        default:
          return "It's a tie";
          break;
      }

      break;

    case "paper":
      switch (bot) {
        case "rock":
          return "You win";
          break;
        case "scissor":
          return "You lose";
          break;
        default:
          return "It's a tie";
          break;
      }
      break;

    default:
      switch (bot) {
        case "paper":
          return "You win";
          break;
        case "rock":
          return "You lose";
          break;
        default:
          return "It's a tie";
          break;
      }
      break;
  }
}

//Test
console.log(game("rock"));
