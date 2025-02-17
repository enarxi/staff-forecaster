import React from "react";

export const Information = (props) => {
  let roomCredits = props.roomCredits;
  let quota = props.quota;
  let setResult = props.setResult;

  const calculate = (roomCredits, quota) => {
    let totalCredits = 0;
    Object.entries(roomCredits).map(([_, credits]) => {
      totalCredits += credits.checkoutCredit * credits.checkoutCount;
      totalCredits += credits.inHouseCredit * credits.inHouseCount;
      return true;
    });
    let result = Math.ceil(totalCredits / quota);
    setResult(result);
    return true;
  };

  return (
    <div className={props.page === 5 ? "container" : "container d-none"}>
      <h1>Staff Forecaster Information</h1>
      <p>Please review the details added below:</p>
      <table className="text-center table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" rowSpan="2">
              Room
            </th>
            <th scope="col" colSpan="2">
              Credits
            </th>
            <th scope="col" colSpan="2">
              Service
            </th>
          </tr>
          <tr>
            <th scope="col">Checkout</th>
            <th scope="col">In House</th>
            <th scope="col">Checkout</th>
            <th scope="col">In House</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(roomCredits).map(([room, credits]) => (
            <tr key={room}>
              <td>{room}</td>
              <td>{credits.checkoutCredit}</td>
              <td>{credits.inHouseCredit}</td>
              <td>{credits.checkoutCount}</td>
              <td>{credits.inHouseCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Staff Quota:</h2>
      <p>{quota}</p>
      <button
        onClick={(e) => {
          calculate(roomCredits, quota);
          props.nextPage(e);
        }}
        className="btn btn-primary"
      >
        Calculate
      </button>
    </div>
  );
};

export default Information;
