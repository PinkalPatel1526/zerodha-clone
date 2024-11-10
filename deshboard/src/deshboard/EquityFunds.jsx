import React from "react";

export default function EquityFunds() {
  return (
    <>
      <table>
        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Available margin
            </div>
          </td>
          <td>
            <h3 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h3>
          </td>
        </tr>

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Used margin
            </div>
          </td>
          <td>
            <h3 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h3>
          </td>
        </tr>
        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Available cash
            </div>
          </td>
          <td>
            <h3 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h3>
          </td>
        </tr>
        <hr />

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Opening balance
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>
        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Payin
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Payout
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              SPAN
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Delivery margin
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Exposure
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Options premium
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>

        <hr />
        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Collateral (Liquid funds)
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Collateral(Equity)
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>

        <tr style={{ fontSize: "1.1em" }}>
          <td>
            <div
              style={{ marginRight: "10rem", padding: "0.2rem 0.2rem" }}
              className="text-muted"
            >
              Total collateral
            </div>
          </td>
          <td>
            <h5 className="text-muted" style={{ marginTop: "0.7rem" }}>
              {"0.00"}
            </h5>
          </td>
        </tr>
      </table>
    </>
  );
}
