import React, { Component } from "react";
import classes from "./HomePage.css";
import Icon from "../UI/Icon/Icon";
import Button from "../../components/UI/Button/Button";

class HomePage extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Icon />
        <h1>Your Name</h1>
        <Button
          clicked={() => {
            this.props.history.push("/PickLesson");
          }}
          btnType="Danger"
        >
          GO TO MY CLASS
        </Button>
      </div>
    );
  }
}
// console.log("click!");
// this.props.history.push("/PickLesson")
// <div className={classes.TextBox}>
// <h1>Your Name</h1>
// </div>

export default HomePage;
