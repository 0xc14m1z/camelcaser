import { expect } from "chai"

import string from "../src/string"

describe("string", () => {

  const tests = {
    "Programming Puzzles & Code Golf": "programmingPuzzlesCodeGolf",
    "XML HTTP request": "xmlHttpRequest",
    "supports IPv6 on iOS?": "supportsIpv6OnIos",
    "SomeThing w1th, apo'strophe's and' punc]tuation": "someThingW1thApostrophesAndPunctuation",
    "nothing special": "nothingSpecial",
    "5pecial ca5e": "5pecialCa5e",
    "1337": "1337",
    "1337-spEAk": "1337Speak",
    "whatA mess": "whataMess",
    "abcD": "abcd",
    "a": "a",
    "B": "b",
    "snake_case": "snakeCase",
    "long_snake_case": "longSnakeCase",
    "dash-case": "dashCase",
    "long-dash-case": "longDashCase",
    "SomeThing w1th": "someThingW1th"
  }

  Object.keys(tests).forEach(test => {

    const expected = tests[test]

    it(`should convert '${test}' to '${expected}'`, () => {
      expect(string(test)).to.equal(expected)
    })

  })

})

describe("private helper methods", () => {

  describe("removeSymbols", () => {
    
    const testedMethod = string.__get__("removeSymbols")

    describe("should strip symbols that aren't alphanumerical nor digits or spaces", () => {

      const tests = {
        "Programming Puzzles & Code Golf": "Programming Puzzles  Code Golf",
        "XML HTTP request": "XML HTTP request",
        "supports IPv6 on iOS?": "supports IPv6 on iOS",
        "SomeThing w1th, apo'strophe's and' punc]tuation": "SomeThing w1th apostrophes and punctuation",
        "nothing special": "nothing special",
        "5pecial ca5e": "5pecial ca5e",
        "1337": "1337",
        "1337-spEAk": "1337-spEAk",
        "whatA mess": "whatA mess",
        "abcD": "abcD",
        "a": "a",
        "B": "B",
        "snake_case": "snake_case",
        "long_snake_case": "long_snake_case",
        "dash-case": "dash-case",
        "long-dash-case": "long-dash-case",
        "SomeThing w1th": "SomeThing w1th"
      }

      Object.keys(tests).forEach(test => {

        const expected = tests[test]
    
        it(`should convert '${test}' to '${expected}'`, () => {
          expect(testedMethod(test)).to.equal(expected)
        })
    
      })
    })

  })

  describe("splitByNonAlphanumeric", () => {
    
    const testedMethod = string.__get__("splitByNonAlphanumeric")

    describe("should split a string by non alphanumerical characters", () => {

      const tests = {
        "Programming Puzzles  Code Golf": ["Programming", "Puzzles", "", "Code", "Golf"],
        "XML HTTP request": ["XML", "HTTP" , "request"],
        "supports IPv6 on iOS": ["supports", "IPv6", "on", "iOS"],
        "SomeThing w1th apostrophes and punctuation": ["SomeThing", "w1th", "apostrophes", "and", "punctuation"],
        "nothing special": ["nothing", "special"],
        "5pecial ca5e": ["5pecial", "ca5e"],
        "1337": ["1337"],
        "1337-spEAk": ["1337", "spEAk"],
        "whatA mess": ["whatA", "mess"],
        "abcD": ["abcD"],
        "a": ["a"],
        "B": ["B"],
        "snake_case": ["snake", "case"],
        "long_snake_case": ["long", "snake", "case"],
        "dash-case": ["dash", "case"],
        "long-dash-case": ["long", "dash", "case"],
        "SomeThing w1th": ["SomeThing", "w1th"]
      }

      Object.keys(tests).forEach(test => {

        const expected = tests[test]
    
        it(`should convert '${test}' to '${JSON.stringify(expected)}'`, () => {
          expect(testedMethod(test)).to.be.deep.equal(expected)
        })
    
      })
    })

  })

  describe("splitBeforeCapitalLetter", () => {
    
    const testedMethod = string.__get__("splitBeforeCapitalLetter")

    describe("should split a string before a capital letter, when it is surrounded by lowercase letters", () => {

      const tests = {
        "Programming Puzzles  Code Golf": ["Programming", "Puzzles", "", "Code", "Golf"],
        "XML HTTP request": ["XML", "HTTP", "request"],
        "supports IPv6 on iOS": ["supports", "IPv6", "on", "iOS"],
        "SomeThing w1th apostrophes and punctuation": ["Some", "Thing", "w1th", "apostrophes", "and", "punctuation"],
        "nothing special": ["nothing", "special"],
        "5pecial ca5e": ["5pecial", "ca5e"],
        "1337": ["1337"],
        "1337-spEAk": ["1337-spEAk"],
        "whatA mess": ["whatA", "mess"],
        "abcD": ["abcD"],
        "a": ["a"],
        "B": ["B"],
        "snake_case": ["snake_case"],
        "long_snake_case": ["long_snake_case"],
        "dash-case": ["dash-case"],
        "long-dash-case": ["long-dash-case"],
        "SomeThing w1th": ["Some", "Thing", "w1th"]
      }

      Object.keys(tests).forEach(test => {

        const expected = tests[test]
    
        it(`should convert '${test}' to '${JSON.stringify(expected)}'`, () => {
          expect(testedMethod(test)).to.be.deep.equal(expected)
        })
    
      })
    })

  })


})