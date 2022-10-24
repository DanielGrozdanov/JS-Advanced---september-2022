function solve(input) {

    let cars = {};


    let carFactory = {
        create: (name, inherit, parentName) => {
            cars[name] = inherit ? Object.create(cars[parentName]) : {};
        },
        set: (name, property, value) => cars[name][property] = value,
        print: (name) => {

            let res = []
            
            for(let key in cars[name]){
                res.push(`${key}:${cars[name][key]}`);
            }

            console.log(res.join(','))
        }
    
    }
    for (let element of input) {
        let [command, name, key, value] = element.split(' ');
        carFactory[command](name, key, value);
    }

}

solve(
    ['create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2']
)