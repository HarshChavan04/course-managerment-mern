import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          🎓 Course Manager
        </Link>

        <div>
          <Link to="/add" className="btn btn-light fw-semibold">
            + Add Course
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;