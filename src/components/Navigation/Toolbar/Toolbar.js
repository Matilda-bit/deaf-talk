import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
//import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.ToolbarText}>Deaf Talk</div>
    <div>
      <Logo className={classes.Logo} />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems
        className={classes.ToolbarText}
        isAuthenticated={props.isAuth}
      />
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
