const { expect } = require('chai')
const { rgbToHexColor } = require('../6.RGB to HEX')

describe('rgbToHeColor', () => {

    it("Lowest possible valid input", () =>{
        expect(rgbToHexColor(0,0,0)).to.equal("#000000")
    })

    it("Highest possible valid input ", () =>{
        expect(rgbToHexColor(255,255,255)).to.equal("#FFFFFF")
    })

    it("Return the correct hexadecimal color", () => {
        expect(rgbToHexColor(255,158,170)).to.equal("#FF9EAA");
    })

    it('Returns undefined if input is wrong.', () => {
        expect(rgbToHexColor('S',-50,256)).to.be.undefined;
    })

})