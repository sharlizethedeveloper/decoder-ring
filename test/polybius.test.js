const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe('polyibius() tests by sharlize', () => {
describe("encoding a message", () => {

it('should encode a message by translating each letter to number pairs', () => {
    const message = 'hello everyone'
    const encode = true
    const expected = '3251131343 5115512445433351'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  it('should translate both i and j to 42', () => {
    const message = 'hi thinkful'
    const encode = true
    const expected = '3242 4432423352125413'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  it('should maintain spaces', () => {
    const message = 'spacey space'
    const encode = true
    const expected = '345311315145 3453113151'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  }) 

describe("decoding a message", () => {
  it('should decode a message by translating each pair of numbers into a letter', () => {
    const message = '3251131343 5115512445433351'
    const encode = false
    const expected = 'hello everyone'
    const actual = polybius(message, encode)
})
  
  it('should translate both i and j to 42', () => {
    const message = '3242 4432423352125413'
    const encode = false
    const expected = 'hij thijnkful'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  it('should leave spaces as is', () => {
    const message = '345311315145 3453113151'
    const encode = false
    const expected = 'spacey space'
    const actual = polybius(message, encode)
    expect(actual).to.equal(expected);
  })
  it('should return false if the length of all numbers is odd', () => {
    const message = '4432434 4234 11 44513444'
    const encode = false
    const expected = false
    const actual = polybius(message, encode)
    expect(actual).to.be.false
  })
})
  
})
