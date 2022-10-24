function solve(data, criteria) {
    let employeeList = JSON.parse(data);
    let [key, value] = criteria.split("-");
    let id = 0;

    let filteredEmpl = [];

    for (let emp of employeeList) {
        if (value === 'all' || emp[key] === value)
            filteredEmpl.push(emp);
    }

    function format(firstName, lastName, email) {
        return `. ${firstName} ${lastName} - ${email}`
    }

    filteredEmpl.forEach(element => {
        let data = format(element['first_name'], element['last_name'], element['email'])
        console.log(id++ + data);
    })
}


// let employeeList = JSON.parse(data);
// let [key, value] = criteria.split("-");
// let id = 0;

// let filteredEmpl = [];

// for (let emp of employeeList) {
//     if (value === 'all' || emp[key] === value)
//         filteredEmpl.push(emp);
// }

// for (let employee of filteredEmpl) {
//     let formatted = `${id++}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`
//     console.log(formatted)
// }

solve(`
    [{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
)