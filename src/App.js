import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Translate from './components/Translate/Translate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
            <h1>Welcome!</h1>
            <Translate />
          </Layout>
      </div>
    );
  }
}

export default App;
