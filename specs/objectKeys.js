import { expect } from "chai"

import objectKeys from "../src/objectKeys"

describe("objectKeys", () => {

  it('should keep an empty object the same', () => {
    const test = {}
    const expected = {}

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

})
