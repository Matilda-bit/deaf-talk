import React from "react";

import isIcon from "../../../assets/images/profile-icon-9.png";
import classes from "./Icon.css";

const icon = (props) => (
  <div className={classes.Logo}>
    <img src={isIcon} alt="MyIcon" />
  </div>
);

export default icon;
