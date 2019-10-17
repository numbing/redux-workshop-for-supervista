import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "./Store";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <h1>hello</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
