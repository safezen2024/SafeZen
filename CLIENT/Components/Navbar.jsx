import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Illness from "./Illness";
import axios from "axios";
import { auth, email } from "../data_files/checkLoginStatus";
// axios.defaults.withCredentials = true;
export default function Navbar() {
  axios.defaults.withCredentials = true;
  console.log(auth);
  return (
    <nav className="navbar navbar-expand-lg">
      <a
        href="/"
        className="pl-2 d-inline-flex link-body-emphasis text-decoration-none brand_head"
      >
        <img src="/src//Circle_Logo2.png" alt="brand-logo" height="55" />
        <div className="brand-name">
          <h1 className="navbar-text m-0 p-0 nav-logo-txt">SafeZen</h1>
          <p className="navbar-text subtitle">From your home to your heart</p>
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* <span className="navbar-toggler-icon"></span> */}
        {/* <img src="/src//profile_img.jpg" className="profile-img" height="45vh"/> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div>
          <ul className="navbar-nav">
            {/* <NavLink to="/">
							<li className="nav-item">
								<a className="nav-link navbar-text" href="/">
									Home
								</a>
							</li>
						</NavLink>
						<li className="nav-item dropdown">
							<Illness />
						</li>
						<NavLink to="/workshop">
							<li className="nav-item">
								<a className="nav-link navbar-text" href="/workshop">
									Workshops
								</a>
							</li>
						</NavLink>
						<NavLink to="/aboutus">
							<li className="nav-item">
								<a className="nav-link navbar-text" href="/aboutus">
									About Us
								</a>
							</li>
						</NavLink>
						<NavLink to="/contact">
							<li className="nav-item">
								<a className="nav-link navbar-text" href="/contact">
									Contact
								</a>
							</li>
						</NavLink> */}

            <NavLink to="/" className="nav-item">
                  Home
            </NavLink>
            <li className="nav-item dropdown" style={{paddingTop:'0px'}}>
              <Illness />
            </li>
            <NavLink to="/workshop" className="nav-item">
                  Workshops
            </NavLink>
            <NavLink to="/aboutus" className="nav-item">
                  About Us
            </NavLink>
            <NavLink to="/contact" className="nav-item">
                  Contact
            </NavLink>
          </ul>
        </div>
        <div className="col-md-3 text-end account-buttons">
          {!auth ? (
            <div>
              <Link to="/signup" id="props.id">
                <button type="button" className="btn btn-sign-up">
                  Register
                </button>
              </Link>
              <Link to="/login" id="props.id">
                <button type="button" className="btn me-2">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="profile-logout">
              <Link to="/profile">
                <img
                  src="/src//profile_img.jpg"
                  className="profile-img"
                  height="45vh"
                />
              </Link>
              {/* <Link to="/logout" id="props.id">
								<button type="button" className="btn m-0" onClick={handleDelete}>
									Logout
								</button>
							</Link> */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
