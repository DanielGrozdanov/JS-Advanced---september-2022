function solve(...input) {
    let res = {};

    for (let el of input) {
        let type = typeof(el);
        console.log(`${type}: ${el}`)

        if(!res.hasOwnProperty(type)){
            res[type] = 0;
        }

        res[type]++;
    }

    let buff = "";
    for(let [k,v] of Object.entries(res)){
       buff+= `${k} = ${v}\n`;
    }

    console.log(buff);

}


solve('cat', 42, function () { console.log('Hello world!'); })