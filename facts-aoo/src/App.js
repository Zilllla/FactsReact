import React, { Component } from "react";

import GenFacts from "./components/GenFacts";
import CatFacts from "./components/CatFacts";

import Axios from "axios";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Facts App</h1>

        <CatFacts />
      </div>
    );
  }
}

export default App;
