const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by sharlize", () => {
    describe("error handling", () => {
      it("should return false if the alphabet isn't 26 characters", () => {
        const message = "This is a test"
        const alphabet = "qwerty"
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
      it("should return false if there are duplicate characters in alphabet", () => {
          const message = "This is a test"
          const alphabet = "qqwertyuiopasdfghjklzxcvbn"
          const actual = substitution(message, alphabet);
          expect(actual).to.be.false;
      });
    });
    describe("encoding a message", () => {
        it("should correctly translate the given phrase", () => {
            const message = "correctly translate";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "egkktezsn zkqflsqzt";
            expect(actual).to.equal(expected);
        })
        it("should maintain spaces", () => {
            const message = "spacey space";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "lhqetn lhqet";
            expect(actual).to.equal(expected);
        });
    });
});
