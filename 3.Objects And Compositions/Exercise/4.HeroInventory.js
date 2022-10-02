function heroInventory(input){

    let theHero = [];

    for(let each of input){
        let [name, level , items] = each.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        theHero.push({name,level,items})
    }

    console.log(JSON.stringify(theHero));
}

heroInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])