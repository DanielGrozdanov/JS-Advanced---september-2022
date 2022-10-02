function townToJson(array) {

    let res = [];
    
    for(let each of array.slice(1)){
        let [_,TownName,latitude,longitude] = each.split(/\s*\|\s*/);
            latitude = Number(latitude).toFixed(2);
            longitude = Number(longitude).toFixed(2);

        let obj = {
            Town : TownName,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };

        res.push(obj);
    }
    
    console.log(JSON.stringify(res));
}

townToJson(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])