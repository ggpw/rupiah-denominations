import React, { Component } from "react";
import NavBar from "components/navBar";
import RupiahFractions from "screens/rupiahFractions";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    errorList: []
  };

  submitValue = () => {
    const { value } = this.state;
    let errors = [];
    if (!value) {
      errors.push("Value is required.");
    }
    if (errors.length) {
      this.setState({
        errorList: errors
      });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar title="Rupiahs Fraction" />
        <RupiahFractions />
      </div>
    );
  }
}
export default App;
