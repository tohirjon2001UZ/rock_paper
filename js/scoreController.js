let currentScore = 0;
const scoreEl = document.getElementById("score");

export function updateScore(winner) {
  if (winner === "player") {
    currentScore++;
    scoreEl.textContent = currentScore;
  } else if (winner === "ai") {
    if (currentScore > 0) {
      currentScore--;
      scoreEl.textContent = currentScore;
    }
  }
}

export function resetScore() {
  currentScore = 0;
  scoreEl.textContent = currentScore;
}
