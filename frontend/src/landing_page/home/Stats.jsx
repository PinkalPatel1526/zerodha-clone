import React from "react";
import ecoSystemImg from "../../assets/ecosystem.png";
import pressLogos from "../../assets/pressLogos.png";

import Usp from "./Usp";

export default function Stats() {
  let heading = [
    "Customer-first always",
    "No spam or gimmicks",
    "The Zerodha universe",
    "Do better with money",
  ];

  let usps = [
    {
      heading: "Customer-first always",
      decs: "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
    },

    {
      heading: "No spam or gimmicks",
      decs: 'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
    },

    {
      heading: "The Zerodha universe",
      decs: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },

    {
      heading: "Do better with money",
      decs: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  return (
    <div className="container" style={{ marginTop: "9rem" }}>
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <h2 style={{ marginBottom: "3.5rem", fontSize: "2.3rem" }}>
            Trust with confidence
          </h2>
          {usps.map((e) => (
            <Usp heading={e.heading} desc={e.decs} />
          ))}
        </div>
        <div className="col-lg-7 col-sm-12">
          <img src={ecoSystemImg} alt="Over Ecosystem" />

          <div className="landing-page-links" style={{ textAlign: "center" }}>
            <a href="#">
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
            <a href="#" style={{ marginLeft: "1.2rem" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="row press-logos" style={{ marginTop: "6rem" }}>
        <img
          src={pressLogos}
          alt="Press-Logos"
          style={{ padding: "0 20% 0 20%" }}
        />
      </div>
    </div>
  );
}
