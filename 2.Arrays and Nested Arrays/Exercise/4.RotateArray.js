function rotate(array, num){

    for(i = 0;i < num; i++){
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

rotate(['1','2','3','4'],2);