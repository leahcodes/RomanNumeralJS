var roman = function(number) {
  var numerals = [];
  while (number >= 1000) {
    numerals.push("M");
    number -= 1000;
  };

  while (number >= 900) {
    numerals.push("CM");
    number -= 900;
  };

  while (number >= 500) {
    numerals.push("D");
    number -= 500;
  };

  while (number >= 100) {
    numerals.push("C");
    number -= 100;
  };

  while (number >= 90) {
    numerals.push("X");
    number -= 90;
  };

  while (number >= 50) {
    numerals.push("L");
    number -= 50;
  };
  return numerals;
};
