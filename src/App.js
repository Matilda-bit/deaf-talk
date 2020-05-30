import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Translate from "./components/Translate/Translate";
import Auth from "./containers/Auth/Auth";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/translate" component={Translate} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

// <h1>Welcome!</h1>
// <Translate />
export default App;
