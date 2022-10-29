function solve() {

    //Implement another class PartyBalloon, which inherits the Balloon class and is initialized with 2 additional parameters - ribbonColor (String) and ribbonLength (Number).

    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = hasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight)
            this.ribbonColor = ribbonColor;
            this.ribbonLength = Number(ribbonLength);
            this._ribbon = {
                color: this.ribbonColor,
                length: this.ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength)
            this._text = text;
        }

        get text(){
            return this._text;
        }
    }

    return{
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}


let classes = solve();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let testBirthdayBallon = new classes.BirthdayBalloon("red",20.5,"white",8.59,"SomeText");
// let ribbon = testPartyBalloon.ribbon;
let test = new classes.PartyBalloon("Tumno-bqlo",20.5,"Svetlo-cherno", 10.25);
let ribbon = test.ribbon;
console.log(ribbon.co);
// console.log(testBalloon);
// console.log(testPartyBalloon.ribbon);
// console.log(ribbon);
// console.log(testBirthdayBallon)
// console.log(testBirthdayBallon.text)