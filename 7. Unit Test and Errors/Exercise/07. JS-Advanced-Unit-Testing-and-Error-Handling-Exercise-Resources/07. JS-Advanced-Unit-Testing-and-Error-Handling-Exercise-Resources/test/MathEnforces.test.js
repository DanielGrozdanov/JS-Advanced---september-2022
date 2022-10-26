let { assert } = require("chai");
const mathEnforcer = require("../4.Math Enforcer");
//const { addFive, subtractTen, sum } = require("../4.Math Enforcer"); - Not Working in Judge.


describe("MathEnforcer UT", () => {

    describe("addFive tests", () => {

        it("Return undefined if input is non - numeric", () => {
            //assert.equal(addFive("5"), undefined) - Not working in Judge.
            assert.equal(mathEnforcer.addFive("5"), undefined);
        })

        it("Return the sum of number 5", () => {
            assert.equal(mathEnforcer.addFive(5), 10)
        })

        it("Return the sum of negative number -5", () => {
            assert.equal(mathEnforcer.addFive(-5), 0)
        })

        it("Return the sum of number 5", () => {
            assert.equal(mathEnforcer.addFive(5), 10)
        })

        it("Return the sum of floating point number 5.5", () => {
            assert.equal(mathEnforcer.addFive(5.5), 10.5)
        })

    })

    describe("subtractTen tests", () => {

        it("Return undefined if input is non - numeric", () => {
            assert.equal(mathEnforcer.subtractTen("14"), undefined)
        })

        it("Return the sum of subtracted 14", () => {
            assert.equal(mathEnforcer.subtractTen(14), 4)
        })

        it("Return the sum of subtracted negative number -14", () => {
            assert.equal(mathEnforcer.subtractTen(-14), -24)
        })

        it("Return the sum of subtracted floating point number 14.4", () => {
            assert.equal(mathEnforcer.subtractTen(14.4), 4.4)
        })


    })

    describe("sum tests", () => {

        it("Return undefined if first number is non - numeric", () => {
            assert.equal(mathEnforcer.sum("14", 5), undefined)
        })

        it("Return undefined if second number is non - numeric", () => {
            assert.equal(mathEnforcer.sum(14, "5"), undefined)
        })

        it("Return the sum if inputs are correct", () => {
            assert.equal(mathEnforcer.sum(14, 5), 19)
        })

        it("Return the sum if of negative numbers", () => {
            assert.equal(mathEnforcer.sum(-14, -5), -19)
        })

        it("Return the sum if of floating point ", () => {
            assert.equal(mathEnforcer.sum(14.3, 5.2), 19.5)
        })
    })

}) 
