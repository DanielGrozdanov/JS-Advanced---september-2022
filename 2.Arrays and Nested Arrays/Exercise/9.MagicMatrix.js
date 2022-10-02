function magicMatrix(matrix){
    
    for(i = 0; i < matrix.length - 1;i++){
        let rowOneSum = matrix[i].reduce((acc,number) => acc + number);
        let rowTwoSum = matrix[i + 1].reduce((acc,number) => acc + number);
        let sumColOne = 0;
        let sumColeTwo = 0;

        for(col = 0; col < matrix[i].length; col ++){
            sumColOne += matrix[i][col];
            sumColeTwo += matrix[i + 1][col];
        }
        if(rowOneSum !== rowTwoSum || sumColOne !== sumColeTwo){
            return false;
        }
        return true;
    }
}

console.log(magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));