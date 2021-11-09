const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybiusModule", () => {
    describe("encoding a message", () => {
        it("should encode a message by translating each letter to their number pairs", () => {
            const message = "encode";
            const actual = polybius(message);
            const expected = "513331434151";

            expect(actual).to.equal(expected);
        });
        it("should translate 'i' and 'j' to 42", () => {
            const message = "juggling";
            const actual = polybius(message);
            const expected = "4254222213423322";

            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "Ignore";
            const actual = polybius(message);
            const expected = "422233432451";

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces", () => {
            const message = "Let there be space";
            const actual = polybius(message);
            const expected = "135144 4432512451 2151 3453113151";

            expect(actual).to.equal(expected);
        });
    });
    describe("decode a message", () => {
        it("should decode a message by translating each number to their letter pair", () => {
            const message = "415131434151";
            const encode = false;
            const actual = polybius(message, encode);
            const expected = "decode";

            expect(actual).to.equal(expected);
        });
        it("should translate 42 to 'i' and 'j'", () => {
            const message = "424244445124";
            const encode = false;
            const actual = polybius(message, encode);

            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
        it("should maintain spaces", () => {
            const message = "1351111551 345311315134";
            const encode = false;
            const actual = polybius(message, encode);
            const expected = "leave spaces";

            expect(actual).to.equal(expected);
        });
        it("should return false if the length of all numbers is odd", () => {
            const message = "2345 235134341122514";
            const encode = false;
            const actual = polybius(message, encode);

            expect(actual).to.be.false;
        })
    })
})
