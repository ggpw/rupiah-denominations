import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setValue } from "utils/redux/actions";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./styles.js";

class RupiahInput extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value: value });
    this.props.dispatch(setValue(value));
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.handleEnter();
    }
  };

  render() {
    const { classes } = this.props;
    const errors = this.props.errors ? this.props.errors : [];
    return (
      <div className={classes.container}>
        <FormControl
          className={classes.formControl}
          variant="outlined"
          error={errors.length > 0}
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
              onKeyPress={this.handleKeyPress}
              labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
            />
            <FormHelperText id="component-error-text">
              {errors.map(i => i)}
            </FormHelperText>
          </div>
        </FormControl>
      </div>
    );
  }
}
RupiahInput.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect()(withStyles(styles)(RupiahInput));
