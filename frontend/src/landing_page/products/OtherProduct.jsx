import React from "react";

export default function OtherProduct({
  imgPath,
  header,
  desc,
  linkName,
  link,
}) {
  return (
    <div className="container" style={{paddingTop:"10%"}}>
      <div className="row other-product">
        <div className="col-lg-5 ">
          <h2 style={{ marginBottom: "2rem" }}>{header}</h2>
          <p style={{ fontSize: "1.14em", lineHeight: "1.8rem" }}>{desc}</p>

          <div className="landing-page-links" style={{ marginBottom: "2rem" }}>
            <a href={link}>
              {linkName}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
          </div>
        </div>
        <div className="col-lg-7">
          <img
            src={imgPath}
            alt="Zerodh Prodoct"
            style={{ alignContent: "center", padding: "0 5%" }}
          />
        </div>
      </div>
    </div>
  );
}
