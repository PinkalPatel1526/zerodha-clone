import React from "react";

export default function Brokerage() {
  return (
    <div className="container" style={{marginTop:"6rem"}}>
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <h3 style={{textAlign:"center", padding:"1.5rem 0", color:"#387ed1"}}>Brokerage calculator</h3>

          <ul className="text-muted" style={{lineHeight:"2.2"}}>
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + 
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged 
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for  
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be 
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-sm-12">
        <h3 style={{textAlign:"center", padding:"1.5rem 0", color:"#387ed1"}}>List of charges</h3>

        </div>
      </div>
    </div>
  );
}
