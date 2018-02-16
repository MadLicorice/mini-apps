import React from 'react';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.num >= 0 && this.props.num <= 8) {
      return (
        <div className="reg">
        {this.props.num+1}
        </div>
      )
    } else if (this.props.num === 9) {
      return (
        <div className="tenth">
        {this.props.num+1}
        </div>
      )
    } else if (this.props.num === 10) {
      return (
        <div className="total">
        {'Total:'}{this.props.total}
        </div>
      )
    }
  }
}


export default Scoreboard;