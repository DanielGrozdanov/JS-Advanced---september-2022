function sortArrayNumbers(array){
    array.sort((a,b) => a - b);
    let newArray = [];

    while(array.length){
        newArray.push(array.shift(), array.pop());
    }

   return newArray;
}
console.log(sortArrayNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));