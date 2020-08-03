import React from "react";

import islLogo from "../../assets/images/pngwing.com.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={islLogo} alt="MyLogo" />
  </div>
);

export default logo;
