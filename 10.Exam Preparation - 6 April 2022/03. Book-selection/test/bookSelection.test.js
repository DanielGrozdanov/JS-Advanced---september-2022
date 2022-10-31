let bookSelection = require('../bookSelection');
let {assert} = require("chai");


describe("BookSelection Tests", function () {
    describe("isGenreSuitable tests", function () {
        function concatString(genre, age) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`
        }

        it("correct genre 'Thriller' and incorrect age ", function () {
            let expect = concatString("Thriller", 12);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), expect)
            expect = concatString("Thriller", 10);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 10), expect)
        });


        it("correct genre 'Horror' and incorrect age ", function () {
            let expect = concatString("Horror", 12);
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), expect)
            expect = concatString("Horror", 10);
            assert.equal(bookSelection.isGenreSuitable("Horror", 10), expect)
        });


        it("Suttable genre 'Thriller' ", function () {
            let expText = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable("Thriller", 13), expText)
            assert.equal(bookSelection.isGenreSuitable("Thriller", 20), expText)

        })
        it("Suttable genre 'Horror' ", function () {
            let expText = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable("Horror", 15), expText)
            assert.equal(bookSelection.isGenreSuitable("Horror", 23), expText)
        })

    });

    describe("isItAffordable tests", function () {

        it("Invalid input with string and number", function () {
            assert.throw(() => {bookSelection.isItAffordable("10", 10)}, "Invalid input")
        });

        it("Invalid input with number and string", function () {
            assert.throw(() => {bookSelection.isItAffordable(22, "18")}, "Invalid input")
        });

        it("Invalid input with string and string", function () {
            assert.throw(() => {bookSelection.isItAffordable("22", "18")}, "Invalid input")
        });

        

        it("Affortable false", function () {
            assert.equal(bookSelection.isItAffordable(12, 10), "You don't have enough money")
            assert.equal(bookSelection.isItAffordable(22, 18), "You don't have enough money")
        });


        it("Books bought", function () {
            assert.equal(bookSelection.isItAffordable(12, 15), "Book bought. You have 3$ left")
            assert.equal(bookSelection.isItAffordable(22, 24), "Book bought. You have 2$ left")
            assert.equal(bookSelection.isItAffordable(20, 50), "Book bought. You have 30$ left")
        });


    });

    describe("suitableTitles tests", function () {

        it("Invalid input with two strings", function () {
            assert.throw(() => {bookSelection.suitableTitles("Pepi", "gogo")}, "Invalid input");
        });

        it("Invalid input with number and string", function () {
            assert.throw(() => {bookSelection.suitableTitles(10, "gogo")}, "Invalid input");
        });

        it("Invalid input with object and string", function () {
            assert.throw(() => {bookSelection.suitableTitles({}, "gogo")}, "Invalid input");
        });

        it("Invalid input with Array and number", function () {
            assert.throw(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 10)}, "Invalid input");
        });

        it("Invalid input with Array and object", function () {
            assert.throw(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], {})}, "Invalid input");
        });

        it("Invalid input with Array and empty array", function () {
            assert.throw(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], [])}, "Invalid input");
        });

        it("Invalid input with empty Array and empty array", function () {
            assert.throw(() => {bookSelection.suitableTitles([], [])}, "Invalid input");
        });

        it("Invalid input with object and object", function () {
            assert.throw(() => {bookSelection.suitableTitles({}, {})}, "Invalid input");
        });

        it("Invalid input with number and number", function () {
            assert.throw(() => {bookSelection.suitableTitles(10, 10)}, "Invalid input");
        });



        it("Correct data", function () {
            let input = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The Da Vinci Code1", genre: "Horror" },
                { title: "The Da Vinci Cod1", genre: "Horror" }
            ]

            let result = ['The Da Vinci Code1', 'The Da Vinci Cod1'];

            assert.equal(bookSelection.suitableTitles(input, "Horror").join(" "), result.join(" "));
            result = ['The Da Vinci Code'];
            assert.equal(bookSelection.suitableTitles(input, "Thriller").join(" "), result.join(" "));
            result = [];
        });
    });
});
