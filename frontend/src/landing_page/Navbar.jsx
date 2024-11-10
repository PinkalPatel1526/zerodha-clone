import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="border-bottom">
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2">
          {/* Wrapping logo and hamburger menu in a flexbox */}
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={logo} style={{ width: "25%" }} alt="Logo" />
            </Link>

            {/* Hamburger Menu */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 ms-auto">
              <li className="nav-item ms-4">
                <Link className="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}