import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import RupiahInput from "components/rupiahInput";
import { validation, denominate } from "utils/functions/checkInputRupiah";
import "./index.css";

class RupiahFractions extends Component {
  state = {
    errors: [],
    results: []
  };
  doValidation = () => {
    const { value } = this.props;
    const errors = validation(value);
    let results = [];
    if (!errors || errors.length === 0) {
      results = denominate(value);
    }
    this.setState({
      errors: errors,
      results: results
    });
  };
  render() {
    const { errors, results } = this.state;
    return (
      <div className="Container">
        <RupiahInput errors={errors} handleEnter={this.doValidation} />
        <div>
          <Button variant="contained" onClick={this.doValidation}>
            Process
          </Button>
          {results.map((r,idx) => <p key={idx}>{r}</p>)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    value: state.rupiah
  };
};
export default connect(mapStateToProps)(RupiahFractions);
