const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitutionModule", () => {
  describe("error handling", () => {
    it("should return false if the given isn't exactly 26 characters long", () => {
      const message = "message";
      const alphabet = "short";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
    it("should return false if there are any duplicate characters in the given alphabet", () => {
      const message = "message";
      const alphabet = "qwertyuiopasdfghjklzxcvbnn";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
    it("should return false if alphabet isn't given", () => {
      const message = "message";
      const actual = substitution(message);

      expect(actual).to.be.false;
    });
  });
  describe("encode a message", () => {
    it("should encode a message using the given alphabet", () => {
      const message = "hello";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "itssg";

      expect(actual).to.equal(expected);
    });
    it("should ignore capitals", () => {
      const message = "World";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "vgksr";

      expect(actual).to.equal(expected);
    });
    it("should work with the given alphabet that has special characters", () => {
      const message = "special";
      const alphabet = "qwertyuiop@$dfghjk!zxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "!hteoq$";

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces", () => {
      const message = "hello world";
      const alphabet = "zxcvbnmasdfghjklqwertyuiop";
      const actual = substitution(message, alphabet);
      const expected = "abggk ukwgv";

      expect(actual).to.equal(expected);
    });
  });
  describe("decode a message", () => {
    it("should decode a message using the given alphabet", () => {
      const message = "itssg";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const encode = false;
      const actual = substitution(message, alphabet, encode);
      const expected = "hello";

      expect(actual).to.equal(expected);
    });
    it("should work with the given alphabet that has special characters", () => {
      const message = "!hteoq$";
      const alphabet = "qwertyuiop@$dfghjk!zxcvbnm";
      const encode = false;
      const actual = substitution(message, alphabet, encode);
      const expected = "special";

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces", () => {
      const message = "abggk ukwgv";
      const alphabet = "zxcvbnmasdfghjklqwertyuiop";
      const encode = false;
      const actual = substitution(message, alphabet, encode);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });
  });
});
