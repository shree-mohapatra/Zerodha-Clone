import React from "react";

export default function Hero(){
  return(
    <div className="container p-5 mb-5">
    <div className="row text-center">
      <img src="media/images/homeHero.png" alt="hero img" className="mb-4"></img>
      <h1 className="mt-4">Invest in everything</h1>
   <p> Online platform to invest in stocks, derivatives, mutual funds, and more</p>
   <button className="p-2 btn  btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>SignUp Now</button>
    </div>
    </div>
  )
}