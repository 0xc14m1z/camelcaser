import { expect } from "chai"

import { string } from "../src/string"

describe("string", () => {

  it("should convert a string to camelCase", () => {

    expect(string("Programming Puzzles & Code Golf"))
      .to.equal("programmingPuzzlesCodeGolf")
  
    expect(string("XML HTTP request"))
      .to.equal("xmlHttpRequest")
  
    expect(string("supports IPv6 on iOS?"))
      .to.equal("supportsIpv6OnIos")
  
    expect(string("SomeThing w1th, apo'strophe's and' punc]tuation"))
      .to.equal("someThingW1thApostrophesAndPuncTuation")
  
    expect(string("nothing special"))
      .to.equal("nothingSpecial")
  
    expect(string("5pecial ca5e"))
      .to.equal("5pecialCa5e")
  
    expect(string("1337"))
      .to.equal("1337")
  
    expect(string("1337-spEAk"))
      .to.equal("1337Speak")
  
    expect(string("whatA mess"))
      .to.equal("whataMess")
  
    expect(string("abcD"))
      .to.equal("abcd")
  
    expect(string("a"))
      .to.equal("a")
  
    expect(string("B"))
      .to.equal("b")

  })

})