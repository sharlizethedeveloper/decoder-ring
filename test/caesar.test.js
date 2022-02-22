const { expect } = require("chai");
const { caesar } = require("../src/caesar");
describe('caesar() tests by sharlize', () =>{
describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "hello sharlize";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift amount greater than 25", () => {
        const message = "amount greater than twenty five";
        const shift = 40;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less than -25", () => {
        const message = "less than twenty five";
        const shift = -40;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
});
describe("encoding a message", () => {
    it("should return capital letters as lowercase letters", () => {
        const message = "This is only a test.";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "ymnx nx tsqd f yjxy.";

        expect(actual).to.equal(expected);
    });
    it("should leave spaces and other symbols as is", () => {
        const message = "$# %^.";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "$# %^.";
        
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the alphabet", () => {
        const message = "zebra magazine";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "ejgwf rflfensj";

        expect(actual).to.equal(expected);
    });
});

})
