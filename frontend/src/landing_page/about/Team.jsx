import React from "react";
import pinkal from "../../assets/pinkal.jpg";
import TeamMembers from "./TeamMembers";

export default function Team() {
  return (
    <>
      <div className="container" style={{ marginTop: "6rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "5rem" }}>People</h2>
        <div className="row">
          <div
            className="col-lg-5 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={pinkal}
              alt=""
              style={{ borderRadius: "100%", width: "50%" }}
            />
            <h5 className="mt-3">Pinkal Patel</h5>
            <p className="mt-3">Founder, CEO</p>
          </div>

          <div className="col-lg-7 col-sm-12 mt-3">
            <p style={{ fontSize: "1.1em" }}>
              Pinkal bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p style={{ fontSize: "1.1em", marginTop: "2rem" }}>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p style={{ fontSize: "1.1em", marginTop: "2rem" }}>
              He loves coding.
            </p>
            <p
              className="landing-page-links"
              style={{ fontSize: "1.1em", marginTop: "2rem" }}
            >
              Connect on
              <a href="" className="p-2">
                Homepage
              </a>
              /<a href=""> TradingQnA</a>/<a href=""> Twitter</a>
            </p>
          </div>
        </div>
      </div>

      <TeamMembers />
    </>
  );
}
