function subsetFromArray(input){
    let newArray = [];
    let biggestOne = input.shift();
    newArray.push(biggestOne);

    for(el of input){
        if(el >= biggestOne){
            newArray.push(el);
            biggestOne = el;
        }
    }

    return newArray;

}

subsetFromArray(
    [1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );