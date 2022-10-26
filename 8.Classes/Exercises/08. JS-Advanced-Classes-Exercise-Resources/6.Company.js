class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                avgSalary: 0,
                sumSalary: 0,
                employees: []
            }
        }

        this.departments[department].employees.push({name, salary, position});
        this._updateDep(this.departments[department], salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    _updateDep(department, salary) {
        department.sumSalary += Number(salary);
        department.avgSalary = department.sumSalary / department.employees.length
    }

    bestDepartment() {
        let bestDepartment = Object.entries(this.departments).sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
            return depInfoTwo.avgSalary - depInfoOne.avgSalary;
        })[0]
        let sortedEmpl = bestDepartment[1].employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        })
        let buffer = `Best Department is: ${bestDepartment[0]}\n`
        buffer += `Average salary: ${bestDepartment[1].avgSalary.toFixed(2)}\n`

        for (let empl of sortedEmpl) {
            buffer += `${empl.name} ${empl.salary} ${empl.position}\n`

        }

        return buffer.trim();
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


// addEmployee(name, salary, positon, department) {

//     if (!name || !salary || salary < 0 || !positon || !department) {
//         throw new Error("Invalid Error");
//     }


//     if (!this.departments[department]) {
//         this.departments[department] = {
//             avgSalary: 0,
//             sumSalary: 0,
//             employees: []
//         }
//     }

//     this.departments[department].employees.push({ name, salary, positon });
//     this._updateDepartmentValues(this.departments[department], salary)
//     return `New employee is hired. Name: ${name}. Position: ${positon}`
// }

// _updateDepartmentValues(department, salary) {
//     department.sumSalary += Number(salary);
//     department.avgSalary = department.sumSalary / department.employees.length;

// }

// bestDepartment() {
//     let bestDep = Object.entries(this.departments).sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
//         return depInfoOne.avgSalary - depInfoTwo.avgSalary
//     })[0];
//     let sortedEmpl = bestDep[1].employees.sort((a, b) => {
//         return b.salary - a.salary || a.name.localeCompare(b.name)
//     })

//     let buffer = `Best Department is: ${bestDep[0]}`
//     buffer += `Average salary: ${bestDep[1].avgSalary.toFixed(2)}`


//     for (let empl of sortedEmpl) {
//         buffer += `${empl.name} ${empl.salary} ${empl.position}`
//     }

//     return buffer;
// }