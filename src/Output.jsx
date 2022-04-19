import React from "react";

class Output extends React.Component {
  render() {
    if (this.props.tempvalue >= 100) {
      return <h1>"the water is bolied"</h1>;
    } else if (this.props.tempvalue == "") {
      return <h1>{null}</h1>;
    } else {
      return <h1>"low temperature"</h1>;
    }
  }
}

export default Output;
