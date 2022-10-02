function townPop(input){
    let result = {};
    
    for(let inp of input){
        let [townName,population] = inp.split(" <-> ");
        population = Number(population)
        
        if(result[townName] !== undefined){
            result[townName] += population;
        }else{
            result[townName] = population;
        }

    }
   
    for (let res in result) {
        console.log(`${res} : ${result[res]}`);
    }

}

townPop(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)