import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__text">
        <h1>404: Page not found 🫂</h1>
        <h1>
          Back <Link to="/">Home</Link>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
