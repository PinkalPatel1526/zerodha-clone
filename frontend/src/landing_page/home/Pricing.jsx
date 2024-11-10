import React from "react";
import pricing0 from "../../assets/pricing0.svg";
import pricingEquity from "../../assets/pricingEquity.svg";
import otherTrades from "../../assets/other-trades.svg";

export default function Pricing() {
  return (
    <div className="container" style={{ marginTop: "9rem" }}>
      <div className="row">
        <div className="col-lg-5 p-0">
          <h2 style={{ marginBottom: "2.2rem", fontSize: "2.3rem" }}>
            Unbeatable pricing
          </h2>
          <p
            style={{
              margin: "0.5rem 0 1rem 0",
              fontSize: "1.15em",
              fontWeight: "400",
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="landing-page-links">
            <a href="#">
              See pricing{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-7 p-0">
          <div className="price-img" style={{ display: "flex" }}>
            <div>
              <img src={pricing0} alt="img1" />
              <span>Free account opening</span>
            </div>

            <div>
              <img src={pricingEquity} alt="img2" />
              <span> Free equity delivery <br />
              and direct mutual funds</span>
            </div>

            <div>
              <img src={otherTrades} alt="img3" />
              <span className="ms-3"> Intraday and
              F&O</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
