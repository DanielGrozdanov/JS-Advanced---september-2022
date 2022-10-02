function diagonalSums(matrix){
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    for(let row = 0; row < matrix.length; row++){
        firstDiagonal += matrix[row][firstIndex]
        secondDiagonal += matrix[row][secondIndex]
        
        firstIndex++;
        secondIndex--;
    }
    console.log(firstDiagonal + ' ' + secondDiagonal)
}

diagonalSums(
    [[20, 40],
    [10, 60]]
   )