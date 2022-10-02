function ticTacToe(input) {
    let initialDashBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let isFirstPlayer = true

    for (let coordinates of input) {
        let [x, y] = coordinates.split(" ")

        if (initialDashBoard[x][y]) {
            console.log(`This place is already taken. Please choose another!`)
            continue
        }


        var marker = isFirstPlayer ? "X" : "O";
        initialDashBoard[x][y] = marker;

        if(checkWin(initialDashBoard, marker)) {
            console.log(`Player ${marker} wins!`);
            initialDashBoard.forEach(row => console.log(row.join("\t")))
            return
            
        }


        if(!checkFreeSpace(initialDashBoard)){
            console.log("The game ended! Nobody wins :(");
            initialDashBoard.forEach(row => console.log(row.join("\t")))
            return;
        }
        isFirstPlayer = !isFirstPlayer
    }


    function checkFreeSpace(){
        for(let row = 0; row < initialDashBoard.length; row++){
            for(let col = 0; col < initialDashBoard.length; col++){
                if(!initialDashBoard[row][col]){
                    return true
                    
                }
            }
        }
        return false;
    }

     function checkWin(){
    
        for (let i = 0; i < initialDashBoard.length; i++) {
            if (initialDashBoard[i][0] === marker &&
                initialDashBoard[i][1] === marker &&
                initialDashBoard[i][2] === marker) {
                return true
            } else if (initialDashBoard[0][i] === marker &&
                initialDashBoard[1][i] === marker &&
                initialDashBoard[2][i] === marker) {
                return true
            } else if (initialDashBoard[0][0] === marker &&
                initialDashBoard[1][1] === marker &&
                initialDashBoard[2][2] === marker) {
                return true
            } else if (initialDashBoard[0][2] === marker &&
                initialDashBoard[1][1] === marker &&
                initialDashBoard[2][0] === marker) {
                return true
            }
        }

        return false
     }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);