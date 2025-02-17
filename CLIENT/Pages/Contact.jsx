import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";

export default function Contact() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="blue-container">
          <div className="privacy-heading">
            <h1>CONTACT US</h1>
            <p>9322816441</p>
              <a href="mailto:help@safezen.in" style={{color:'white'}}>help@safezen.in</a>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}
