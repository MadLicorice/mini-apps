import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.cell === 3) {
      return (
        <div 
            className="cells white" 
            onClick={() => this.props.handleClick(this.props.colId)}>
        </div>
      )
    }
    if (this.props.cell === 2) {
      return (
        <div 
            className="cells yellow" 
            onClick={() => this.props.handleClick(this.props.colId)}>
        </div>
      )
    }
    if (this.props.cell === 1) {
      return (
        <div 
            className="cells red" 
            onClick={() => this.props.handleClick(this.props.colId)}>
        </div>
      )
    }
  }
}

export default Cell;