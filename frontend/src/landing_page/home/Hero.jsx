import React from "react";
import LandingImg from "../../assets/homeHero.png";

export default function Hero() {
  return (
    <div className="container">
      <div className="row landing-img">
        <img
          src={LandingImg}
          alt="Landing Image"
          style={{
            marginBottom: "3%",
            padding: "2% 15%",
          }}
        />

        <div
          className="landing-signup"
          style={{
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "44px" }}>Invest in everything</h1>
          <p style={{ fontSize: "20px" }}>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button className="signup-btn">Sign up for free</button>
        </div>
      </div>
    </div>
  );
}
