import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="border-bottom my-5">
            <h1 className="my-3">Pricing</h1>
            <p className="mb-5 fs-5" style={{ color: "rgb(110,110,110)" }}>
              Free equity investments and flat ₹20 traday and F&Q trades
            </p>
          </div>
          <div className="col-4">
            <img src="media\images\pricing0.svg" alt="img" />
            <h2>Free equity delivery</h2>
            <p>
              {" "}
              All equity delivery investments (NSE,BSE), are <br />
              absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4">
            <img src="media\images\intradayTrades.svg" alt="img" />
            <h2>Intraday and F&Q trades</h2>
            <p>
              Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
          <div className="col-4">
            <img src="media\images\pricingEquity.svg" alt="img" />
            <h2>Free direct MF</h2>
            <p>
              All direct mutual fund investments are absolutely <br />
              free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
