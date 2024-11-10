import React from "react";

export default function CreateTickets() {
  return (
    <div className="container">
      <h2 className="text-muted">To create a ticket, select a relevant topic</h2>

      <div className="row mt-5">
        <div className="col-lg-4 col-sm-12 support-links">
          <a
            href=""
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.8em",
            }}
          >
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            <span className="ms-3">Account Opening</span>
          </a>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "2",
              marginTop: "1.5rem",
            }}
          >
            <li>
              <a href=""> Getting started</a>{" "}
            </li>
            <li>
              <a href=""> Online</a>{" "}
            </li>
            <li>
              <a href=""> Offline</a>{" "}
            </li>
            <li>
              <a href=""> Charges</a>{" "}
            </li>
            <li>
              <a href=""> Company, Partnership and HUF</a>{" "}
            </li>
            <li>
              <a href=""> Non Resident Indian (NRI)</a>{" "}
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-sm-12 support-links">
          <a
            href=""
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.8em",
            }}
          >
            <i class="fa fa-user" aria-hidden="true"></i>
            <span className="ms-3">Your Zerodha Account</span>
          </a>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "2",
              marginTop: "1.5rem",
            }}
          >
            <li>
              <a href=""> Login credentials</a>{" "}
            </li>
            <li>
              <a href=""> Your Profile</a>{" "}
            </li>
            <li>
              <a href=""> Account modification and segment addition</a>{" "}
            </li>
            <li>
              <a href=""> CMR & DP ID</a>{" "}
            </li>
            <li>
              <a href=""> Nomination</a>{" "}
            </li>
            <li>
              <a href=""> Transfer and conversion of shares</a>{" "}
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-sm-12 support-links">
          <a
            href=""
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.8em",
            }}
          >
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            <span className="ms-3"> Trading and Markets</span>
          </a>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "2",
              marginTop: "1.5rem",
            }}
          >
            <li>
              <a href=""> Trading FAQs</a>{" "}
            </li>
            <li>
              <a href=""> Kite</a>{" "}
            </li>
            <li>
              <a href=""> Margins</a>{" "}
            </li>
            <li>
              <a href=""> Product and order types</a>{" "}
            </li>
            <li>
              <a href=""> Corporate actions</a>{" "}
            </li>
            <li>
              <a href=""> Kite features</a>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4 col-sm-12 support-links">
          <a
            href=""
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.8em",
            }}
          >
            <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
            <span className="ms-3">Funds</span>
          </a>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "2",
              marginTop: "1.5rem",
            }}
          >
            <li>
              <a href=""> Fund withdrawal</a>{" "}
            </li>
            <li>
              <a href=""> Adding funds</a>{" "}
            </li>
            <li>
              <a href=""> Adding bank accounts</a>{" "}
            </li>
            <li>
              <a href=""> eMandates</a>{" "}
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-sm-12 support-links">
          <a
            href=""
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.8em",
            }}
          >
            <i class="fa fa-circle" aria-hidden="true"></i>
            <span className="ms-3">Console</span>
          </a>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "2",
              marginTop: "1.5rem",
            }}
          >
            <li>
              <a href=""> IPO</a>{" "}
            </li>
            <li>
              <a href=""> Portfolio</a>{" "}
            </li>
            <li>
              <a href=""> Funds statement</a>{" "}
            </li>
            <li>
              <a href=""> Profile</a>{" "}
            </li>
            <li>
              <a href=""> Reports</a>{" "}
            </li>
            <li>
              <a href=""> Referral program</a>{" "}
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-sm-12 support-links">
          <a
            href=""
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.8em",
            }}
          >
            <i class="fa-solid fa-coins"></i>
            <span className="ms-3">Coin</span>
          </a>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "2",
              marginTop: "1.5rem",
            }}
          >
            <li>
              <a href=""> Understanding mutual funds and Coin</a>{" "}
            </li>
            <li>
              <a href=""> Coin app</a>{" "}
            </li>
            <li>
              <a href=""> Coin web</a>{" "}
            </li>
            <li>
              <a href=""> Transactions and reports</a>{" "}
            </li>
            <li>
              <a href=""> National Pension Scheme (NPS)</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
