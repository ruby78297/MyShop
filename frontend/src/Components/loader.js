import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status" variant="primary" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
