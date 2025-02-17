import React from "react";

export const StaffQuota = (props) => {
  return (
    <div className={props.page === 4 ? "container" : "container d-none"}>
      <h1>Staff Quota</h1>
      <div className="form-group">
        <label htmlFor="staffQuotaCredits">
          Number of credits for the quota of the staff for a day.
        </label>
        <input
          type="number"
          onChange={(e) => props.setQuota(e.target.value)}
          className="form-control"
          id="staffQuotaCredits"
          placeholder="Enter number of credits"
        />
      </div>
    </div>
  );
};

export default StaffQuota;
