import React from 'react';
import Column from './Column.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidewaysBoard: [
        [3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3]
      ],
      currPlayer: 1,
      tieCounter: 0,
      endGame: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  addPiece(col) {
    let tempBoard = this.state.sidewaysBoard;
    let column = this.state.sidewaysBoard[col];
    let len = column.length;
    let current = this.state.currPlayer;

    if (column.includes(3)) {
      let tie = this.state.tieCounter + 1;
      this.setState({tieCounter: tie});

      for (var i = len - 1; i >= 0; i -= 1) {
        if (column[i] === 3) {
          break;
        }
      }
      tempBoard[col][i] = current;

      this.setState({sidewaysBoard: tempBoard});
      if (this.state.currPlayer === 1) {
        this.setState({currPlayer: 2})
      } else {
        this.setState({currPlayer: 1})
      }
    } else {
      return;
    }
  }

  // checkWinner() {
    
  // }

  checkTie() {
    if (this.state.tieCounter === 42) {
      alert('The Game Tied!');
      //set the state of game end to true
    }
  }

  componentDidUpdate() {
    this.checkTie();
  }
  // resetGame() {
      // put the state of everything back to init
  // }

  handleClick(col) {
    this.addPiece(col);
  }

  render() {
    // add the endgame flag here
    return(
      <div id="wrapper">
        <h2>{'Connec4'}</h2>
        <h3>{`It is player ${this.state.currPlayer}'s turn`}</h3>
        <div id="board">
          {this.state.sidewaysBoard.map((col, colIndex) => {
            return <Column 
                    col={col}
                    key={colIndex} 
                    colId={colIndex} 
                    handleClick={this.handleClick}
                    />
          })}
        </div>
      </div>
    );
  }
}

export default App;