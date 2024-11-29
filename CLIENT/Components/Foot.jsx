import React from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

import "../Styles/Footer.scss";

// env.config();

export default function Foot() {
  return (
    <footer className="footer">
      <div className="footer-col1">
        <div>
          <a href="/" className="col1-logo">
            <img src="/src//Circle_Logo3.png" alt="brand-logo" height="60" />
            <div className="logo-txt">
              <h1>SafeZen</h1>
              <p>From your home to your heart</p>
            </div>
          </a>
        </div>

        <div className="address">
          <p>VNIT College, Near South Ambazari Road, Nagpur 440010, India</p>
        </div>

        <div>
          <div className="col1-contact">
			<IoMdMail/>
            <a href="mailto:help@safezen.in">help@safezen.in</a>
          </div>
          <div className="col1-contact" style={{marginTop:'1rem'}}>
			<BsFillTelephoneFill/>
            <a href="tel:+919322816441">+91 9322816441</a>
          </div>
        </div>
      </div>


      <div className="footer-col2">
        <strong>Quick Links</strong>
        <ul className="quick-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/IndTherapy">
            <li>Individual Therapy</li>
          </Link>
          <Link to="/RelTherapy">
            <li>Relationship Therapy</li>
          </Link>
          <Link to="/workshop">
            <li>Workshop</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
        </ul>
      </div>


      <div className="footer-col3">
          <strong>Usefull Links</strong>
        <ul className="usefull-links">
          <Link to="/privacypolicy">
            <li>Privacy Policy</li>
          </Link>
          <Link to="/disclaimer">
            <li>Disclaimer</li>
          </Link>
          <Link to="/termsofservice">
            <li>Terms Of Service</li>
          </Link>
          <Link to="/pricing">
            <li>Pricing</li>
          </Link>
        </ul>
      </div>

      <div className="footer-col4">
          <strong>Follow Us</strong>

        <p className="col-4-txt">
          Lorem ipsum dolor sit amet Consequuntur, sit.
        </p>

        <ul className="social-icons">
          <FaFacebook color="white" fontSize={"1.6rem"} />
          <FaXTwitter color="white" fontSize={"1.6rem"} />
          <FaInstagram color="white" fontSize={"1.6rem"} />
          <FaPinterest color="white" fontSize={"1.6rem"} />
        </ul>
      </div>
      <div
        style={{ width: "95%", height: "1px", backgroundColor: "#FFFFFF40" }}
      ></div>
	  <div className="all-rights-reserved">
		<p>
		  &copy; 2024 All Rights Reserved - SafeZen
		</p>
	  </div>
    </footer>
  );
}
