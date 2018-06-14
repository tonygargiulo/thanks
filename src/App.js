import React, { Component } from 'react';
import unirest from 'unirest';
import apiConfig from './apiKeys';

class App extends Component {
constructor() {
  super();
  this.state = {
    quote: {},
  };
}



componentDidMount() {
  //set state with new quote after API call
  let afterReq = function (result) {
    this.setState({quote: result.body[0]});
  }.bind(this);

  unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1")
  .header("X-Mashape-Key", apiConfig.QUOTE_API_KEY)
  .header("X-Mashape-Host", "andruxnet-random-famous-quotes.p.mashape.com")
  .end(afterReq);
};

  render() {
    return (
      <div className="App">
        <h2>&quot;{this.state.quote.quote}&quot;</h2>
        <h3>-{this.state.quote.author}</h3>
      </div>
    );
  };

}

export default App;
