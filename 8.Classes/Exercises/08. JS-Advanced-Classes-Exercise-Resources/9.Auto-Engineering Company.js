function solve(array) {
    let brands = new Map();

    for (let element of array) {
        let [brand, model, producedCars] = element.split(" | ");
        producedCars = Number(producedCars);
        if (!brands.has(brand)) {
            brands.set(brand, new Map());
        }

        let carModels = brands.get(brand);
        if (!carModels.has(model)) {
            carModels.set(model, 0)
        }
        carModels.set(model, carModels.get(model) + producedCars)
    }

    for (let brand of brands.keys()) {
        console.log(brand);
        let models = brands.get(brand);
        for (let [model, producedCars] of models.entries()) {
            console.log(`###${model} -> ${producedCars}`)
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);