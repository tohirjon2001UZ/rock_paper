import { lizard, paper, rock, scissors, spock } from "./constants.js";

export function checkWinner(ai, player) {
  if (ai === player) {
    return "draw";
  } else if (
    (ai === rock && (player === scissors || player === lizard)) ||
    (ai === paper && (player === rock || player === spock)) ||
    (ai === scissors && (player === paper || player === lizard)) ||
    (ai === lizard && (player === spock || player === paper)) ||
    (ai === spock && (player === scissors || player === rock))
  ) {
    return "ai";
  } else {
    return "player";
  }
}
checkWinner();
