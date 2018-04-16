import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
  }

  tick() {
    let newDate = new Date();
    this.setState({
      hours: newDate.getHours(),
      minutes: newDate.getMinutes(),
      seconds: newDate.getSeconds(),
    });
  }

  render() {
    let amPm = this.state.hours >= 12 ? "PM" : "AM";

    function formatHours(time) {
      if (time >= 10 & time <= 12) {
        return "" + time;
      } else if (time < 10) {
        return "0" + time;
      } else {
        return formatHours(time % 12);
      }
    }

    function formatMinutesAndSeconds(time) {
      if (time >= 10 & time <= 60) {
        return "" + time;
      } else if (time < 10) {
        return "0" + time;
      } else {
        return formatMinutesAndSeconds(time % 60);
      }
    }

    let hours = formatHours(this.state.hours)
    let minutes = formatMinutesAndSeconds(this.state.minutes)
    let seconds = formatMinutesAndSeconds(this.state.seconds)

    return(
      <div className="clock">
        <div className="hours">{hours}</div>
        <div>  :  </div>
        <div className="minutes">{minutes}</div>
        <div>  :  </div>
        <div className="seconds">{seconds}</div>
        <div>{amPm}</div>
      </div>
    )
  }
}

export default Clock;
