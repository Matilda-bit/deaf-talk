import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/auth">Authenticate</NavigationItem>
    <NavigationItem link="/WelcomePage">WelcomePage</NavigationItem>
  </ul>
);

export default navigationItems;
