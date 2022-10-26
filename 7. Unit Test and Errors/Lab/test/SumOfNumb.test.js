const { expect } = require('chai')
const { sum } = require("../4.Sum of Numbers")

describe('sum', () => {

    it('should return correct result with array of numbers', () =>{
        let array = [1,2,3];

        expect(array).to.eql([1,2,3]);
    });

    it('should return the sum of elements', () => {
            // Arange
            let array = [1,2,3];

            // Act
    
            let result = sum(array);
    
            // Assert
    
            // if(result != 6) {
            //     throw new Error("Test Fails"); //- without Chai.
            // }
                
            expect(result).to.be.equal(6);
    });
})