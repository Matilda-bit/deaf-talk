import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./WelcomePage.css";

class WelcomePage extends Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <div className={classes.Container}>
          <div className={classes.Text}>
            {" "}
            <h3>Welcome Page</h3>
            <h2> Lets start your first lesson</h2>
          </div>

          <Button
            // variant="success"
            btnType="Success"
            onClick={() => {
              console.log("here");
            }}
          >
            Enter
          </Button>
        </div>
      </div>
    );
  }
}

const WP = WelcomePage;
export default WP;
