import { expect } from "chai"

import { string } from "../src/string"

describe("string", () => {

  const matches = {
    "Programming Puzzles & Code Golf": "programmingPuzzlesCodeGolf",
    "XML HTTP request": "xmlHttpRequest",
    "supports IPv6 on iOS?": "supportsIpv6OnIos",
    "SomeThing w1th, apo'strophe's and' punc]tuation": "someThingW1thApostrophesAndPuncTuation",
    "nothing special": "nothingSpecial",
    "5pecial ca5e": "5pecialCa5e",
    "1337": "1337",
    "1337-spEAk": "1337Speak",
    "whatA mess": "whataMess",
    "abcD": "abcd",
    "a": "a",
    "B": "b"
  }

  Object.keys(matches).forEach(test => {

    const expected = matches[test]

    it(`should convert '${test}' to '${expected}'`, () => {
      expect(string(test)).to.equal(expected)
    })

  })

})