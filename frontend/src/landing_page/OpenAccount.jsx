import React from 'react'

export default function OpenAccount() {
  return (
    <div className='container' style={{ marginTop: "6rem" }}>
      
      <div
          className="landing-signup"
          style={{
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "38px" }}>Open a Zerodha account</h2>
          <p className='text-muted' style={{ fontSize: "20px", marginTop:"2rem"}}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button className="signup-btn">Sign up for free</button>
        </div>
    </div>
  )
}
