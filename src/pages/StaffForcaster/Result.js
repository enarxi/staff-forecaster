import React from "react";

export const Result = (props) => {
  let resultNumber = props.result;
  return (
    <div className={props.page === 6 ? "container" : "container d-none"}>
      <h1>Results</h1>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Forecasted Result</h5>
                <p className="display-1">{resultNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <button
            onClick={(e) => {
              props.reset(e);
            }}
            className="btn btn-primary"
          >
            Compute Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
