import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Clock from './Clock';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'November 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadLine(){
    this.setState({deadline : this.state.newDeadline})
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
        Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <div>
          <TextField
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
        </div>
          <Button variant="contained" color="primary" onClick={() => this.changeDeadLine()}>
            Submit
          </Button>
        <div>
        </div>
      </div>
    )
  }
}

export default App;
