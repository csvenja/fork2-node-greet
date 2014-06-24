var greet = require("greet");

// var expect = require("chai").expect
describe('greet', function() {
  it("should greet a person by name", function() {
    expect(greet("svenja")).to.equal("hello, svenja");
  })
  it("should greet a person flirtatiously if drunk", function() {
    expect(greet("svenja", true)).to.equal("hello svenja, you look sexy today");
  });
});
