import React, { Component } from "react";
import classes from "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <h1>Team</h1>
        <div className={classes.TextBox}>
          <h2>
            Deaf Talk - platform for learning one of the most popular sign
            language in Israel ISL.
          </h2>
          <h2>Developed by - a small team of students from the SCE.</h2>{" "}
          <h2>Polina Ovras | Ilya | Warda</h2>
        </div>
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

export default AboutUs;
