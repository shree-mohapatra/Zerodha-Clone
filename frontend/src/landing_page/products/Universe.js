import React from "react";

export default function Universe() {
  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <h1>The Zerodha Universe</h1>
          <p className="mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-3">
            <div className="my-5">
              <img
                className="mb-3"
                src="media\images\smallcaseLogo.png"
                alt="img"
              />
              <p style={{ color: "rgb(120,120,120)" }}>
                Themetic investment platform
              </p>
            </div>

            <div className="my-5">
              <img
                className="mb-3"
                style={{ width: "55%" }}
                src="media\images\zerodhaFundhouse.png"
              />
              <p style={{ color: "rgb(120,120,120)" }}>Asset management</p>
            </div>
          </div>
          <div className="col-4 p-3">
            <div className="my-5">
              <img
                className="mb-3"
                style={{ width: "40%" }}
                src="media\images\streakLogo.png"
              />
              <p style={{ color: "rgb(120,120,120)" }}>
                Algo & strategy platform
              </p>
            </div>

            <div className="my-5">
              <img
                className="mb-3"
                style={{ width: "53%" }}
                src="media\images\goldenpiLogo.png"
              />
              <p style={{ color: "rgb(120,120,120)" }}>
                Bonds trading platform
              </p>
            </div>
          </div>
          <div className="col-4 p-3">
            <div className="my-5">
              <img
                className="mb-3"
                style={{ width: "50%" }}
                src="media\images\sensibullLogo.svg"
              />
              <p style={{ color: "rgb(120,120,120)" }}>
                Options trading platform
              </p>
            </div>

            <div className="my-5">
              <img
                className="mb-3"
                style={{ width: "35%" }}
                src="media\images\dittoLogo.png"
              />
              <p style={{ color: "rgb(120,120,120)" }}>Insurance</p>
            </div>
          </div>
          <button
            className="p-2 btn  btn-primary fs-6 mb-5 mt-3"
            style={{ width: "15%", margin: "0 auto" }}
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </>
  );
}
