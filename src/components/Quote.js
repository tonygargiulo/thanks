import React, { Component } from 'react';
import axios from 'axios';
import apiConfig from '../.apiKeys';

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
    if (result.data[0].quote && result.data[0].author && result.status === 200){
      // format quote strings
      let displayQuote = `"${result.data[0].quote}"`;
      let displayAuthor = `-${result.data[0].author}`;
      //set state to fetched quote
      this.setState({
          quote: displayQuote,
          author: displayAuthor,
      });
    } else {
      console.log('Error fetching quote');
      //set state to backup quote
      this.setState({
          quote: '"Do not take life too seriously. You will never get out of it alive."',
          author: '-Elbert Hubbard',
        });
    };
  }.bind(this);

  axios.get("https://andruxnet-random-famous-quotes.p.mashape.com/", {
    params: { // get 1 famous quote
      'cat': 'famous',
      'count': '1'
    },
    headers: { // get your own API key at https://rapidapi.com/andruxnet/api/Random%20Famous%20Quotes
      "X-Mashape-Key": apiConfig.QUOTE_API_KEY,
      "X-Mashape-Host": "andruxnet-random-famous-quotes.p.mashape.com"
    }
  }).then(updateQuote);

};

componentDidMount() {
  this.getQuote(); //includes API request and setting state
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
