import { expect } from "chai"

import objectKeys from "../src/objectKeys"

describe("objectKeys", () => {

  it('should keep an empty object the same', () => {
    const test = {}
    const expected = {}

    expect(objectKeys(test)).to.be.deep.equal(expected)
  })

  it('should keep a literal value the same', () => {
    const test = 42
    const expected = 42

    expect(objectKeys(test)).to.be.deep.equal(expected)
  })

  it('should keep an empty array the same', () => {
    const test = []
    const expected = []

    expect(objectKeys(test)).to.be.deep.equal(expected)
  })

  it('should camelCase keys in a flat object', () => {
    const test = {
      first_key: 12,
      SecondKey: 23,
      "third-key": 34
    }

    const expected = {
      firstKey: 12,
      secondKey: 23,
      thirdKey: 34
    }

    expect(objectKeys(test)).to.be.deep.equal(expected)
  })

  it('should camelCase keys in an object with nested objects', () => {
    const test = {
      first_key: 12,
      SecondKey: 23,
      "third-key": 34,
      "_fourth_key": {
        first_nestedKey: 45,
        SecondNestedKey: 56,
        "third_nested-key": {
          first_nested_nested_key: 67
        }
      }
    }

    const expected = {
      firstKey: 12,
      secondKey: 23,
      thirdKey: 34,
      fourthKey: {
        firstNestedKey: 45,
        secondNestedKey: 56,
        thirdNestedKey: {
          firstNestedNestedKey: 67
        }
      }
    }

    expect(objectKeys(test)).to.be.deep.equal(expected)
  })

  it('should camelCase keys in an object inside an array', () => {
    const test = {
      first_key: 12,
      SecondKey: 23,
      "third-key": 34,
      "_fourth_key": {
        first_nestedKey: 45,
        SecondNestedKey: 56,
        "third_nested-key": {
          first_nested_nested_key: 67,
          second_nested_nested_key: [
            { first_nested_nestedNestedKey: 78 },
            { second_nested_nestedNestedKey: 87 }
          ]
        }
      }
    }

    const expected = {
      firstKey: 12,
      secondKey: 23,
      thirdKey: 34,
      fourthKey: {
        firstNestedKey: 45,
        secondNestedKey: 56,
        thirdNestedKey: {
          firstNestedNestedKey: 67,
          secondNestedNestedKey: [
            { firstNestedNestedNestedKey: 78 },
            { secondNestedNestedNestedKey: 87 }
          ]
        }
      }
    }

    expect(objectKeys(test)).to.be.deep.equal(expected)
  })

  it('should camelCase the keys of objects contained into an array', () => {
    const test = [ { nested_key: 42 } ]
    const expected = [ { nestedKey: 42 } ]

    expect(objectKeys(test)).to.be.deep.equal(expected)
  })

})

describe("private helper methods", () => {

  describe("objecyKey", () => {

    const objectKey = objectKeys.__get__("objectKey")

    it('should camelCase and add the given key to an object', () => {
      const initialTestObject = { first_key: 42 }
      const temporaryTestObject = { "second-key": 43, "third-key": 44 }
      const testKey = "first_key"

      const result = objectKey(initialTestObject)(temporaryTestObject, testKey)
      const expected = { firstKey: 42, "second-key": 43, "third-key": 44 }

      expect(result).to.be.deep.equal(expected)
    })

  })

  describe("isObject", () => {

    const isObject = objectKeys.__get__("isObject")

    it('should return true for POJOs', () => {
      const test = isObject({})
      expect(test).to.be.true
    })

    it('should return true for new empty objects', () => {
      const test = isObject(new Object())
      expect(test).to.be.false
    })

    it('should return false for arrays', () => {
      const test = isObject(new Array())
      expect(test).to.be.false
    })

    it('should return false for functions', () => {
      const test = isObject(() => {})
      expect(test).to.be.false
    })

    it('should return false for literal integers', () => {
      const test = isObject(42)
      expect(test).to.be.false
    })

    it('should return false for Number objects', () => {
      const test = isObject(new Number(42))
      expect(test).to.be.false
    })

    it('should return false for literal strings', () => {
      const test = isObject('42')
      expect(test).to.be.false
    })

    it('should return false for null', () => {
      const test = isObject(null)
      expect(test).to.be.false
    })

    it('should return false for undefined', () => {
      const test = isObject(undefined)
      expect(test).to.be.false
    })

  })

})
