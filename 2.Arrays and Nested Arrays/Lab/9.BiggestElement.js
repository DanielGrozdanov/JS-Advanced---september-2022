function biggestElement(matrix){

    let biggestNum = Number.NEGATIVE_INFINITY;
    
    for(row = 0; row < matrix.length; row++){
        for(col = 0; col < matrix[row].length; col++){
            if(biggestNum < matrix[row][col]){
                biggestNum = matrix[row][col];
            }
        }
    }

    console.log(biggestNum);
    
}

biggestElement([[20, 50, 10], [8, 33, 145]]);

