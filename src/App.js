import React, { Component } from 'react';
import Quote from './components/Quote';
import axios from  'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class App extends Component {
constructor(){
  super();
  this.state = {
    ListItems: [],
  }
};

componentDidMount() {
  let mappedListItems = [];
  let updateList = function(res) {
      if (res.status !== 200) return;
      // make array of list components
      mappedListItems =  res.data.map(item => {
        if (item.id === 0){
          return <div key={item.id}><ListItem button><ListItemText primary={item.body}/></ListItem></div>;
        } else {
          return <div key={item.id}><Divider /><ListItem button><ListItemText primary={item.body}/></ListItem></div>;
        }
      });
      this.setState({
        ListItems: mappedListItems,
      });
  }.bind(this);

  axios.get('https://jsonplaceholder.typicode.com/posts').then(updateList);
};

render() {
  return (
    <div className="App">
      <Quote />
      <List>
        {this.state.ListItems}
      </List>
    </div>
  );
};

};

export default App;
