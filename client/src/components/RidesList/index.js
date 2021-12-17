import React from "react";

const RidesList = ({ rides }) => {
  if (!rides.length) {
    return <h3>No rides Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {rides &&
          rides.map((rides) => (
            <div key={rides._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {rides.date}
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {rides.pickupZone}
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {rides.dropoffZone}
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {rides.billAmmount}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RidesList;
