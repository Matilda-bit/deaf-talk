import React from "react";
//import { Link } from "react-router-dom";
//import classes from "./NavigationItems.css";
//import NavigationItem from "./NavigationItem/NavigationItem";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
//import { connect } from "react-redux";

const navigationItems = (props) => {
  // const { auth } = props;
  // console.log(auth);
  let links = props.isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav>
      <div>{links}</div>
    </nav>
  );
};

// const mapStateToProps = (state) => {
//   //console.log(state);
//   // return {
//   //   auth: state.firebase.auth,
//   // };
//   return {
//     auth: state.auth,
//   };
// };

//export default connect(mapStateToProps)(navigationItems);
export default navigationItems;
