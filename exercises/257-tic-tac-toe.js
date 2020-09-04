// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null

function rowColomn() {
    var cell = Math.floor(Math.random() * 3);
    return cell;
}


function player1(ticTacToeBoard) {
    var row =  rowColomn();
    var colomn = rowColomn();
    playerOneChoice = 'x'
    ticTacToeBoard[row][colomn] = playerOneChoice;
    // console.log(ticTacToeBoard)
}

function player2(ticTacToeBoard) {
    var row =  rowColomn();
    var colomn = rowColomn(); 
    playerTwoChoice = 'o'
    ticTacToeBoard[row][colomn] = playerTwoChoice;
    // console.log(ticTacToeBoard)
}



function ticTacToe(){
    var ticTacToeBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ] 
    player1(ticTacToeBoard);
    player2(ticTacToeBoard);
    if ( playerOneChoice === playerTwoChoice ){
        // console.log('Cell taken!', playerOneChoice, playerTwoChoice)
    }
    console.log(ticTacToeBoard);
}
// ticTacToe();

function checkBoard() {
    var ticTacToeBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ] 
    for ( i = 0; i < ticTacToeBoard.length; i++ ) {
        for ( j = 0; j < ticTacToeBoard[i].length; j++ ){
            if ( j % 2 === 0 ){
                player1(ticTacToeBoard);
            }else{
                player2(ticTacToeBoard);   
            }
            // if (playerTwoChoice[j] == playerOneChoice[j]) {
            //     return 'i'
            // }
        }
    }
    console.log(ticTacToeBoard);
}
checkBoard();

