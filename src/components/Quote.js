import React, { Component } from 'react';
import unirest from 'unirest';
import apiConfig from '../apiKeys';

// Quote fetches and displays a random quote
class Quote extends Component {
constructor() {
  super();
  this.state = {
    quote: 'Fetching Quote...', //displays briefly during API call
    author: ''
  };
};

getQuote(){
  //set state with new quote after API call
  let updateQuote = function (result) {
    // check status code and if quote and author exist
    if (result.body[0].quote && result.body[0].author && result.statusCode === 200){
      // format quote strings
      let displayQuote = `"${result.body[0].quote}"`;
      let displayAuthor = `-${result.body[0].author}`;
      //set state to fetched quote
      this.setState({
          quote: displayQuote,
          author: displayAuthor,
      });
    } else {
      //set state to backup quote
      this.setState({
          quote: '"Do not take life too seriously. You will never get out of it alive."',
          author: '-Elbert Hubbard',
        });
    };
}.bind(this);

// API GET request
unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1")
  .header("X-Mashape-Key", apiConfig.QUOTE_API_KEY)
  .header("X-Mashape-Host", "andruxnet-random-famous-quotes.p.mashape.com")
  .end(updateQuote);
};

componentDidMount() {
  this.getQuote();
};

render() {
    return (
      <div className='quote-block'>
        <h2>{this.state.quote}</h2>
        <h3>{this.state.author}</h3>
      </div>
    );
}
};

export default Quote;
