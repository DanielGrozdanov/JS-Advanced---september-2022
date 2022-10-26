function subSum(array, firstIndex, lastIndex) {

    if (!Array.isArray(array)) {
        return NaN;
    }

    if (firstIndex < 0) {
        firstIndex == 0;
    }

    if (lastIndex > array.length - 1) {
        lastIndex = array.length - 1;
    }

    let sum = 0;

    for(let firstIndex = 0; firstIndex <= lastIndex; firstIndex++ ){
        sum+= Number(array[firstIndex]);
    }

    return sum;
}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));