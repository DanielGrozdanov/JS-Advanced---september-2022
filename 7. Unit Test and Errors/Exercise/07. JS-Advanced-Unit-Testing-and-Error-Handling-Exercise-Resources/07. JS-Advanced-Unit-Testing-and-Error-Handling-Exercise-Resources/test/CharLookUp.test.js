let { assert } = require("chai");
const { lookupChar } = require("../3.Char Lookup");

describe("lookupChar incorrect input", () => {

    it("Returns undefined if first input is not string", () => {
        assert.equal(lookupChar(5, 5), undefined);
    })

    it("Returns undefined if second input is not number", () => {
        assert.equal(lookupChar("5", "5"), undefined);
    })

    it("Returns undefined if second input is decimal", () => {
        assert.equal(lookupChar("5", 5.15), undefined);
    })
}) 

describe("lookUpChar with correct input but incorrect index value", () => {

    it("Result should be incorrect index with bigger index", () => {
        assert.equal(lookupChar("Todor", 6), "Incorrect index")
    })


    it("Result should be incorrect index with even index", () => {
        assert.equal(lookupChar("Todor", 5), "Incorrect index")
    })


    it("Result should be incorrect index with negative index", () => {
        assert.equal(lookupChar("Todor", -1), "Incorrect index")
    })
})

describe("lookUpChar with correct input and correct index value, check if the return is correct", () => {

    it("Result should be T with index 0", () => {
        assert.equal(lookupChar("Todor", 0), "T")
    })

    it("Result should be r with index last", () => {
        assert.equal(lookupChar("Todor", 4), "r")
    })
})