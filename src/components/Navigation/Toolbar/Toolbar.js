import React from "react";

import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
//import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className="Toolbar">
    <div className="ToolbarText">Deaf Talk</div>
    <div>
      <Logo className="Logo" />
    </div>

    <nav className="DesktopOnly">
      <NavigationItems className="ToolbarText" />
    </nav>
  </header>
);
// <div className="Logo">
// <Logo />
// </div>

// <DrawerToggle clicked={props.drawerToggleClicked} />

// <nav className="DesktopOnly">
//   <NavigationItems className="ToolbarText" />
// </nav>
export default toolbar;
