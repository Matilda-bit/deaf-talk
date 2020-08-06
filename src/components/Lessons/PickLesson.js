import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import cartImage1 from "../../components/Images/letter.png";
import cartImage2 from "../../components/Images/number.png";



class PickLesson extends Component {


  render() {

    return (
      <div style={{ padding: 10 }}>
      <div className="row">
            <div className="col-75">
              <div className="container">
                <div className="row">
                  <div className="col-50">
                    <label htmlFor="lesson"><i className="fa fa-user" /> Please pick a lesson</label>

                  </div>

                </div>
              </div>
            </div>
          </div>

        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
        </div>
        <img src={cartImage1} alt={"image1"}/>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            this.props.history.push("/Lessons1");
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Enter letters lesson
        </Button>
        <img src={cartImage2} alt={"image2"}/>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            this.props.history.push("/Lessons2");
          }}
          style={{ margin: 40, marginTop: 65 }}
        >
          Enter numbers lesson
        </Button>
      </div>
    );
  }
}

const PL = PickLesson;
export default PL;
