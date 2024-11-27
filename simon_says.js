const welcome = '!!!Welcome to SIMON SAYS game 😃!!!';
const intro1 = 'Test your memory!!! \nWatch the pattern,';
const intro2 = ' repeat it, and keep up as the sequence grows.';
const ques = '\nHow far can you go?\n';
const instruct = 'So these are colors and its code\n';
const allColor = 'color      : 🟦 🟧 🟥 🟨 🟩 🟪 ⬜️\n';
const allColorCode = 'color code : b  o  r  y  g  p  w\n';

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

function welcomeMsg() {
  console.log(createMessageBox(welcome));
}

function instruction() {
  console.log(intro1 + intro2 + ques);
  console.log(instruct + allColor + allColorCode);
}

function generateRandomColor() {
  return Math.floor(Math.random() * 7);
}

function printColor(code) {
  const color = ["🟧", "🟥", "🟦", "🟨", "🟩", "🟪", "⬜️"];

  return color[code];
}

function getColorCode(code) {
  const colorCode = ["o", "r", "b", "y", "g", "p", "w"];

  return colorCode[code];
}

function userTurn(params) {
  return prompt("👉Now, it's your turn! Remember & Repeat the sequence !!");
}

function isEqual(computerColorCode, userChoice) {
  return computerColorCode === userChoice;
}

function getScore(computerColorCode, userChoice) {
  const colorCode = generateRandomColor();

  console.clear();
  instruction();

  console.log("Simon Says : " + printColor(colorCode));

  computerColorCode += getColorCode(colorCode);
  userChoice = userTurn();

  if (!isEqual(computerColorCode, userChoice)) {
    console.log("ohh No😮 ! The correct string was : " + computerColorCode);
    return 0;
  }

  return 1 + getScore(computerColorCode, userChoice);
}

function getMSG(score) {
  if (score > 15) {
    return "Hats off🫡 🙌";
  }
  if (score > 10 && score <= 15) {
    return "Your memory is really sharp👏🙌";
  }
  if (score <= 10 && score > 4) {
    return "Well Played🤩";
  }

  return score === 0 ? "Bad Luck 😕!!! Better Luck Next Time" : "You can still do better🙂🙃";
}

function startGame() {
  welcomeMsg();
  prompt("Let's start!!! press enter...");

  const name = prompt("Enter Your Name : ");
  const score = getScore('', '');
  console.log('\n' + name + " your score is " + (score));
  console.log(getMSG(score) + '\n');
}

startGame();
