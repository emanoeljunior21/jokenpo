const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const humanChoiceIcon = document.querySelector("#human-choice");
const machineChoiceIcon = document.querySelector("#machine-choice");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const EMOJIS = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

const playHuman = (humanChoice) => {
  disableButtons(true);

  humanChoiceIcon.textContent = EMOJIS[humanChoice];
  humanChoiceIcon.classList.add("pulse");

  setTimeout(() => {
    const machineChoice = playMachine();
    playTheGame(humanChoice, machineChoice);

    setTimeout(() => disableButtons(false), 1000);
  }, 500);
};

const playMachine = () => {
  const choices = [
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS,
  ];
  const randomNumber = Math.floor(Math.random() * 3);
  const machineChoice = choices[randomNumber];

  machineChoiceIcon.textContent = EMOJIS[machineChoice];
  machineChoiceIcon.classList.add("pulse");

  return machineChoice;
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Máquina: " + machine);

  result.classList.remove("win", "lose", "draw");

  if (human === machine) {
    result.textContent = "Deu Empate!";
    result.classList.add("draw");
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    humanScoreNumber++;
    humanScore.textContent = humanScoreNumber;
    result.textContent = "Você Ganhou!";
    result.classList.add("win");
  } else {
    machineScoreNumber++;
    machineScore.textContent = machineScoreNumber;
    result.textContent = "Você Perdeu Para o Joken!";
    result.classList.add("lose");
  }

  setTimeout(() => {
    humanChoiceIcon.classList.remove("pulse");
    machineChoiceIcon.classList.remove("pulse");
  }, 500);
};

const disableButtons = (disabled) => {
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach((button) => {
    button.disabled = disabled;
    button.style.opacity = disabled ? 0.6 : 1;
  });
};

const resetGame = () => {
  humanScoreNumber = 0;
  machineScoreNumber = 0;
  humanScore.textContent = "0";
  machineScore.textContent = "0";
  result.textContent = "";
  humanChoiceIcon.textContent = "-";
  machineChoiceIcon.textContent = "-";
  result.classList.remove("win", "lose", "draw");
};
