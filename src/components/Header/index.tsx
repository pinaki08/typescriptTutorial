import React from "react";
import HeaderBtm from "./HeaderBtm";
import HeaderMid from "./HeaderMid";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div style={{ borderBottom: "1px solid #CCC" }}>
      <HeaderTop />
      <HeaderMid />
      <HeaderBtm />
    </div>
  );
};

export default Header;
