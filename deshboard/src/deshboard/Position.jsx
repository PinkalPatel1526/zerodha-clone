import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { positions } from "../data/data.js";

export default function Position() {
  let [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/allPositions').then((res) => {
      setPositions(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div className="container">
      <h2
        className="text-muted"
        style={{ marginTop: "5rem", fontSize: "1.2em", padding: "1.5rem 0" }}
      >
        Holdings({0})
      </h2>
      <div className="row">
        <table>
          <tr
            style={{
              borderTop: "1px solid #808008",
              borderBottom: "1px solid #808088",
            }}
          >
            <th>Product</th>
            <th>instrument</th> 
            <th>Qty</th>
            <th>Avg</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>chg</th>
          </tr>

          {positions.map((stock, idx) => {
            let currVal = stock.price * stock.qty;
            let isProfit = currVal - stock.avg * stock.qty >= 0.0;
            let getPandLClass = isProfit ? "profit" : "loss";
            let getDayChgClass = stock.isLoss ? "loss" : "profit";
            let PL = currVal - stock.avg * stock.qty;

            return (
              <>
                <tr key={idx} style={{}}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  {/* <td>{currVal}</td> */}
                  <td className={getPandLClass}>{PL.toFixed(2)}</td>
                  {/* <td>{stock.net}</td> */}
                  <td className={getDayChgClass}>{stock.day}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}
