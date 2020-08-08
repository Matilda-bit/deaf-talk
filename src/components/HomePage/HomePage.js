import React, { Component } from "react";
import classes from "./HomePage.css";
import Icon from "../UI/Icon/Icon";
import Button from "../../components/UI/Button/Button";
import ProgressBar from "../UI/ProgressBar/ProgressBar";

const testData = [{ bgcolor: "#00695c", completed: 30 }];
class HomePage extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <h1>Hello Friend!</h1>
        <div>
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>

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

//<Icon />

// console.log("click!");
// this.props.history.push("/PickLesson")
// <div className={classes.TextBox}>
// <h1>Your Name</h1>
// </div>

export default HomePage;
