let { assert } = require("chai");
const PaymentPackage = require("../12.Payment Package")

describe("PaymentPackage", () => {

    describe("create instance", () => {
        let paymentPackage;
        beforeEach(function () {
            paymentPackage = new PaymentPackage("Correct", 10);
        });


        it("Assert name should be correct", () => {
            assert.equal(paymentPackage._name, "Correct", "name is correct");
        })

        it("Assert value should be correct", () => {
            assert.equal(paymentPackage._value, 10, "value is correct");
        })

        it("Assert that VAT is default", () => {
            assert.equal(paymentPackage._VAT, 20, "VAT is default");
        })

        it("Assert that VAT is correct type", () => {
            assert.equal(typeof (paymentPackage._VAT), "number", "vat is correct type");
        })

        it("Assert that active is default", () => {
            assert.equal(paymentPackage._active, true, "active is correct default");
        })
        it("Assert that active is correct type", () => {
            assert.equal(typeof (paymentPackage._active), "boolean", "correct active type");
        })
    })


    describe("getters test ", () => {
        let paymentPackage;
        beforeEach(function () {
            paymentPackage = new PaymentPackage("Correct", 10);
        });

        it("Assert instance return correct name", () => {
            assert.equal(paymentPackage.name, "Correct");
        })

        it("Assert instance return correct value", () => {
            assert.equal(paymentPackage.value, 10);
        })

        it("Assert instance return correct VAT", () => {
            assert.equal(paymentPackage.VAT, 20);
        })

        it("Assert instance return correct active", () => {
            assert.equal(paymentPackage.active, true);
        })

    })

    describe("setters test", () => {
        it("set incorrect name", () => {
            assert.throws(() => {new PaymentPackage(10, 10)}, 'Name must be a non-empty string')
        })

        it("set empty name", () => {
            assert.throws(() => {new PaymentPackage("", 10)}, 'Name must be a non-empty string')
        })

        it("set correct name", () => {
            let package = new PaymentPackage("Correct", 10);
            assert.equal(package.name, "Correct");
            package.name = "Gosho";
            assert.equal(package.name, "Gosho");
        })

        it("set incorrect value", () => {
            assert.throws(() =>{new PaymentPackage("10", "10")}, 'Value must be a non-negative number')
        })

        it("set negative value", () => {
            assert.throws(() => {new PaymentPackage("10",-50)}, 'Value must be a non-negative number')
        })

        it("set correct value", () => {
            let package = new PaymentPackage("Correct", 10);
            assert.equal(package.value, 10)
            package.value = 20;
            assert.equal(package.value, 20)
            package.value = 0;
            assert.equal(package.value,0);
        })

        it("set incorrect VAT type", () => {
            let package = new PaymentPackage("Correct", 10);
            assert.throws(() => {package.VAT = "Pesho"}, "VAT must be a non-negative number")
        })

        it("set incorrect VAT value", () => {
            let package = new PaymentPackage("Correct", 10);
            assert.throws(() => {package.VAT = -15}, "VAT must be a non-negative number")
        })

        it("set correct VAT value", () => {
            let package = new PaymentPackage("Correct", 10);
            assert.equal(package.VAT,20)
            package.VAT = 30
            assert.equal(package.VAT,30)
        })

        it("set incorrect active value", () => {
            let package = new PaymentPackage("Correct", 10);
            assert.throws(() => {package.active = "Pesho"}, 'Active status must be a boolean')
        })

        it("set correct active value", () => {
            let package = new PaymentPackage("Correct", 10);
            assert.equal(package.active, true);
            package.active = false;
            assert.equal(package.active, false);
        })

        describe("toString", () => {
            let paymentPackage;
            beforeEach(function () {
                paymentPackage = new PaymentPackage("Correct", 10);
            });

            it("test active state", () =>{
                let output = [
                    `Package: Correct`,
                    `- Value (excl. VAT): 10`,
                    `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
                  ].join("\n");
                  assert.equal(paymentPackage.toString(),output)
            })

            it("test inactive state", () =>{
                let output = [
                    `Package: Correct (inactive)`,
                    `- Value (excl. VAT): 10`,
                    `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
                  ].join("\n");
                  paymentPackage.active = false;
                  assert.equal(paymentPackage.toString(),output)
            })
        })
    })
})