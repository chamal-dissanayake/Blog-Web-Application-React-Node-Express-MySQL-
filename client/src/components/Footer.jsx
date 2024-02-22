import React from "react";
import Logo from "../img/bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="footerImg" />
      <span style={{ fontSize: "25px" }}>
        <Link className="link" to="/?cat=AboutUs">
          <h6>
            <b>About Us</b>
          </h6>
        </Link>
      </span>
      <span style={{ fontSize: "25px" }}>
        {" "}
        <Link className="link" to="/?cat=ContactUs">
          <h6>
            <b>Contact Us</b>
          </h6>
        </Link>
      </span>

      <span>
        Powerd By <b>peerWave</b>.
      </span>
    </footer>
  );
};

export default Footer;
