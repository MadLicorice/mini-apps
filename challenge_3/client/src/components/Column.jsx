import React from 'react';
import Cell from './Cell.jsx';

class Column extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="column">
        {this.props.col.map((cell, rowIndex) => {
        return <Cell 
                cell={cell} 
                key={rowIndex} 
                rowId={rowIndex} 
                colId={this.props.colId} 
                handleClick={this.props.handleClick}
                />
        })}
      </div>
    )
  }
}




export default Column;