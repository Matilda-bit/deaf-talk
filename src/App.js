import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import Translate from "./components/Translate/Translate";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Lessons1 from "./components/Lessons/Lessons1";
import Lessons2 from "./components/Lessons/Lessons2";
import PickLesson from "./components/Lessons/PickLesson";
import Auth from "./containers/Auth/Auth";
import Home from "./components/HomePage/HomePage";
import Logout from "./containers/Auth/Logout/Logout";
import Signup from "./containers/Auth/Signup/Signup";

//import * as actions from "./store/actions/index";
//import "./App.css";
import classes from "./App.css";

class App extends Component {
  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/WelcomePage" component={WelcomePage} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={WelcomePage} />
        <Route path="/PickLesson" component={PickLesson} />

        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/translate" component={Translate} />

          <Route path="/Lessons1" component={Lessons1} />
          <Route path="/Lessons2" component={Lessons2} />
          <Route path="/PickLesson" component={PickLesson} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className={classes.App}>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState()),
//   };
// };

// <h1>Welcome!</h1>
// <Translate />
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default withRouter(connect(mapStateToProps)(App));
