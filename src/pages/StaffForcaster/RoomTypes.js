import React from "react";

export const RoomTypes = (props) => {
  let roomTypes = props.roomTypes;
  let setRoomTypes = props.setRoomTypes;

  const RoomTypeList = () => {
    const handleDelete = (index) => {
      const tempRoomTypes = roomTypes.filter((_, i) => i !== index);
      setRoomTypes(tempRoomTypes);
    };

    return (
      <ul>
        {!roomTypes.length && <p>Please add a Room Type</p>}
        {roomTypes.map((roomType, index) => (
          <li
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            {roomType}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const addRoomType = () => {
    const input = document.querySelector(".form-control");
    const newRoomType = input.value.trim();
    if (newRoomType) {
      const tempRoomTypes = [...roomTypes, newRoomType];
      input.value = "";
      setRoomTypes(tempRoomTypes);
    }
  };

  return (
    <div className={props.page === 1 ? "container" : "container d-none"}>
      <h1>Room Types</h1>
      <RoomTypeList roomTypes={roomTypes} />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Room Type"
          aria-label="Add Room Type"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => addRoomType(roomTypes, setRoomTypes)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default RoomTypes;
