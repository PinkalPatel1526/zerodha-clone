import React from "react";
import PartnerProgram from "./PartnerProgram";
import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png";
import sensibullLogo from "../../assets/sensibullLogo.svg";
import tijori from "../../assets/tijori.svg";
import streakLogo from "../../assets/streakLogo.png";
import smallcaseLogo from "../../assets/smallcaseLogo.png";
import dittoLogo from "../../assets/dittoLogo.png";




export default function Universe() {
  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <h2
        className="text-center"
        style={{ marginBottom: "2rem", fontSize: "2.5em" }}
      >
        The Zerodha Universe
      </h2>
      <p
        className="text-center"
        style={{ marginBottom: "5rem", fontSize: "1.1em" }}
      >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row">
        <div className="col">
          <PartnerProgram
            imgPath={zerodhaFundhouse}
            desc="Our asset management venture
                  that is creating simple and transparent index
                  funds to help you save for your goals."
          />
        </div>

        <div className="col">
          <PartnerProgram
            imgPath={sensibullLogo}
            desc="Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more."
          />
        </div>

        <div className="col">
          <PartnerProgram
            imgPath={tijori}
            desc="Investment research platform
                  that offers detailed insights on stocks,
                  sectors, supply chains, and more."
          />
        </div>
      </div>
      <div className="row" style={{marginTop:"3rem"}}>
        <div className="col">
          <PartnerProgram
            imgPath={streakLogo}
            desc="
                  Systematic trading platform
                  that allows you to create and backtest
                  strategies without coding."
          />
        </div>

        <div className="col">
          <PartnerProgram
            imgPath={smallcaseLogo}
            desc="
                  Thematic investing platform
                  that helps you invest in diversified
                  baskets of stocks on ETFs."
          />
        </div>

        <div className="col">
          <PartnerProgram
            imgPath={dittoLogo}
            desc="
                  Personalized advice on life
                  and health insurance. No spam
                  and no mis-selling."
          />
        </div>
      </div>
    </div>
  );
}
