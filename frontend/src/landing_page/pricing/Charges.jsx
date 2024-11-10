import React from "react";
import pricing0 from "../../assets/pricing0.svg";
import otherTrades from "../../assets/other-trades.svg";

export default function Charges() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <img src={pricing0} alt="" />
          <h3 className="text-center">Free equity delivery</h3>
          <p className="text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img src={pricing0} alt="" />
          <h3 className="text-center">Intraday and F&O trades</h3>
          <p className="text-center">
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img src={otherTrades} alt="" />
          <h3 className="text-center">Free direct MF</h3>
          <p className="text-center">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
