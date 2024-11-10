import React from "react";
import educationImg from "../../assets/education.svg";

export default function Education() {
  return (
    <div className="container" style={{ marginTop: "9rem" }}>
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <img src={educationImg} alt="education" style={{position:"relative", bottom:"50px"}} />
        </div>
        <div className="col-lg-1 col-sm-0"></div>

        <div className="col-lg-6 col-sm-12">
          <h2 style={{ marginBottom: "2.2rem", fontSize: "2.3rem" }}>
            Free and open market education
          </h2>

          <div>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <div className="landing-page-links">
              <a href="#">
                Varsity{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="mt-4">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <div className="landing-page-links">
              <a href="#">
              TradingQ&A{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
