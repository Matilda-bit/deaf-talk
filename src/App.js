import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Translate from "./components/Translate/Translate";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Auth from "./containers/Auth/Auth";
import Home from "./components/HomePage/HomePage";
import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/translate" component={Translate} />
            <Route path="/WelcomePage" component={WelcomePage} />
            <Route path="/home" component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

// <h1>Welcome!</h1>
// <Translate />
export default App;
