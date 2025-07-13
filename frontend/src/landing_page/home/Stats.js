import React from "react";

export default function Stats() {
  return (
    <>
      <div className="container p-5 ">
        <div className="row p-5">
          <div className="col-6 p-5">
            <h2 className="mb-5">Trust with confidence</h2>
            <h4>Customer-first always</h4>
            <p className="mb-4">
              That’s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
            <h4>No spam or gimmicks</h4>
            <p className="mb-4">
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h4>The Zerodha universe</h4>
            <p className="mb-4">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4>Do better with money</h4>
            <p>
              With initiatives like Nudge and Kill Switch, we don’t just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 p-5">
            <img src="media\images\ecosystem.png" style={{ width: "100%" }} />
            <div className="text-center">
              <a style={{ textDecoration: "none" }} href="" className="mx-5">
                Explore our peoducts <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a style={{ textDecoration: "none" }} href="">
                Try kite done <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
