import React from "react";

export const RoomService = (props) => {
  let roomCredits = props.roomCredits;
  let setRoomCredits = props.setRoomCredits;
  return (
    <div className={props.page === 3 ? "container" : "container d-none"}>
      <h1>Room Service</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col" style={{ width: "70%" }}>
              Room Type
            </th>
            <th scope="col"># of Checkout</th>
            <th scope="col"># of In-house</th>
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
                    roomCredits[roomCredit].checkoutCount = e.target.value;
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
                    roomCredits[roomCredit].inHouseCount = e.target.value;
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

export default RoomService;
