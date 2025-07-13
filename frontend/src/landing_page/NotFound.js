import React from "react";

export default function NotFound() {
  return (
    <>
      <div className="container p-5 mt-5">
        <div className="row text-center">
          <h2 className="mb-4">404 Not Found</h2>
          <p style={{ color: "red" }}>
            Sorry , the page you are looking for is not exist.
          </p>
        </div>
      </div>
    </>
  );
}
