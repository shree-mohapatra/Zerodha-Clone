import React from "react";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 px-5" style={{ marginTop: "10%" }}>
            <h1>{productName}</h1>
            <br />
            <p>{productDescription}</p>
            <br />
            <a style={{ textDecoration: "none" }} href={learnMore}>
              Learn More<i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-6 ">
            <img src={imageURL} style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </>
  );
}
