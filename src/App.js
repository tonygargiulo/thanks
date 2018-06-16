import React, { Component } from 'react';
import Quote from './components/Quote';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class App extends Component {
constructor(){
  super();
  this.state = {
    listItems: [],
  }
};

render() {
  return (
    <div className="App">
      <Quote />
      <hr />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText primary='First' /><br />
          <ListItemText primary='Second' /><br />
          <ListItemText primary='Third' /><br />
          <ListItemText primary='Fourth' /><br />
        </ListItem>
      </List>
    </div>
  );
};

};

export default App;
