import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./Store";
import StarWars from "./components/StarWars";
import MyNavbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div className="App">
            <MyNavbar />
            <h1>REACT REDUX </h1>
            <h1>workshop for supervista employees</h1>
            <Switch>
              <Route exact path="/" component={StarWars} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
