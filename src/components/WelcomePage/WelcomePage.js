import React, { Component } from "react";
//import { useHistory } from "react-router-dom";
import Button from "../UI/Button/Button";
import classes from "./WelcomePage.css";

class WelcomePage extends Component {
  // onSubmit = () => {
  //   //let history = useHistory();
  //   //this.props.history.push("/PickLesson");
  //   this.props.history.push("/translate");
  // };

  render() {
    return (
      <div style={{ padding: 10 }}>
        <div className={classes.Container}>
          <div className={classes.Text}>
            {" "}
            <h1>
              Here you can learn sing language anytime and absolutely free!
            </h1>
          </div>

          <Button
            // variant="success"
            btnType="Success"
            clicked={() => {
              this.props.history.push("/auth");
            }}
          >
            Let’s start!
          </Button>
        </div>
      </div>
    );
  }
}
// this.props.history.push({ path: "/PickLesson" });
// <Button
//             btnType="Success"
//             onClick={this.onSubmit}
//             style={{ margin: 5, marginTop: 30 }}
//           >
//             Enter
//           </Button>
export default WelcomePage;
