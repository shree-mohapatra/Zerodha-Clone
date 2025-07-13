import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-4">
            <h2 className="mb-4">Unbeatable pricing</h2>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <div className="row text-center mb-5">
              <div className="col  border pt-4 pb-4">
                <h1>₹0</h1>
                <p>Free equity delivery and direct mutual funds</p>
              </div>
              <div className="col  border pt-4 pb-4">
                <h1>₹20</h1>
                <p>Intraday and F&Q</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
