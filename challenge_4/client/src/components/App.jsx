import React from 'react';
import KnockPin from './PinKnocker.jsx';
import Scoreboard from './Scoreboard.jsx';
import { sendRequest, getScores } from './sendRequest.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pinsLeft: 10,
      pinKnock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      total: 0,
      turn: 1,
    }
    this.handlePinKnockerClick = this.handlePinKnockerClick.bind(this);
    this.handleScoreSubmit = this.handleScoreSubmit.bind(this);
  }

  componentDidMount() {
    let all = getScores();
    console.log(all);
  }

  handlePinKnockerClick(num) {
    let totals = this.state.total + num;
    let currentTurn = this.state.turn + 1;
    this.setState({total: totals}, this.setState({turn: currentTurn}))
  }

  handleScoreSubmit() {
    let obj1 = {name: 'yunus', score: this.state.total}
    sendRequest(obj1);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="knocker">
        {this.state.pinKnock.map((num, index) =>{
          return <KnockPin 
                  num={num} 
                  key={index} 
                  index={index}
                  pinKiller={this.handlePinKnockerClick} 
                  />
        })}
        </div>
        <div id="info">
          <div>{`It's turn ${this.state.turn}`}</div>
          <button id="send" 
                  onClick={() => this.handleScoreSubmit()}>Send Score</button>
        </div>
        <div id="score-board">
          {this.state.pinKnock.map((num, index) =>{
          return <Scoreboard 
                  num={num} 
                  key={index} 
                  index={index}
                  total={this.state.total}
                  />
        })}
        </div>
        <div>
        
        </div>
      </div>
    )
  }
}

export default App;