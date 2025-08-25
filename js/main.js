import { aiChoose } from "./ai-choose.js";
import {
  AI,
  elHands,
  elModeChanger,
  elPlayAgain,
  elPlayer,
  elStatusText,
} from "./html-selection.js";
import { switchZone } from "./switch-zone.js";
import { checkWinner } from "./check-winner.js";
import { Changer, mode } from "./constants.js";
import { updateScore, resetScore } from "./scoreController.js";

elHands.forEach((el) => {
  el.addEventListener("click", (e) => {
    const player = e.target.alt;
    const playerSrc = e.target.src;
    elPlayer.src = playerSrc;
    switchZone(true);
    setTimeout(() => {
      const ai = aiChoose();
      const winnner = checkWinner(ai, player);
      AI.src = `images/${ai}.svg`;
      elStatusText.textContent = winnner;

      updateScore(winnner);
    }, 1000);
  });
});

elPlayAgain.addEventListener("click", () => {
  switchZone(false);
  AI.src = `images/oval.svg`;
});

elModeChanger.addEventListener("click", () => {
  if (mode === "easy") {
    elModeChanger.textContent = "Hard mode";
    Changer("hard");
  } else {
    Changer("easy");
    elModeChanger.textContent = "Easy mode";
  }
  resetScore();
});
