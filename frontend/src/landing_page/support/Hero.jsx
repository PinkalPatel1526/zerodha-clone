import React from "react";

export default function Hero() {
  return (
    <div className="support-header" style={{ backgroundColor: "#387ed1", padding:"4% 0 12% 0", marginBottom:"3rem" }}>
      <div className="container" style={{ color: "white" }}>
        <div className="row" style={{padding:"1% 0"}}>
          <div className="col">
            <a href="" style={{textDecoration:"none"}}>
              <h3>Support Portal</h3>
            </a>
          </div>
          <div className="col text-end">
            <a className="text-left" href="">
              Track tickets
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <h5 style={{margin:"1rem 0 3rem 0", fontSize:"1.5em" }}>
              Search for an answer or browse help topics to create a ticket
            </h5>

            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                  style={{height:"4rem"}}
                />
                <span class="input-group-text">
                  {" "}
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </form>

            <div className="serach-links" style={{display:"flex", flexWrap:"wrap", marginTop:"1.2rem"}}>
              <a href="">Track account opening</a>
              <a href=""> Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <h5 style={{fontSize:"1.5em"}}>Featured</h5>

            <ol style={{lineHeight:"2.2", fontSize:"1.2em"}}>
              <li><a href="">Suspension of trading - IDFC Limited</a></li>
              <li><a href="">Rights Entitlements listing in October 2024</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
