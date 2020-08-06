import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Translate from "./components/Translate/Translate";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Lessons1 from "./components/Lessons/Lessons1";
import Lessons2 from "./components/Lessons/Lessons2";
import PickLesson from "./components/Lessons/PickLesson";
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
            <Route path="/WelcomePage" component={WelcomePage} />
            <Route path="/Lessons1" component={Lessons1} />
            <Route path="/Lessons2" component={Lessons2} />
            <Route path="/PickLesson" component={PickLesson} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

// <h1>Welcome!</h1>
// <Translate />
export default App;
