import React from "react";

//import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import * as classes from "./SideDrawer.css";
//import "./SideDrawer.css";

import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux1/Aux";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};
// <Aux>
// <Backdrop show={props.open} clicked={props.closed} />
// <div className={attachedClasses.join(" ")}>
//   <nav>
//     <NavigationItems />
//   </nav>
// </div>
// </Aux>
export default sideDrawer;
