function extendProtoType(classToExtend){
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ${this.toString()}`
    }
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}


extendProtoType(Person)
let p = new Person("Pesho", "Pesho@emil")
console.log(p.species);
console.log(p.toSpeciesString())