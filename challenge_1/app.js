document.addEventListener('DOMContentLoaded', function() {
  let state = {
    board: [0, 0, 0, 
            0, 0, 0, 
            0, 0, 0],
    currentPlayer: 'X',
    wins: {
      fin: false,
      winsX: 0,
      winsY: 0
    }
  };

  const init = function() {
    let board = document.getElementById('board');
    let resetButton = document.getElementById('reset');

    board.addEventListener('click', function(event) {
      handleClick(event);
    });

    resetButton.addEventListener('click', function(event) {
      reset();
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
          state.board[id - 1] = '1';
          state.currentPlayer = 'O';
          turn.innerHTML = 'O';
        } else {
          state.board[id - 1] = '2';
          state.currentPlayer = 'X';
          turn.innerHTML = 'X';
        }

      checkWinOrTie(player);
      }
    } else {
      reset();
    }
  }

  const checkWinOrTie = function(player) {
    let flag = false;
    if (!state.board.includes(0)) {
      flag = true;
    }
    if (!flag) {
      checkWinner(player);
    } else {
      declareTie();
    }
  }

  const checkWinner = function(player) {
    let x = state.board;
    if (
      ((x[0] + x[1] + x[2]) === ('111')) || ((x[0] + x[1] + x[2]) === ('222'))
      || ((x[3] + x[4] + x[5]) === ('111')) || ((x[3] + x[4] + x[5]) === ('222'))   
      || ((x[6] + x[7] + x[8]) === ('111')) || ((x[6] + x[7] + x[8]) === ('222'))
      ) {
      winnerWinnerChickenDinner(player);
    } else if (
      ((x[0] + x[3] + x[6]) === ('111')) || ((x[0] + x[3] + x[6]) === ('222'))
      || ((x[1] + x[4] + x[7]) === ('111')) || ((x[1] + x[4] + x[7]) === ('222'))  
      || ((x[2] + x[5] + x[8]) === ('111')) || ((x[2] + x[5] + x[8]) === ('222'))
      ) {
      winnerWinnerChickenDinner(player);
    } else if (
      ((x[0] + x[4] + x[8]) === ('111')) || ((x[0] + x[4] + x[8]) === ('222'))
      || ((x[2] + x[4] + x[6]) === ('111')) || ((x[2] + x[4] + x[6]) === ('222'))
      ) {
      winnerWinnerChickenDinner(player);
    } else {
      return;
    }
  }

  const winnerWinnerChickenDinner = function(player) {
    document.getElementById('winners').innerHTML = `${player} Wins!`
    document.getElementById('turn').innerHTML = player;
    state.currentPlayer = player;
    state.wins.fin = true;
    updateLeaderboard(player);
    return;
  }

  const updateLeaderboard = function(player) {
    if (player === 'X') {
      state.wins.winsX += 1;
      document.getElementById('X').innerHTML = state.wins.winsX;
    } else {
      state.wins.winsY += 1;
      document.getElementById('Y').innerHTML = state.wins.winsY;
    }
    return;
  }

  const declareTie = function() {
    document.getElementById('winners').innerHTML = 'It\'s a tie! You both lose!!'
    document.getElementById('turn').innerHTML = 'X';
    state.currentPlayer = 'X';
    state.wins.fin = true;
    return;
  }

  const reset = function(event) {
    state.board = [0, 0, 0,
                   0, 0, 0,   
                   0, 0, 0];
    Array.from(document.getElementsByClassName('box')).forEach(item => {
      item.innerHTML = '';
    });
    state.wins.fin = false;
    document.getElementById('winners').innerHTML = '';
    return;
  }

  init();
});