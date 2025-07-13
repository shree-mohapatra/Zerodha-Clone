import React from "react";

export default function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-3 mt-5  border-top">
          <h1 className="text-center">People</h1>
        </div>

        <div
          className="row p-3 mt-3  text-muted fs-5"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 mr-5 p-5 text-center">
            <img
              style={{ borderRadius: "50%", width: "55%" }}
              src="media\images\nithinKamath.jpg"
            />
            <br /> <br />
            <h4>Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6  p-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Homepage /
              </a>{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                TradingQnA /
              </a>{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
