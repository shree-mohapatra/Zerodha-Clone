import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container p-5 my-5">
        <div className="row ">
          <div className="col-6 ">
            <img src={imageURL} style={{ width: "85%" }} />
          </div>
          <div className="col-6 p-3">
            <h1>{productName}</h1>
            <p className="mt-4">{productDescription}</p>
            <br />
            <a
              className="mx-2"
              href={tryDemo}
              style={{ textDecoration: "none" }}
            >
              Try Demo<i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              className="mx-5"
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More<i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <br />
            <br />
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a className="mx-3" href={appStore}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
