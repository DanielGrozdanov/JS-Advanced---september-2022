function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name
            this.email = email
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email)
            this.subject = subject;
        }

        toString() {
            let base = super.toString().replace(')', '');
            return `${base}, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email)
            this.course = course;
        }
        toString() {
            let base = super.toString().replace(')', '');
            return `${base}, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }

}

let people = personAndTeacher();
let newPerson = new people.Person("Ivan", "ivan@gmail")
let studentPerson = new people.Student("Student", "sotfuni@org", "Javascript")
let teacher = new people.Teacher("Teacher", "teacher@gmail.com", "PHP")
console.log(newPerson.toString());
console.log(studentPerson.toString());
console.log(teacher.toString());

