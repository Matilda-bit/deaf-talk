import React from "react";
import classes from "./HomePage.css";
import Icon from "../UI/Icon/Icon";

const HomePage = (props) => {
  return (
    <div className={classes.Container}>
      <Icon />
      <h1>Your Name</h1>
    </div>
  );
};
// <div className={classes.TextBox}>
// <h1>Your Name</h1>
// </div>
export default HomePage;
