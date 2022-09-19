import React from "react";
import Footerstyle from "./Footerstyle";
const Footer = () => {
  return (
    <div className="wrapper">
      <Footerstyle /> <h6>&copy;{new Date().getFullYear()} </h6>{" "}
    </div>
  );
};
export default Footer;
