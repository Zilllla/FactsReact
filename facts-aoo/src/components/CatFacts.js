import React, { Component } from "react";
import Axios from "axios";

const baseURL = "https://cat-fact.herokuapp.com/facts";

class CatFacts extends Component {
  state = {
    facts: []
  };

  componentDidMount() {
    Axios.get(baseURL).then(res => this.setState({ facts: res.data }));
  }

  render() {
    return (
      <div>
        <h2>Cat Facts</h2>
        <h4>{this.state.facts.text}</h4>
      </div>
    );
  }
}

export default CatFacts;
