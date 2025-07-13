import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container text-center mt-5 p-5 border-bottom">
        <h1>Technology</h1>
        <p className="fs-5 mt-3 text-muted">
          Sleek modern and intutive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings<i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </>
  );
}
