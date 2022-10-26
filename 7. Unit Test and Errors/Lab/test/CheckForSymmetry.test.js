const { expect } = require('chai')
const { isSymmetric } = require('../5.Check For Symmetry')

describe('isSymmetric', () => {

     it('Return false if it is no array.', () => {
         expect(isSymmetric(5)).to.be.false;
     })

       it('Array with different type cannot be sym', () =>{
         expect(isSymmetric(['A','B','B',1])).to.be.false;
     })

     it('Array is symmetric with numbers', () => {
         expect(isSymmetric([1,2,2,1])).to.be.true;
     })

     it('Array is symmetric with strings', () => {
         expect(isSymmetric(['A','B','B','A'])).to.be.true;
     });


     it('Array length can be symmetric with odd', () => {
         expect(isSymmetric([1,2,1])).to.be.true;
     })

     it('Array returns true for string param ', () => {
         expect(isSymmetric(['abba'])).to.be.true
     })
})