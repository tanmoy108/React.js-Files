import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textareas: "",
      option: "react",
      check: false,
    };
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.name === "check" ? e.target.checked : e.target.value,
    });
    // let a = e.target.name;
    // let b = e.target.value;
    // if (a === "title") {
    //   this.setState({ title: b });
    // } else if (a === "textareas") {
    //   this.setState({ textareas: b });
    // } else if (a === "option") {
    //   this.setState({ option: b });
    // } else if (a === "check") {
    //   this.setState({ check: e.target.checked });
    // } else {
    //   console.log(a, b);
    // }
  };

  Submitbutton = (event) => {
    event.preventDefault();
    const { title, textareas, option, check } = this.state;
    console.log(title, textareas, option, check);
  };

  render() {
    const { title, textareas, option, check } = this.state;
    return (
      <>
        <form onSubmit={this.Submitbutton}>
          <input
            type="text"
            placeholder="Enter your Name"
            name="title"
            value={title}
            onChange={this.handlechange}
          />
          <br />
          <br />
          <textarea
            type="text"
            placeholder="Enter 200 words text"
            name="textareas"
            value={textareas}
            onChange={this.handlechange}
          />
          <br />
          <br />
          <select onChange={this.handlechange} value={option} name="option">
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
          <br />
          <br />
          <input
            onChange={this.handlechange}
            checked={check}
            type="checkbox"
            name="check"
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
