import React, { Component } from "react";
import Button from "@material-ui/core/Button";



class WelcomePage extends Component {


  render() {

    return (
      <div style={{ padding: 10 }}>
      <div className="row">
            <div className="col-75">
              <div className="container">
                <div className="row">
                  <div className="col-50">
                    <h3>Welcome Page</h3>
                    <label htmlFor="lesson"><i className="fa fa-user" /> Lets start your first lesson</label>

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
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            console.log("here")
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Enter
        </Button>
      </div>
    );
  }
}

const WP = WelcomePage;
export default WP;
