import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/home">My Home</NavigationItem>
    <NavigationItem link="/class">My Class</NavigationItem>
    <NavigationItem link="/translate">Translate</NavigationItem>
    <NavigationItem link="/about">About Us</NavigationItem>
    <NavigationItem link="/WelcomePage">Log out</NavigationItem>
    <NavigationItem link="/auth">Authenticate</NavigationItem>
  </ul>
);
// <NavigationItem link="/auth">Authenticate</NavigationItem>
// <NavigationItem link="/WelcomePage">WelcomePage</NavigationItem>

export default navigationItems;
