import React, { Component } from 'react';
import Quote from './components/Quote';

class App extends Component {
constructor() {
  super();
  this.state = {
    quote: {},
  };
};

render() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
};

};

export default App;
