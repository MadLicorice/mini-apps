import React from 'react';
import Cell from './Cell.jsx';

const Column = (props) => (
  <div className="column">
    {props.col.map((cell, rowIndex) => {
    return <Cell 
            cell={cell} 
            key={rowIndex} 
            rowId={rowIndex} 
            colId={props.colId} 
            handleClick={props.handleClick}
            />
    })}
  </div>
)

export default Column;