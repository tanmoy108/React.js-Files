import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), timevalue: "bn-BD", innervalue: "button" };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      timevalue: "en-US",
    });
  };
  handleClick2 = (e) => {
    //e.preventDefault();
    this.setState({ innervalue: e });
  };

  render() {
    return (
      <>
        <h1>Digital clock by Class Component</h1>
        <h1>{this.state.date.toLocaleTimeString(this.state.timevalue)}</h1>
        <button onClick={this.handleClick}>Click here</button>
        <button onClick={this.handleClick2.bind(this, 'button2')}>
          {this.state.innervalue}
        </button>
      </>
    );
  }
}

export default Clock;
