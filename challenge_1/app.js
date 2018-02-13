document.addEventListener('DOMContentLoaded', function() {
  let state = {
    board: [0, 0, 0,   0, 0, 0,   0, 0, 0],
    currentPlayer: 'X',
    wins: {
      fin: false,
      startPlayer: 'X',
      winsX: 0,
      winsY: 0
    }
  };

  const init = function() {
    let board = document.getElementById('board');
    board.addEventListener('click', function(event) {
      handleClick(event);
    });
  }
  
  const handleClick = function(event) {
    if (!state.wins.fin) {
      let box = document.getElementById(event.target.id);
      let id = box.id;
      let turn = document.getElementById('turn');
      let player = state.currentPlayer;

      if (id >= 1 && id <= 9 && !box.innerHTML) {
        box.innerHTML = state.currentPlayer;
        if (state.currentPlayer === 'X') {
          state.board[id - 1] = 1;
          state.currentPlayer = 'O';
          turn.innerHTML = 'O';
        } else {
          state.board[id - 1] = 2;
          state.currentPlayer = 'X';
          turn.innerHTML = 'X';
        }

      //checkWinner(id, player);
      }
    }
  }

  const checkWinner = function(id, player) {
    let flag = false;
    if (!state.board.includes(0)) {
      flag = true;
    }
    if (!flag) {
      if (id === (1 || 3 || 5 || 7 || 9)) {
        checkWinnerByRowOrCol(player);
        checkWinnerByDiag(player);
      } else {
        checkWinnerByRowOrCol(player);
      }
    } else {
      declareTie();
    }
  }

  const checkWinnerByRowOrCol = function(player) {
    let x = state.board;
    if (
      ((x[0] + x[1] + x[2]) === (3 || 6)) 
      || ((x[3] + x[4] + x[5]) === (3 || 6))  
      || ((x[6] + x[7] + x[8]) === (3 || 6))
      ) {
      winnerWinnerChickenDinner(player);
    } else if (
      ((x[0] + x[3] + x[6]) === (3 || 6)) 
      || ((x[1] + x[4] + x[7]) === (3 || 6))  
      || ((x[2] + x[5] + x[8]) === (3 || 6))
      )  {
      winnerWinnerChickenDinner(player);
    }
  }

  const checkWinnerByDiag = function(player) {
    let x = state.board;
    if (
      ((x[0] + x[4] + x[8]) === (3 || 6)) 
      || ((x[2] + x[4] + x[6]) === (3 || 6))  
      ) {
      winnerWinnerChickenDinner(player);
    }
  }

  const winnerWinnerChickenDinner = function(player) {
    document.getElementById('winners').innerHTML = `${player} Wins!`
  }

  const declareTie = function() {
    document.getElementById('winners').innerHTML = 'It\'s a tie! You both lose!!'
  }

  const reset = function() {

  }

  init();
});

