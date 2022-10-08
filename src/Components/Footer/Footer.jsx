import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerIn">
        <div className="menuContainer">
          <div className="addressContainer">
            <div className="addressHeader">Address</div>
            <div className="addressLine">
              105-Muzammil Town, 19-KM Of Multan Road, Lahore
            </div>
          </div>
          <div className="serviceMenuContainer addressContainer">
            <div className="serviceHeader addressHeader">Services</div>
            <div className="serviceUl">
              <ul>
                <li>OverView</li>
                <li>Features</li>
                <li>Technology</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="getInTouchContainer addressContainer">
            <div className="getInTouchHeader addressHeader">Get in Touch</div>
            <div className="getInTouchBottom">
              <div className="mail textin">info@wimetrix.com</div>
              <div className="number textin">+92 348 4848909</div>
              <div className="iconsContainer textin">
                <FacebookIcon className="icon" />
                <LinkedInIcon className="icon"/>
                <TwitterIcon className="icon"/>
              </div>
            </div>
          </div>
          <div className="supportContainer addressContainer">
            <div className="supportHeader addressHeader">We Support</div>
          </div>
        </div>
        <div className="copyRightContainer">Copyright 2016-2021 WiMetrix</div>
      </div>
    </div>
  );
};

export default Footer;
