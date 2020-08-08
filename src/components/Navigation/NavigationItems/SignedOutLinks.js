import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const SignedOutLinks = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/WelcomePage">WelcomePage</NavigationItem>

    <NavigationItem link="/about">About Us</NavigationItem>

    <NavigationItem link="/auth">Authenticate</NavigationItem>
  </ul>
);
// <li>
// <NavigationItem link="/WelcomePage">WelcomePage</NavigationItem>
// </li>
// <li>
// <NavigationItem link="/about">About Us</NavigationItem>
// </li>
// <li>
// <NavigationItem link="/auth">Authenticate</NavigationItem>
// </li>
export default SignedOutLinks;
