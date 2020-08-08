import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const SignedInLinks = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/home">My Home</NavigationItem>
    <NavigationItem link="/class">My Class</NavigationItem>
    <NavigationItem link="/translate">Translate</NavigationItem>
    <NavigationItem link="/about">About Us</NavigationItem>
    <NavigationItem link="/Logout">Log Out</NavigationItem>
    <NavigationItem link="/" className="btn btn-floating pink lighten-1">
      DT
    </NavigationItem>
  </ul>
);

export default SignedInLinks;
