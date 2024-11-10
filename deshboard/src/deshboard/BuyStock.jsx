import * as React from "react";
import TextField from "@mui/material/TextField";
import axios from 'axios';

export default function BuyStock({ buyUid, showBuystock, setshowBuystock }) {

  let [StockQty, setQty] = React.useState(1);
  let [price, setPrice] = React.useState(0.0);
  let [amount, setAmount] = React.useState(0);

  let handleBuy = () => {
      axios.post('http://localhost:8080/newOrder', {
        name: buyUid[0],
        qty: StockQty,
        price: buyUid[1],
        mode: "BUY"
      })

      const updated = [...showBuystock];
      updated[0] = false;
      setshowBuystock(updated);
  } 
 
  let handleCancel = () => {
    const updated = [...showBuystock];
    updated[0] = false;
    setshowBuystock(updated);
  };
  
  return (
    <div className="buyAndSellStock-container">
      <form action="" style={{ padding: "1rem" }}>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Qty"
            type="number"
            onChange={(e) => setQty(e.target.value)}      
            value={StockQty}
          />

          <TextField
            required
            id="outlined-required"
            label="Price"
            type="number"
            disabled
            // onChange={(e) => setPrice(e.target.value)}
            value={buyUid[1]}
          />
        </div>
      </form>
      <div className="BS-decs">
        <span style={{ padding: "0 5%" }}>Margin reuired &#8377; 140.65</span>
        <button type="submit" className="buy" onClick={handleBuy}>
          Buy
        </button>

        <button onClick={handleCancel}>Cancel</button>

        <p style={{marginLeft:"1.5rem"}}>Amount <span>{buyUid[1] * StockQty}</span></p>
      </div>
    </div>
  );
}
