import React from "react";
import Menu from "./Menu";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="indece-container">
        <div className="index">
          <span className="index-name">NIFTY 50</span>
          <span className="index-price">{81467.1}</span>
        </div>
        <div className="index">
          <span className="index-name">SENSEX 50</span>
          <span className="index-price">{24981.95}</span>
        </div>
      </div>

        <Menu />
    </div>
  );
}
