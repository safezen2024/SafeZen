import React from "react";
import PricePlans from "../Components/PricePlans";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";
import "../Styles/Pricing.scss";
import PricingCard1 from "../Components/PricingCard1";
import PricingCard2 from "../Components/PricingCard2";
import PricingCard3 from "../Components/PricingCard3";

export default function Pricing() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="pricing">

        <div className="price-heading">
          <h2>Ready to Get Started ?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            soluta minus aut doloribus omnis explicabo illum dolorum facilis eum
            dolorem.
          </p>
        </div>

		<div className="pricing-cards">
			<PricingCard1/>
			<PricingCard2/>
			<PricingCard3/>
		</div>

      </div>

      {/* <PricePlans /> */}
      <Foot />
    </div>
  );
}
