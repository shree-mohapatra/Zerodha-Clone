import React from "react";

export default function Hero() {
  return (
    <>
      <div
        className=" my-5 container-fluid"
        style={{ backgroundColor: "rgb(52, 149, 235)" }}
      >
        <div className="row" style={{ color: "white" }}>
          <div className="col-8">
            <p style={{ marginLeft: "23%" }} className="fs-4 mt-5">
              Support Portal
            </p>
          </div>
          <div className="col-4 mt-5 text-center">
            <a style={{ color: "white" }} className=" fs-5 ">
              Track Tickets
            </a>
          </div>
        </div>

        <div className="row" style={{ color: "white" }}>
          <div
            className="col-8  mt-2 text-center"
            style={{ marginBottom: "7%" }}
          >
            <p className="fs-3  pt-3">
              Search for an answer or browse help topics
              <br /> to create a ticket
            </p>
            <input
              className="px-4"
              style={{
                backgroundColor: "white",
                width: "50%",
                height: "30%",
                border: "none",
                borderRadius: "2%",
              }}
              type="text"
              placeholder="Eg: how do i activate F&Q, why is my order getting rejected.."
            />
            <br />
            <br />
            <a style={{ color: "white" }} href="#">
              Track account opening
            </a>
            &nbsp;&nbsp;
            <a style={{ color: "white" }} href="#">
              Track segment activation
            </a>
            &nbsp;&nbsp;
            <a style={{ color: "white" }} href="#">
              Intraday margins
            </a>
            &nbsp;&nbsp;
            <br />
            <a style={{ color: "white" }} href="#">
              Kite user manual
            </a>
          </div>
          <div className="col-4 p-2 mt-3">
            <p className="fs-3 " style={{ fontWeight: "400" }}>
              Featured
            </p>
            <p className="mx-3">
              1.{" "}
              <a style={{ color: "white" }} href="">
                Current Takeovers and Delisting-January 2025
              </a>
            </p>
            <p className="mx-3">
              2.{" "}
              <a href="" style={{ color: "white" }}>
                Latest Intraday leverages-MIS & CO
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
