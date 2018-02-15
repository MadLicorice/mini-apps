import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      player: 3
    }
  }

  render() {
    return (
      <div 
          className="cell" 
          onClick={() => this.props.handleClick(this.props.colId)}>
          {'Col:'}{this.props.colId}{' Row:'}{this.props.rowId}
      </div>
    )
  }
}





export default Cell;