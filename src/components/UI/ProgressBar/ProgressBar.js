import React from "react";
import classes from "./ProgressBar.css";
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  // const containerStyles = {
  //   height: 20,
  //   width: "80%",
  //   backgroundColor: "#e0e0de",
  //   borderRadius: 50,
  //   margin: 50,
  // };

  // const fillerStyles = {
  //   height: "100%",
  //   width: `${completed}%`,
  //   backgroundColor: bgcolor,
  //   borderRadius: "inherit",
  //   textAlign: "right",
  // };

  // const labelStyles = {
  //   padding: 5,
  //   color: "white",
  //   fontWeight: "bold",
  // };

  return <div></div>;
};
<div className={classes.containerStyles}>
  <div style={classes.fillerStyles}>Proccess</div>
</div>;
//<span style={classes.labelStyles}>{`${completed}%`}</span>
// , { width: `${completed}%` }

//   <div style={containerStyles}>
//   <div style={fillerStyles}>
//     <span style={labelStyles}>{`${completed}%`}</span>
//   </div>
// </div>
export default ProgressBar;
