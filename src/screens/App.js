import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import styles from "./styles.js";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    errorList: []
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  submitValue = () => {
    const {value} = this.state;
    let errors = [];
    if(!value){
      errors.push("Value is required.")
    }
    if(errors.length){
      this.setState({
        errorList: errors
      })
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <FormControl
          className={classes.formControl}
          variant="outlined"
          error={this.state.errorList.length}
        >
          <div>
            <InputLabel
              ref={ref => {
                this.labelRef = ReactDOM.findDOMNode(ref);
              }}
              htmlFor="component-outlined"
            >
              Value
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={this.state.value}
              onChange={this.handleChange}
              labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
            />
            <FormHelperText id="component-error-text">
              {
                this.state.errorList.map((i)=>(
                  <h4>{i}</h4>
                ))
              }
            </FormHelperText>
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.button}
              onClick={this.submitValue}
            >
              Process
            </Button>
          </div>
        </FormControl>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);
