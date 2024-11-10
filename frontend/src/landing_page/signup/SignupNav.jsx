import React from "react";
import logo from "../../assets/logo.svg";

export default function SignupNav() {
  return (
    <div className="border-bottom">
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2">
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo */}
            <a className="navbar-brand" href="#">
              <img src={logo} style={{ width: "25%" }} alt="Logo" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}