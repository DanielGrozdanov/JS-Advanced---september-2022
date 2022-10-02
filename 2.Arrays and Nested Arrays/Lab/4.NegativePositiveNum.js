function negativePositive(array){
    let result = [];
    

    array.forEach(element => {
        if(element < 0){
            result.unshift(element);
        }else{
            result.push(element);
        }
    });

    console.log(result.join('\n'));
}

negativePositive([7, -2, 8, 9]);