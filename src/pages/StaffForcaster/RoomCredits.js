import React from "react";

export const RoomCredits = (props) => {
  let roomCredits = props.roomCredits;
  let setRoomCredits = props.setRoomCredits;
  return (
    <div className={props.page === 2 ? "container" : "container d-none"}>
      <h1>Room Credits</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col" style={{ width: "70%" }}>
              Room Type
            </th>
            <th scope="col">Credits(Checkout)</th>
            <th scope="col">Credits(In-house)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(roomCredits).map((roomCredit) => (
            <tr key={roomCredit}>
              <td>{roomCredit}</td>
              <td>
                <input
                  id={"inputCreditCheckout" + roomCredit}
                  onChange={(e) => {
                    roomCredits[roomCredit].checkoutCredit = e.target.value;
                    setRoomCredits({ ...roomCredits });
                  }}
                  type="number"
                  className="form-control"
                />
              </td>
              <td>
                <input
                  id={"inputCreditInHouse" + roomCredit}
                  onChange={(e) => {
                    roomCredits[roomCredit].inHouseCredit = e.target.value;
                    setRoomCredits({ ...roomCredits });
                  }}
                  type="number"
                  className="form-control"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomCredits;
