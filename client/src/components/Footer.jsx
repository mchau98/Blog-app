import React from "react";
import Logo from "../img/logo.png";
import { CopyrightOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        <CopyrightOutlined />
        <span className="copyright">copyright 2024</span>
      </span>
    </footer>
  );
};
export default Footer;
