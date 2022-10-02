function storeProducts(array) {



    let sorted = array.sort();
    let checkLetter = '';
    for (let each of sorted) {
        let currentLetter = each.charAt(0);
        if (currentLetter !== checkLetter) {
            checkLetter = currentLetter;
            console.log(currentLetter);
        }
        let res = each.split(" : ");
        console.log(res.join(": "))
    }
}

storeProducts(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
)