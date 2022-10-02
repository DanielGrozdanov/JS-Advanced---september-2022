function smallesNumbers(array){
    array.sort((a,b) => a - b);
    let smallerNumbs = array.slice(0,2);
    console.log(smallerNumbs.join(' '))
}

smallesNumbers([30, 15, 50, 5]);