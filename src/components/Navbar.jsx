import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <section>
        <nav className="navbar  navbar-toggleable-sm">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="container">
            <Link className="navbar-brand" to="/">
              Wedding Hall <span className="sr-only">(current)</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/location">
                    Locations
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/facilities">
                    Facilities
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                />
                <button className="btn btn-outline-success " type="submit">
                  Search
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
