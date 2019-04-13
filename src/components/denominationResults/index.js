import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";

const Results = ({ results, classes }) => {
  return (
    <div className={classes.container}>
      {results && results.length > 0 ? "You'll get: " : ""}
      {results.map((r, idx) => (
        <p key={idx}>
          {r.isLeft ? "Rupiahs left " + r.nominal : r.nominal + " x " + r.count}
        </p>
      ))}
    </div>
  );
};
export default withStyles(styles)(Results);
