function solve(array) {
    let juiceMap = new Map();
    let bottle = new Map();

    for (let each of array) {
        let [juiceName, quantity] = each.split(" => ");
        quantity = Number(quantity);

        if (!juiceMap.has(juiceName)) {
            juiceMap[juiceName] = 0;
        }

        juiceMap[juiceName] += quantity;


        if (juiceMap[juiceName] >= 1000) {
            if (!bottle.has(juiceName)) {
                bottle.set(juiceName, 0);
            }

            bottle.set(juiceName, Math.trunc(Number(juiceMap[juiceName] / 1000)));
            
        }

        juiceMap.set(juiceName, juiceMap[juiceName] + quantity)
    }
    for(let [juice , bott] of bottle){
        console.log(juice + ' => ' + bott)
    }
}
solve(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);