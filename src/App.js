import React, { Component } from "react";
import axios from "axios";

import { search } from "./utils";
import PostCodes from "./PostCodes";

class App extends Component {
  state = {
    postcodes: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const results = await search(
      `http://api.postcodes.io/postcodes/${val}`
    );

    const postcodes = results;
      
    this.setState({ postcodes, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderPostCodes() {
    let postcodes = <h1>Type a valid post code</h1>;
    if (this.state.postcodes) {
      postcodes = <PostCodes list={this.state.postcodes} />;
    }

    return postcodes;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderPostCodes}
      </div>
    );
  }
}

export default App;
