import React, { Component } from "react";
//import Button from "@material-ui/core/Button";\
import Button from "../UI/Button/Button";
import cartImage0 from "../../components/Images/name.jpg";
import cartImage1 from "../../components/Images/letter.png";
import cartImage2 from "../../components/Images/number.png";
import classes from "./PickLesson.css";

class PickLesson extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <label htmlFor="lesson">
          <h1> Please pick a lesson</h1>
        </label>
        <div className={classes.Lesson}>
          <img src={cartImage0} alt={"image0"} />
          <div className={classes.butt}>
            <Button
              btnType="Danger"
              clicked={() => {
                this.props.history.push("/Lessons0");
              }}
              style={{ margin: 5, marginTop: 30 }}
            >
              Your name
            </Button>
          </div>
        </div>
        <div className={classes.Lesson}>
          <img src={cartImage1} alt={"image1"} />
          <div className={classes.butt}>
            <Button
              btnType="Danger"
              clicked={() => {
                this.props.history.push("/Lessons1");
              }}
              style={{ margin: 5, marginTop: 30 }}
            >
              Letters
            </Button>
          </div>
        </div>

        <div className={classes.Lesson}>
          <img src={cartImage2} alt={"image2"} />
          <div className={classes.butt}>
            <Button
              btnType="Danger"
              clicked={() => {
                this.props.history.push("/Lessons2");
              }}
              style={{ margin: 40, marginTop: 65 }}
            >
              Numbers
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
// <div
//           style={{
//             color: "#504F5A",
//             marginLeft: 5,
//             marginTop: 50,
//             fontSize: 22,
//           }}
//         ></div>
const PL = PickLesson;
export default PL;
