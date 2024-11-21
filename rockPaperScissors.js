// 0 = rock , 1 = paper, scissors = 2;
const welcomeMsg = "Welcome to Rock Paper Scissors Game";
const start = "Let's start !!! press enter...";
const descript1 = "Rock, paper and scissors are represented as number...\n";
const descript2 = "🪨Rock = 0 :: 📜Paper = 1 :: ✂️ Scissor = 2\n";

function getALine(length) {
  let line = '';
  for (let iterator = 0; iterator < length; iterator += 1) {
    line += '━';
  }

  return line;
}

function createMessageBox(message) {
  const box = '┏' + getALine(message.length) + '┓\n┃' + message + '┃\n┗';
  return box + getALine(message.length) + '┛\n';
}

function welcome() {
  console.log(createMessageBox(welcomeMsg));
}

function description() {
  console.log(descript1 + descript2);
}

function createNumber() {
  return Math.round(Math.random() * 2);
}

function getUserInput() {
  return prompt("Enter your input : ");
}

function isWon(computerOutput, userInput) {
  const winChance1 = userInput === 0 && computerOutput === 2;
  const winChance2 = userInput === 1 && computerOutput === 0;
  const winChance3 = userInput === 2 && computerOutput === 1;

  console.log("Computer : " + computerOutput);
  return winChance1 || winChance2 || winChance3;
}

function startPlay() {
  console.clear();
  description();
  const computerOutput = createNumber();
  const userInput = +getUserInput();

  if (isWon(computerOutput, userInput)) {
    return "You Won !!!"
  }
  if (computerOutput === userInput) {
    console.log("It's a Tie!!!");
  }
  const playAgain = confirm("You Lost... Want To Try again ?");
  return playAgain ? startPlay() : "Okk GoodBye";
}

function play() {
  welcome();
  prompt(start);
  const name = prompt("Enter Your Name : ");
  console.log(name + "  " + startPlay());
}

play();