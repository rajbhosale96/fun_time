const symbol1 = "🔴";
const symbol2 = "⚪️";
const amplitude = 17;
const wavelength = 5;
const phase = 30;

function delay(time) {
  for (let i = 0; i < time * 100000000; i += 4) {
  }
}

function repeat(string, times) {
  let repeatedString = ""
  for (let i = 0; i < times; i++) {
    repeatedString += string;
  }
  return repeatedString;
}

function getCoordinate(amplitude, phase, wavelength, index) {
  const theta = index / wavelength;

  return amplitude * Math.sin(theta) + phase;
}

function minimum(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

function createDna() {
  for (let i = 1; true; i++) {
    const x = getCoordinate(amplitude, phase, wavelength, i);
    const y = getCoordinate(amplitude, phase, wavelength, -i);

    const sym1 = x < y ? symbol1 : symbol2;
    const sym2 = sym1 === symbol1 ? symbol2 : symbol1;

    const minOfXY = minimum(x, y);
    const diffOfXY = Math.abs(x - y);

    console.log(repeat(" ", minOfXY) + sym1 + repeat("─", diffOfXY) + sym2);
    delay(2);
  }
}

createDna();