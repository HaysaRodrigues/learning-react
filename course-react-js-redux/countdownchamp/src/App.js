import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Clock from './Clock';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'August 15, 2018',
      newDeadline: ''

    }
  }

  changeDeadLine(){
    this.setState({deadline : this.state.newDeadline})
  }

  render() {
    return (
      <div className="App">
          <Typography variant="display3" gutterBottom>
            Countdown to {this.state.deadline}
          </Typography>
          <Clock
            deadline={this.state.deadline}
          />
        <div>
          <TextField
            placeholder='November 30, 2047'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
        </div>
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{ margin: 25 }}
            onClick={() => this.changeDeadLine()}>
            Submit
          </Button>
        <div>
        </div>
      </div>
    )
  }
}

export default App;
