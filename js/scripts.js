var roman = function(number) {
  var numerals = [];
  while (number >= 1000) {
    numerals.push("M");
    number -= 1000;
  };
  return numerals;
};
