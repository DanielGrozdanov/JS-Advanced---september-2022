function biggerHalf(array){

    array.sort((a,b) => a - b);
    let result = array.slice(array.length / 2);
    console.log(result);
}

biggerHalf([4, 7, 2, 5]);