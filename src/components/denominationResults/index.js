import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results.map((r, idx) => (
        <p>
          {r.isLeft ? "Rupiahs left " + r.nominal : r.nominal + " x " + r.count}
        </p>
      ))}
    </div>
  );
};
export default Results;
