import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>find your favorite product</h2>
        <p>
          A Curated Selection of Freshness, Delivered to You. Elevate Your
          Everyday Meals with Our Premium Produce. Your Pantry, Replenished.
          Your Taste Buds, Satisfied.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
