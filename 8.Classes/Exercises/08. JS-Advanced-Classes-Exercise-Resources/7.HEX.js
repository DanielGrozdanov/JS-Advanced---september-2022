class Hex {
    constructor(number) {
        this.number = Number(number)

    }
    valueOf() {
        return this.number;
    }

    toString() {
        let hex = this.number.toString(16).toUpperCase();
        return '0x' + hex;
    }

    plus(number) {
        let increase = this.number + Number(number.valueOf());
        return new Hex(increase);
    }

    minus(number) {
        let decrease = this.number - Number(number);
        return new Hex(decrease);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));