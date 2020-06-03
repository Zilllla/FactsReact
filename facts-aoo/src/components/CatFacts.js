import React, { Component } from "react";
import Axios from "axios";

const baseURL = "https://cat-fact.herokuapp.com/facts";

// const click = facts => {
//   let allFacts = facts[Math.floor(Math.random() * 100)];
// };

class CatFacts extends Component {
  constructor() {
    super();
    this.state = {
      facts: []
    };
  }

  componentDidMount() {
    Axios.get(baseURL).then(res => this.setState({ facts: res.data }));
  }

  render() {
    return (
      <div>
        <h2>Cat Facts</h2>
      </div>
    );
  }
}

export default CatFacts;
