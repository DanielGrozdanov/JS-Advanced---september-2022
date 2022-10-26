let { assert } = require("chai");
let { isOddOrEven } = require("../2.Even or Odd")

describe("isOddOrEven func", () => {
    describe("isOddOrEven incorrect value", () => {

        it("Result should be undefined with array args", () => {
            assert.equal(isOddOrEven([]), undefined);
        })


        it("Result should be undefined with empty object args", () => {
            assert.equal(isOddOrEven({}), undefined);
        })

        it("Result should be undefined with object args", () => {
            assert.equal(isOddOrEven({ name: "Pepkata" }), undefined);
        })

        it("Result should be undefined with number argument", () => {
            assert.equal(isOddOrEven(1), undefined);
        })

        it("Result should be undefined with boolean argument", () => {
            assert.equal(isOddOrEven(true), undefined);
        })

    })

    describe("isOddOrEven correct value", () => {

        it("Result should be `Even`", () => {
            assert.equal(isOddOrEven("even"), "even")
        })

        it("Result should be even with `Something`", () => {
            assert.equal(isOddOrEven('Something'), "odd")
        })
    })
})