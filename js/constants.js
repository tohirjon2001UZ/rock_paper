import {
  elHandsHard,
  elZoneGrid,
  elEasyLogo,
  elHardLogo,
  elEasyRule,
  elHardRules,
} from "./html-selection.js";

export const { rock, scissors, paper, spock, lizard } = {
  rock: "rock",
  scissors: "scissors",
  paper: "paper",
  spock: "spock",
  lizard: "lizard",
};
export const hands = [rock, scissors, paper, spock, lizard];

export let mode = "easy";
export function Changer(value) {
  mode = value;
  elHandsHard.forEach((el) => {
    if (value === "hard") {
      el.classList.remove("hidden");
      elZoneGrid.classList.remove(
        "grid-cols-2",
        "grid-rows-2",
        "gap-x-20",
        "gap-y-6",
        "max-w-[400px]",
        "bg-[url(../images/triangle.svg)]"
      );
      elZoneGrid.classList.add(
        "grid-cols-2",
        "grid-rows-3",
        "gap-x-14",
        "gap-y-5",
        "max-w-[540px]",
      );
      elHardLogo.classList.remove("hidden");
      elEasyLogo.classList.add("hidden");
      elHardRules.classList.remove("hidden");
      elEasyRule.classList.add("hidden");
    } else {
      elZoneGrid.classList.remove(
        "grid-cols-2",
        "grid-rows-3",
        "gap-x-14",
        "gap-y-5",
        "max-w-[540px]",
        "bg-[url('../images/poliygon.svg')]"
      );
       elZoneGrid.classList.add(
        "grid-cols-2",
        "grid-rows-2",
        "gap-x-20",
        "gap-y-6",
        "max-w-[400px]",
        "bg-[url(../images/triangle.svg)]"
      );
      el.classList.add("hidden");
      elHardLogo.classList.add("hidden");
      elEasyLogo.classList.remove("hidden");
      elHardRules.classList.add("hidden");
      elEasyRule.classList.remove("hidden");
    }
  });
}
