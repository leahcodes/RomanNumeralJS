var roman = function(number) {
  var numerals = [];
  if (number === 0) {
    alert("Enter higher number");
  }
  while (number >= 1000) {
    numerals.push("M");
    number -= 1000;
  }

  while (number >= 900) {
    numerals.push("CM");
    number -= 900;
  }

  while (number >= 500) {
    numerals.push("D");
    number -= 500;
  }

  while (number >= 100) {
    numerals.push("C");
    number -= 100;
  }

  while (number >= 90) {
    numerals.push("XC");
    number -= 90;
  }

  while (number >= 50) {
    numerals.push("L");
    number -= 50;
  }

  while (number >= 40) {
    numerals.push("XL");
    number -= 40;
  }

  while (number >= 10) {
    numerals.push("X");
    number -= 10;
  }

  while (number === 9) {
    numerals.push("IX");
    number -= 9;
  }

  while (number >= 5) {
    numerals.push("V");
    number -= 5;
  }

  while (number === 4) {
    numerals.push("IV");
    number -= 4;
  }

  while (number >= 1) {
    numerals.push("I");
    number -= 1;
  }
  var numerals = numerals.join("");
  return numerals;
};
