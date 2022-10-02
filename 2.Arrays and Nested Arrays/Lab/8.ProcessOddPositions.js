function oddPositions(array){

    let newArray = [];

    for(i = 0; i < array.length;i++){
        if(i % 2 == 1){
            newArray.push(array[i] * 2);
        }
    }

    console.log(newArray.reverse().join(' '));
}

oddPositions([10, 15, 20, 25])  