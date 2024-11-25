function getBorder(string) {
  return "┃" + string + "┃";
}

const EMPTY = getBorder("        ");
const ONE_DOT = getBorder("   ⚪️   ");
const TWO_DOT = getBorder(" ⚪️  ⚪️ ");
const LEFT_DOT = getBorder(" ⚪️     ");
const RIGHT_DOT = getBorder("     ⚪️ ");
const LENGTH = 8;

function createTop() {
  let string = "┏";

  for (let index = 0; index < LENGTH; index++) {
    string += "━";
  }

  return string += "┓";
}

function createBottom() {
  let string = "┗";

  for (let index = 0; index < LENGTH; index++) {
    string += "━";
  }

  return string += "┛";
}

function getLines(line1, line2, line3) {
  return line1 + "\n" + line2 + "\n" + line3;
}

function diceFace(faceValue) {
  switch (faceValue) {
    case 1: return getLines(EMPTY, ONE_DOT, EMPTY);
    case 2: return getLines(LEFT_DOT, EMPTY, RIGHT_DOT);
    case 3: return getLines(LEFT_DOT, ONE_DOT, RIGHT_DOT);
    case 4: return getLines(TWO_DOT, EMPTY, TWO_DOT);
    case 5: return getLines(TWO_DOT, ONE_DOT, TWO_DOT);
    case 6: return getLines(TWO_DOT, TWO_DOT, TWO_DOT);
  }
}

function createDice(faceValue) {
  const topBorder = createTop(LENGTH);
  const middle = diceFace(faceValue);
  const bottomBorder = createBottom(LENGTH);

  return getLines(topBorder, middle, bottomBorder);
}

function getNumber() {
  return Math.ceil(Math.random() * 6);
}

function delay(time) {
  for (let i = 0; i < time; i += 4) {
  }
}

function animate() {
  let faceValue = 0;

  for (let i = 1; i < 20; i++) {
    console.clear();
    faceValue = getNumber();
    console.log(createDice(faceValue));
    delay(1000000000);
  }
  return faceValue;
}

console.log(animate());
