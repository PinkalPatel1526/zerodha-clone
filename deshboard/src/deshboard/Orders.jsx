import React from "react";
import orderBook from '../assets/orderbook.svg'

export default function Orders() {
  return (
    <div className="container">
      <div className="row no-order">
        <div className="col text-center mt-5 pt-4">
          <img src={orderBook} alt="orderBook" style={{width:"10%"}} />
          <p>You haven't placed any orders today</p>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}
