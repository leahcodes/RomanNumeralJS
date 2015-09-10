describe("roman", function() {
  it("pushes M into the array if the number is 1000 or higher", function() {
    expect(roman(2000)).to.eql(["M", "M"]);
  });

  it("Pushes CM into array for number greater than  or eq 900, less than 1000", function() {
    expect(roman(900)).to.eql(["CM"]);
  });

  it("Pushes D into array for number greater than  or eq 500", function() {
    expect(roman(500)).to.eql(["D"]);
  });

  it("Pushes C into array for number greater than  or eq 100", function() {
    expect(roman(100)).to.eql(["C"]);
  });

  it("Pushes X into array for number greater than  or eq 90", function() {
    expect(roman(90)).to.eql(["X"]);
  });

  it("Pushes L into array for number greater than  or eq 50", function() {
    expect(roman(50)).to.eql(["L"]);
  });
});
