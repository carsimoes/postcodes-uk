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
    let postcodes = <h1></h1>;
    if (this.state.postcodes) {
      postcodes = <PostCodes list={this.state.postcodes} />;
     
      let postsTemp = [];

      if(JSON.parse(localStorage.getItem('postCodesHistory').length > 0)){
        postsTemp = JSON.parse(localStorage.getItem('postCodesHistory'));
        postsTemp.push(this.state.postcodes);

        localStorage.clear();
        localStorage.setItem('postCodesHistory', JSON.stringify(postsTemp));
      }else{
        postsTemp.push(this.state.postcodes);
        localStorage.setItem('postCodesHistory', JSON.stringify(postsTemp));
      }
    }

    return postcodes;
  }

  get renderSearchHistory() {
    let temp = [];
    temp = JSON.parse(localStorage.getItem('postCodesHistory'));

    return temp;
  }

  
  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type a valid post code"
        />
        {this.renderPostCodes}
        
        <div>
          <p>Search history:</p>
          <ul>
            {
              this.renderSearchHistory.map(function(p){
                return <li> {p.postcode} </li>           
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
