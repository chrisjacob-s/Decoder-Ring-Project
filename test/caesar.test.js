const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesarModule", () => {
  describe("error handling", () => {
    it("should return false if the shift value is equal to 0", () => {
      const message = "popcorn nut";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift value is less than -25", () => {
      const message = "popcorn nut";
      const shift = -30;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift value is greater than 25", () => {
      const message = "popcorn nut";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if there is no shift value given", () => {
      const message = "popcorn nut";
      const actual = caesar(message);

      expect(actual).to.be.false;
    });
  });
  describe("encoding message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "Encode";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "hqfrgh";

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other non-alphabetic symbols", () => {
      const message = "I love pizza!";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "n qtaj uneef!";

      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "Hello World";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "khoor zruog";

      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
      const message = "Zebra Yak X-ray";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "cheud bdn a-udb";

      expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left,", () => {
      const message = "Welcome back";
      const shift = -2;
      const actual = caesar(message, shift);
      const expected = "ucjamkc zyai";

      expect(actual).to.equal(expected);
    });
  });
  describe("decode a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "popcorn nut";
      const shift = 3;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "mlmzlok krq";

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other non-alphabetic symbols", () => {
      const message = "I love pizza!";
      const shift = 5;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "d gjqz kduuv!";

      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "Hello World";
      const shift = 3;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "ebiil tloia";

      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
      const message = "Zebra Yak X-ray";
      const shift = 3;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "wbyox vxh u-oxv";

      expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left,", () => {
      const message = "Welcome back";
      const shift = -2;
      const encode = false;
      const actual = caesar(message, shift, encode);
      const expected = "ygneqog dcem";

      expect(actual).to.equal(expected);
    });
  });
});
