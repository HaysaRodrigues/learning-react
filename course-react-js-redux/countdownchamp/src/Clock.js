import React, {Component} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';


class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000); // essa linha é mágica
  }

  // leading0 is a good name?
  leading0(num){
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({days, hours, minutes, seconds});

  }

  render() {
    return (
      <div>
        <Typography variant="title" gutterBottom className="Clock-days">{this.leading0(this.state.days)} dias</Typography>
        <Typography variant="title" gutterBottom className="Clock-hours" >{this.leading0(this.state.hours)} horas</Typography>
        <Typography variant="title" gutterBottom className="Clock-minutes">{this.leading0(this.state.minutes)} minutos</Typography>
        <Typography variant="title" gutterBottom className="Clock-seconds">{this.leading0(this.state.seconds)} segundos</Typography>
      </div>
    )
  }
}

export default Clock;
