import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PatientsList from "./components/PatientsList";

class App extends Component {
  render() {
    return <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/patients" component={PatientsList} />
          </Switch>
        </div>
      </BrowserRouter>;
  }
}

export default App;