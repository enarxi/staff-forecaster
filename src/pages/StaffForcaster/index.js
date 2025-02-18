import React, { useState, useEffect } from "react";
import { RoomTypes } from "./RoomTypes";
import { RoomCredits } from "./RoomCredits";
import { RoomService } from "./RoomService";
import { StaffQuota } from "./StaffQuota";
import { Information } from "./Information";
import { Result } from "./Result";
const StaffForecaster = () => {
  const [page, setPage] = useState(1);
  const [roomTypes, setRoomTypes] = useState([]);
  const [roomCredits, setRoomCredits] = useState({});
  const [quota, setQuota] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    let tempRoomCredits = {};
    roomTypes.forEach((a) => {
      tempRoomCredits[a] = {
        checkoutCredit: 0,
        inHouseCredit: 0,
        checkoutCount: 0,
        inHouseCount: 0,
      };
    });
    setRoomCredits(tempRoomCredits);
  }, [roomTypes]);

  const prevPage = (a) => {
    a.stopPropagation();
    setPage(page - 1);
  };
  const nextPage = (a) => {
    a.stopPropagation();
    setPage(page + 1);
  };
  const reset = (a) => {
    a.stopPropagation();
    setPage(1);
    setRoomTypes([]);
    setRoomCredits({});
    setQuota(0);
    setResult(0);
  };
  return (
    <>
      <h1>Staff Forecaster</h1>
      <p className="lead">
        This is a staff forecaster tool that helps you to forecast the number of
        staff required for a day based on the number of credits for the quota of
        the staff for a day.{" "}
      </p>
      <div className="container d-flex justify-content-between my-3">
        {page === 1 ? (
          <div></div>
        ) : (
          <button onClick={prevPage} className="btn btn-primary">
            Previous
          </button>
        )}
        {page === 6 || page === 5 ? (
          <div></div>
        ) : (
          <button onClick={nextPage} className="btn btn-primary">
            Next
          </button>
        )}
      </div>
      {console.log(page)}
      <RoomTypes
        roomTypes={roomTypes}
        setRoomTypes={setRoomTypes}
        page={page}
      />
      <RoomCredits
        roomCredits={roomCredits}
        setRoomCredits={setRoomCredits}
        page={page}
      />
      <RoomService
        roomCredits={roomCredits}
        setRoomCredits={setRoomCredits}
        page={page}
      />
      <StaffQuota quota={quota} setQuota={setQuota} page={page} />
      <Information
        roomCredits={roomCredits}
        quota={quota}
        setResult={setResult}
        page={page}
        nextPage={nextPage}
      />
      <Result result={result} page={page} reset={reset} />
      <div className="my-5"></div>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">© 2025</span>
        </div>
      </footer>
    </>
  );
};

export default StaffForecaster;
