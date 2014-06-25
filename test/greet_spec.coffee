greet = require("../lib/index.js")
describe "greet", ->
  it "should greet a person by name", ->
    expect(greet("svenja")).to.equal "hello, svenja"
    return

  it "should greet a person flirtatiously if drunk", ->
    expect(greet("svenja", true)).to.equal "hello svenja, you look sexy today"
    return

  return
