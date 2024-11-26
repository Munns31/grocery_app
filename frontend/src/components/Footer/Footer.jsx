import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            i am a looser Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique hic reiciendis minus aut aliquid eaque facilis
            perferendis consequuntur incidunt nobis!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Grocery-shop</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact with us</h2>
          <ul>
            <li>01742972368</li>
            <li>moinulislammunna31@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Grocery.com - All right reserved
      </p>
    </div>
  );
};

export default Footer;
