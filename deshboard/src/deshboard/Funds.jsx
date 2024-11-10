import React from "react";
import UPI from "../assets/UPI.svg";
import EquityFunds from "./EquityFunds";
import CommaFunds from "./CommaFunds";

export default function Funds() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-sm-12 col-lg-5 mt-4 text-center">
          Instant, zero-cost fund transfers with
          <img
            src={UPI}
            alt="UPI logo"
            style={{ width: "8%", marginLeft: "0.5rem" }}
          />
        </div>
        <div className="col-sm-12 col-lg-5 text-center">
          <div className="addAndwithdraw-funds">
            <button
              style={{
                width: "11rem",
                marginRight: "1rem",
                backgroundColor: "green",
              }}
            >
              Add founds
            </button>
            <button style={{ width: "11rem" }}>Withdraw</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        
        <div className="col">
        <h3 className="text-muted">Equity</h3>
          <div className="funds" style={{}}>
            <EquityFunds />
          </div>
        </div>
        
        <div className="col">
        <h3 className="text-muted">commodity</h3>
          <div className="funds" style={{}}>
              <CommaFunds />
          </div>
        </div>
      </div>
    </div>
  );
}
