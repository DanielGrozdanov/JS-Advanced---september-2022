let { assert } = require('chai');
const { calculateSalary } = require('../companyAdministration');
const companyAdministration = require("../companyAdministration");

describe("companyAdministration test", function () {
    describe("hiringEmployee tests", function () {
        it("Position test invalid ", function () {
            let expect = `We are not looking for workers for this position.`
            assert.throw(() => companyAdministration.hiringEmployee("Pesho", "Other", 4), expect)
        });

        it("Experience test with => 3 years", function () {
            let expect = `Pesho was successfully hired for the position Programmer.`
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 3), expect)
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 4), expect)
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 20), expect)
        });

        it("Experience test with age < 3 years ", function () {
            let expect = `Pesho is not approved for this position.`
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 1), expect)
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 2), expect)
        });

    });

    describe("calculateSalary(hours) tests", function () {

        it("Hours not a number input invalid", function () {
            assert.throw(() => companyAdministration.calculateSalary("Pesho"), "Invalid hours")
        })
        it("Hours are a negative number input invalid", function () {
            assert.throw(() => companyAdministration.calculateSalary(-5), "Invalid hours")
        })

        it("calculateSalary with valid value", function () {
            assert.equal(companyAdministration.calculateSalary(0), 0);
            assert.equal(companyAdministration.calculateSalary(1), 15);
            assert.equal(companyAdministration.calculateSalary(5), 75)
            assert.equal(companyAdministration.calculateSalary(160), 160 * 15);
        })

        it("calculateSalary with bonus", function () {
            assert.equal(companyAdministration.calculateSalary(161), 161 * 15 + 1000)
            assert.equal(companyAdministration.calculateSalary(200), 200 * 15 + 1000)
        })
    })

    describe("firedEmployee (employees, index) tests", function () {
        it("Invalid first input", () => {
            assert.throw(() => companyAdministration.firedEmployee("Pesho", 2), "Invalid input")
            assert.throw(() => companyAdministration.firedEmployee({}, 1), "Invalid input")
            assert.throw(() => companyAdministration.firedEmployee(1, 0), "Invalid input")
            assert.throw(() => companyAdministration.firedEmployee([], 3), "Invalid input")
            assert.throw(() => companyAdministration.firedEmployee(-1, "str"), "Invalid input")
        })

        it("Invalid second input", () =>{
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1), "Invalid input")
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 4), "Invalid input")
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], "Pepi"), "Invalid input")
        })

        it("test fired employee", () => {
            assert.equal(companyAdministration.firedEmployee(["Petar"], 0),"") 
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), "Petar, George")  
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan"], 1), "Petar")  
        })
    })
});