import React, { useEffect, useState } from "react";
import axion from "axios";

export default function Holding() {
  let [holdings, setholdings] = useState([]);
  let [holdingsValue, setholdingsValue] = useState({
    totalInvest: 0,
    currValue: 0,
  });
  
  let currPandL = holdingsValue.currValue - holdingsValue.totalInvest;

  useEffect(() => {
    axion
      .get("http://localhost:8080/allHoldings ")
      .then((res) => {
        console.log(res.data);
        setholdings(res.data);

        const totalInvest = res.data.reduce((sum, stock) => {
          return sum + stock.avg * stock.qty;
        }, 0);

        const currValue = res.data.reduce((sum, stock) => {
          return sum + stock.price * stock.qty;
        }, 0);

        setholdingsValue({ totalInvest, currValue });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h2
        className="text-muted"
        style={{ marginTop: "5rem", fontSize: "1.2em", padding: "1.5rem 0" }}
      >
        Holdings({holdings.length})
      </h2>
      <div className="row">
        <table>
          <tr
            style={{
              borderTop: "1px solid #808008",
              borderBottom: "1px solid #808008",
            }}
          >
            <th>instrument</th>
            <th>Qty</th>
            <th>Avg cos</th>
            <th>LTP</th>
            <th>Cur val</th>
            <th>P&L</th>
            <th>Net chg</th>
            <th>Day chg</th>
          </tr>

          {holdings.map((stock, idx) => {
            let currVal = stock.price * stock.qty;
            let isProfit = currVal - stock.avg * stock.qty >= 0.0;
            let getPandLClass = isProfit ? "profit" : "loss";
            let getDayChgClass = stock.isLoss ? "loss" : "profit";
            let PL = currVal - stock.avg * stock.qty;

            return (
              <>
                <tr key={idx} style={{}}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={getPandLClass}>{PL.toFixed(2)}</td>
                  <td>{stock.net}</td>
                  <td className={getDayChgClass}>{stock.day}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col" style={{ padding: "6% 0" }}>
          <span style={{ display: "block", fontSize: "1.5em" }}>
            {holdingsValue.totalInvest.toFixed(2)}
          </span>
          <span className="text-muted">55</span>
          <p className="text-muted mt-4">Total investment</p>
        </div>

        <div className="col" style={{ padding: "6% 0" }}>
          <span style={{ display: "block", fontSize: "1.5em" }}>
            {holdingsValue.currValue.toFixed(2)}
          </span>
          <span className="text-muted">95</span>
          <p className="text-muted mt-4">Current value</p>
        </div>

        <div className="col" style={{ padding: "6% 0" }}>
          {currPandL > 0 ? (
            <div
              className="profit"
              style={{ fontSize: "1.5em", color: "green", fontWeight: "400" }}
            >
              {currPandL.toFixed(2)}
              <span>(+{5.2}%)</span>
            </div>
          ) : (
            <div
              className="loss"
              style={{ fontSize: "1.5em", color: "red", fontWeight: "400" }}
            >
              {currPandL.toFixed(2)}
              <span>(-{5.2}%)</span>
            </div>
          )}

          <p className="text-muted mt-5">P&L</p>
        </div>
      </div>
    </div>
  );
}
