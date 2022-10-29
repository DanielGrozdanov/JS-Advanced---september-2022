// let ob = {
//     a: 1,
//     b: 2
// }

// ob.c = 3;

// Object.defineProperty(ob, 'd', {
//     value: 4,
//     enumerable: false,
// });


// for (let key in ob) {
//     console.log(key)
// }


// for (let key of Object.entries(ob)) {
//     console.log(key);
// }

// let obj = {
//     a: 1,
//     b: 2
// }

// Object.defineProperty(obj, "d", {
//     value: 3,
//     writable: false,
//     enumerable: true
// })

// obj.d = 4;

// for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key} -> ${value}`)
// }


// Object.getPrototypeOf(obj);



function personAndTeacher(){
    class Person {
        constructor(name, email) {
            this.name = name
            this.email = email
        }
    }
    
    class Teacher extends Person{
        constructor(name, email, subject) {
            super(name,email)
            this.subject = subject;
        }
    }

    return{
        Person,
        Teacher
    }
}
