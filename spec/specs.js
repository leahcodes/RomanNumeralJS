describe("roman", function() {
  it("pushes M into the array if the number is 1000 or higher", function() {
    expect(roman(2000)).to.eql(["M", "M"]);
  });
});
