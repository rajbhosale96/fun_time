// 0 = rock , 1 = paper, scissors = 2;
const welcomeMsg = "Welcome to Rock Paper Scissors Game";
const start = "Let's start !!! press enter...";
const descriptionMsg1 = "Rock, paper and scissors are represented as number...";
const descriptionMsg2 = "\n🪨Rock = 1 :: 📜Paper = 2 :: ✂️ Scissor = 3\n";

function getRandomNumber() {
  return Math.ceil(Math.random() * 3);
}

function getEmoji(value) {
  switch (value) {
    case 1: return "🪨";
    case 2: return "📜";
    case 3: return "✂️";
  }
}

function delay(time) {
  for (let i = 0; i < time; i += 4) {
  }
}

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
  console.log(descriptionMsg1 + descriptionMsg2);
}

function createNumber() {
  return Math.ceil(Math.random() * 3);
}

function getUserInput() {
  const number = +prompt("Enter your input : ");

  if (number > 0 && number <= 3) {
    return number;
  }

  console.log("Invalid Input!!!! \n");

  return getUserInput();
}

function isUserWon(computerOutput, userInput) {
  const winChance1 = userInput === 1 && computerOutput === 3;
  const winChance2 = userInput === 2 && computerOutput === 1;
  const winChance3 = userInput === 3 && computerOutput === 2;

  return winChance1 || winChance2 || winChance3;
}

function whoWon(computerOutput, userInput, userName) {
  if (isUserWon(computerOutput, userInput)) {
    return userName + " Won🏆\n";
  }
  if (computerOutput === userInput) {
    return "It's a tie😬\n";
  }

  return "Computer Won😯\n";
}

function animate() {
  let value = 0;

  for (let i = 1; i < 20; i++) {
    console.clear();
    value = getRandomNumber();
    console.log("Computer's Choice ➤ " + getEmoji(value));
    delay(1000000000);
  }

  return value;
}

function startPlay(userName) {
  console.clear();
  description();

  const userInput = getUserInput();
  const computerOutput = animate();

  console.log("Your's Choice ➤ " + getEmoji(userInput) + "\n");


  console.log(whoWon(computerOutput, userInput, userName));

  const playAgain = confirm("Want To Try again 😊?");

  return playAgain ? startPlay(userName) : userName + " Thanks for Playing😇";
}

function play() {
  welcome();
  prompt(start);
  description();

  const name = prompt("Enter Your Name : ");

  return startPlay(name);
}

console.log(play());
