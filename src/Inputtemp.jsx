import React from "react";
import Temparature from "./Temparature";
import { common, convertoc, convertof } from "./Converter";
import Output from "./Output";

class Inputtemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "",
    };
  }

  change = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? common(temperature, convertoc) : temperature;
    const fahrenheit =
      scale === "c" ? common(temperature, convertof) : temperature;

    return (
      <>
        <Temparature
          scale="c"
          temperaeturevalue={celsius}
          handlechange={this.change}
        />
        <Temparature
          scale="f"
          temperaeturevalue={fahrenheit}
          handlechange={this.change}
        />
        <Output tempvalue={celsius} />
      </>
    );
  }
}

export default Inputtemp;
