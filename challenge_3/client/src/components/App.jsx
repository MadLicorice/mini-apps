import React from 'react';
import Column from './Column.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

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
      currPlayer: 1
    }
  }

  addPiece(col) {
    //get col id
    //get the board state for the column using the col id in the array of arrays
    //iterate until you find one that is NOT 3
      //set state of the board it equal to the number of the current player
      //send the CSS styles down to the cell????
      //switch the current player
    //call win checker;
  }

  // winChecker() {

  // }

  componentDidMount() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(col) {
    //addPiece(col);
    console.log(col);
  }

  render() {
    return(
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
    )
  }
}

export default App;


// [
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0]
// ]