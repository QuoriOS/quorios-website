import React from "react";
import { Link } from "react-router-dom";
import "../styles/not-found.css";
import Copyright from "../components/Copyright"; // Import the Copyright component

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-message">
          Looks like you're trying to find something that doesn’t exist.
        </p>
        <Link to="/" className="not-found-button">
          Back to Home
        </Link>
      </div>

      <div className="not-found-footer">
        <Copyright />
      </div>
    </div>
  );
};

export default NotFound;
